import { type RHNodeSerializer } from "../types/RHNodeSerializer";
import { Session } from "@kweli/cs-rest";
import Semaphore from "@chriscdn/promise-semaphore";

const semaphore = new Semaphore();

function responseToRHNodeSerializer(nodeInfo: any): RHNodeSerializer {
  const properties = nodeInfo.results.data.properties;
  const versions: Array<any> = nodeInfo.results.data.versions;
  const latestVersion = versions[versions.length - 1];

  // todo
  // @ts-ignore
  return {
    dataId: properties.id,
    name: properties.name,
    subtype: properties.type,
    subtypeName: properties.type_name,
    comment: properties.description,
    mimetype: properties.mime_type,
    parentId: properties.parent_id,
    createDate: properties.create_date,
    modifyDate: properties.modify_date,
    gif: properties.icon,
    gif32: properties.icon_large,
    userId: properties.owner_user_id,
    groupId: properties.owner_group_id,
    version: latestVersion?.version_number,
    versionNum: latestVersion?.version_number_name,
    modifiedImageCallback: "",
    categories: {},
    url: "",
    exatt1: null,
    originDataId: null,
  };
}

type TResolveFunction = (item: RHNodeSerializer | null) => void;

class NodeLookupQueue {
  session: Session | null;
  private queueItems: Array<{ resolveFunc: TResolveFunction; dataId: number }>;
  private intervalId: NodeJS.Timeout;

  constructor() {
    this.session = null;
    this.queueItems = [];
    this.intervalId = 0 as any;
  }

  resetQueue(): void {
    this.queueItems = [];
  }

  queue(session: Session, resolveFunc: TResolveFunction, dataId: number) {
    // use the last session
    this.session = session;

    this.queueItems.push({
      resolveFunc,
      dataId,
    });

    clearInterval(this.intervalId);

    // throttle to prevent a massive batch of requests
    if (this.queueItems.length < 30) {
      this.intervalId = setTimeout(this.processQueue.bind(this), 50);
    } else {
      this.processQueue();
    }
  }

  private async processQueue() {
    const rpcClient = this.session!.rpcClient("/api/v1/rh/rpc/node/");

    const queueItems = this.queueItems;
    this.resetQueue();

    const dataids = queueItems.map((item) => item.dataId);

    const nodes: RHNodeSerializer[] = await rpcClient.request("NodesLookup", {
      dataids,
    });

    queueItems.forEach((item) => {
      const id = item.dataId;
      const resolveFunc = item.resolveFunc;

      const node = nodes.find((node) => node.dataId === id);

      resolveFunc(node ?? null);
    });

    // console.log(response);

    // debugger;

    /*
    queueItems.forEach((item) => {
      const dataId = item.dataId;
      rpcClient.queue("NodeLookup", { dataId });
    });

    try {
      const responses: Array<RHNodeSerializer> = await rpcClient.batch();

      responses.forEach((node, index) => {
        const resolveFunc = queueItems[index].resolveFunc;
        resolveFunc(node);
      });
    } catch {
      // we must call resolve to clear the semaphore
      queueItems.forEach((item) => item.resolveFunc(null));
    }
    */
  }
}

class NodeLookup {
  nodes: Record<number, RHNodeSerializer | null>;
  nodeLookupQueue: NodeLookupQueue;

  constructor() {
    this.nodes = {};
    this.nodeLookupQueue = new NodeLookupQueue();
  }

  // registerUsers(items: Array<RHNodeSerializer>) {
  //   items.forEach((user) => (this.nodes[user.dataid] = user));
  // }

  async lookupLegacy(session: Session, dataId: number | null): Promise<any> {
    if (dataId) {
      try {
        await semaphore.acquire(dataId);

        if (this.nodes.hasOwnProperty(dataId)) {
          return this.nodes[dataId];
        } else {
          const response = await session.nodes.node({ dataid: dataId });

          // Not a perfect conversion
          const nodeInfo = responseToRHNodeSerializer(response.data);
          this.nodes[dataId] = nodeInfo;

          return nodeInfo;
        }
      } catch {
        this.nodes[dataId] = null;
        return null;
      } finally {
        semaphore.release(dataId);
      }
    }
  }

  async lookupRPC(
    session: Session,
    dataId: number | null
  ): Promise<RHNodeSerializer | null> {
    if (dataId) {
      await semaphore.acquire(dataId);

      if (this.nodes.hasOwnProperty(dataId)) {
        semaphore.release(dataId);
        return this.nodes[dataId];
      } else {
        // The nodeLookupQueue makes a single request for a batch of independent
        // requests.
        return new Promise((resolve, reject) => {
          const resolver = (user: RHNodeSerializer | null) => {
            if (user instanceof Error) {
              reject(user);
            } else {
              this.nodes[dataId] = user;
              resolve(user);
            }
            semaphore.release(dataId);
          };

          this.nodeLookupQueue.queue(session, resolver, dataId);
        });
      }
    } else {
      return null;
    }
  }

  async lookup(
    session: Session,
    dataId: number | null,
    legacy: boolean = false
  ): Promise<RHNodeSerializer | null> {
    return legacy
      ? this.lookupLegacy(session, dataId)
      : this.lookupRPC(session, dataId);
  }
}

export default new NodeLookup();
