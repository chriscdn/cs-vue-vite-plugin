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
    userid: properties.id,
    displayname: properties.name_formatted,
    gif: null,
    type: properties.type,
    isDeleted: properties.deleted,
    firstName: properties.first_name,
    lastName: properties.last_name,
    email: properties.business_email,
    groupid: properties.group_id,
    title: properties.title,
    isUser: properties.type === 0,
    isGroup: properties.type === 1,
    isRole: properties.type >= 2000,
    isRecordsManager: false,
    canLogin: properties.privilege_login,
    isAdmin: properties.privilege_system_admin_rights,
    locale: properties.display_language,
    userdata: null,
    photoid: null,
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

    this.intervalId = setTimeout(this.processQueue.bind(this), 50);
  }

  async processQueue() {
    const rpcClient = this.session!.rpcClient("/api/v1/rh/rpc/user/");

    const queueItems = this.queueItems;
    this.resetQueue();

    queueItems.forEach((item) => {
      const userId = item.userId;
      rpcClient.queue("UserLookup", { userId });
    });

    try {
      const responses: Array<RHUserSerializer> = await rpcClient.batch(true);

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
  users: Record<number, RHUserSerializer>;
  userLookupQueue: UserLookupQueue;

  constructor() {
    this.users = {};
    this.userLookupQueue = new UserLookupQueue();
  }

  registerUsers(items: Array<RHUserSerializer>) {
    items.forEach((user) => (this.users[user.userid] = user));
  }

  async lookupLegacy(
    session: Session,
    userId: number | null,
  ): Promise<RHUserSerializer | null> {
    if (userId) {
      try {
        await semaphore.acquire(userId);

        if (this.users[userId]) {
          return this.users[userId];
        } else {
          const response = await session.members.member(userId);
          const userInfo = responseToRHUserSerializer(response.data);
          this.users[userId] = userInfo;

          return userInfo;
        }
      } finally {
        semaphore.release(userId);
      }
    } else {
      return null;
    }
  }

  async lookupRPC(
    session: Session,
    userId: number | null,
  ): Promise<RHUserSerializer | null> {
    if (userId) {
      await semaphore.acquire(userId);

      if (this.users[userId]) {
        semaphore.release(userId);
        return this.users[userId];
      } else {
        // The userLookupQueue makes a single request for a batch of independent
        // requests.
        return new Promise((resolve) => {
          const resolver = (user: RHUserSerializer) => {
            this.users[userId] = user;
            resolve(user);
            semaphore.release(userId);
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
    legacy: boolean = false,
  ): Promise<RHUserSerializer | null> {
    return legacy
      ? this.lookupLegacy(session, userId)
      : this.lookupRPC(session, userId);
  }
}

export default new UserLookup();
