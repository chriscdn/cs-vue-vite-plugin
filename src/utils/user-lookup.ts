import { type RHUserSerializer } from "../types/RHUserSerializer";
import Semaphore from "@chriscdn/promise-semaphore";
import { Session } from "@kweli/cs-rest";

const semaphore = new Semaphore();

/**
 * Convert a v1 API call to something that resembles RHUserSerializer.
 *
 * @param userInfo
 * @returns
 */
function responseToRHUserSerializer(userInfo: any): RHUserSerializer {
  const properties = userInfo.results.data.properties;

  return {
    name: properties.name,
    userId: properties.id,
    displayName: properties.name_formatted,
    gif: null,
    type: properties.type,
    isDeleted: properties.deleted,
    firstName: properties.first_name,
    lastName: properties.last_name,
    email: properties.business_email,
    groupId: properties.group_id,
    title: properties.title,
    isUser: properties.type === 0,
    isGroup: properties.type === 1,
    isRole: properties.type >= 2000,
    isRecordsManager: false,
    canLogin: properties.privilege_login,
    isAdmin: properties.privilege_system_admin_rights,
    locale: properties.display_language,
    userdata: null,
    photoId: null,
  };
}

class UserLookupQueue {
  session: Session | null;
  private queueItems: Array<{ resolveFunc: Function; userId: number }>;
  private intervalId: NodeJS.Timeout;

  constructor() {
    this.session = null;
    this.queueItems = [];
    this.intervalId = 0 as any;
  }

  resetQueue(): void {
    this.queueItems = [];
  }

  queue(session: Session, resolveFunc: Function, userId: number) {
    // use the last session
    this.session = session;

    this.queueItems.push({
      resolveFunc,
      userId,
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
    const rpcClient = this.session!.rpcClient("/api/v1/rh/rpc/user/");

    const queueItems = this.queueItems;
    this.resetQueue();

    queueItems.forEach((item) => {
      const userId = item.userId;
      rpcClient.queue("UserLookup", { userId });
    });

    try {
      const responses: Array<RHUserSerializer> = await rpcClient.batch();

      responses.forEach((user, index) => {
        const resolveFunc = queueItems[index].resolveFunc;
        resolveFunc(user);
      });
    } catch {
      // we must call resolve to clear the semaphore
      queueItems.forEach((item) => item.resolveFunc(null));
    }
  }
}

class UserLookup {
  users: Record<number, RHUserSerializer | null>;
  userLookupQueue: UserLookupQueue;

  constructor() {
    this.users = {};
    this.userLookupQueue = new UserLookupQueue();
  }

  // registerUsers(items: Array<RHUserSerializer>) {
  //   items.forEach((user) => (this.users[user.userid] = user));
  // }

  async lookupLegacy(
    session: Session,
    userId: number | null
  ): Promise<RHUserSerializer | null> {
    if (userId) {
      try {
        await semaphore.acquire(userId);

        if (this.users.hasOwnProperty(userId)) {
          return this.users[userId];
        } else {
          const response = await session.members.member(userId);
          const userInfo = responseToRHUserSerializer(response.data);
          this.users[userId] = userInfo;

          return userInfo;
        }
      } catch {
        this.users[userId] = null;
        return null;
      } finally {
        semaphore.release(userId);
      }
    } else {
      return null;
    }
  }

  async lookupRPC(
    session: Session,
    userId: number | null
  ): Promise<RHUserSerializer | null> {
    if (userId) {
      await semaphore.acquire(userId);

      // if (this.users[userId]) {
      if (this.users.hasOwnProperty(userId)) {
        semaphore.release(userId);
        return this.users[userId];
      } else {
        // The userLookupQueue makes a single request for a batch of independent requests.
        return new Promise((resolve, reject) => {
          const resolver = (user: RHUserSerializer | Error) => {
            if (user instanceof Error) {
              reject(user);
            } else {
              this.users[userId] = user;
              resolve(user);
              semaphore.release(userId);
            }
          };

          this.userLookupQueue.queue(session, resolver, userId);
        });
      }
    } else {
      return null;
    }
  }

  async lookup(
    session: Session,
    userId: number | null,
    legacy: boolean = false
  ): Promise<RHUserSerializer | null> {
    return legacy
      ? this.lookupLegacy(session, userId)
      : this.lookupRPC(session, userId);
  }
}

export default new UserLookup();
