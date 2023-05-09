import { type RHNodeSerializer } from "@/types/RHNodeSerializer";
import { Session } from "@kweli/cs-rest";
import Semaphore from "@chriscdn/promise-semaphore";

const semaphore = new Semaphore();

class NodeLookupQueue {
  session: Session | null;
  private queueItems: Array<{ resolveFunc: Function; dataId: number }>;
  private intervalId: NodeJS.Timeout;

  constructor() {
    this.session = null;
    this.queueItems = [];
    this.intervalId = 0 as any;
  }

  resetQueue(): void {
    this.queueItems = [];
  }

  queue(session: Session, resolveFunc: Function, dataId: number) {
    // use the last session
    this.session = session;

    this.queueItems.push({
      resolveFunc,
      dataId,
    });

    clearInterval(this.intervalId);

    this.intervalId = setTimeout(this.processQueue.bind(this), 50);
  }

  async processQueue() {
    const rpcClient = this.session!.rpcClient("/api/v1/rh/rpc/node/");

    const queueItems = this.queueItems;
    this.resetQueue();

    queueItems.forEach((item) => {
      const dataId = item.dataId;
      rpcClient.queue("NodeLookup", { dataId });
    });

    try {
      const responses: Array<RHNodeSerializer> = await rpcClient.batch(true);

      responses.forEach((node, index) => {
        const resolveFunc = queueItems[index].resolveFunc;
        resolveFunc(node);
      });
    } catch {
      // we must call resolve to clear the semaphore
      queueItems.forEach((item) => item.resolveFunc(null));
    }
  }
}

class NodeLookup {
  nodes: Record<number, any>;
  nodeLookupQueue: NodeLookupQueue;

  constructor() {
    this.nodes = {};
    this.nodeLookupQueue = new NodeLookupQueue();
  }

  registerUsers(items: Array<RHNodeSerializer>) {
    items.forEach((user) => (this.nodes[user.dataid] = user));
  }

  async lookup(
    session: Session,
    dataId: number | null,
  ): Promise<RHNodeSerializer | null> {
    if (dataId) {
      await semaphore.acquire(dataId);

      if (this.nodes[dataId]) {
        semaphore.release(dataId);
        return this.nodes[dataId];
      } else {
        // The nodeLookupQueue makes a single request for a batch of independent
        // requests.
        return new Promise((resolve) => {
          const resolver = (user: RHNodeSerializer) => {
            this.nodes[dataId] = user;
            resolve(user);
            semaphore.release(dataId);
          };

          this.nodeLookupQueue.queue(session, resolver, dataId);
        });
      }
    } else {
      return null;
    }
  }
}

export default new NodeLookup();
