import { type RHUserSerializer } from '@/types/RHUserSerializer'
import Semaphore from '@chriscdn/promise-semaphore'
import { Session } from '@kweli/cs-rest'

const semaphore = new Semaphore()

class UserLookupQueue {
  session: Session | null
  private queueItems: Array<{ resolveFunc: Function; userId: number }>
  private intervalId: NodeJS.Timeout

  constructor() {
    this.session = null
    this.queueItems = []
    this.intervalId = 0 as any
  }

  resetQueue(): void {
    this.queueItems = []
  }

  queue(session: Session, resolveFunc: Function, userId: number) {
    // use the last session
    this.session = session

    this.queueItems.push({
      resolveFunc,
      userId,
    })

    clearInterval(this.intervalId)

    this.intervalId = setTimeout(this.processQueue.bind(this), 50)
  }

  async processQueue() {
    const rpcClient = this.session!.rpcClient('/api/v1/rh/rpc/user/')

    const queueItems = this.queueItems
    this.resetQueue()

    queueItems.forEach((item) => {
      const userId = item.userId
      rpcClient.queue('UserLookup', { userId })
    })

    try {
      const responses: Array<RHUserSerializer> = await rpcClient.batch(true)

      responses.forEach((user, index) => {
        // const value: number = item.userid
        // const type: number = item.type
        // const text: string = item.displayname

        // const user = { type, text, value }

        const resolveFunc = queueItems[index].resolveFunc

        resolveFunc(user)
      })
    } catch {
      // we must call resolve to clear the semaphore
      queueItems.forEach((item) => item.resolveFunc(null))
    }
  }
}

class UserLookup {
  users: Record<number, any>
  userLookupQueue: UserLookupQueue

  constructor() {
    this.users = {}
    this.userLookupQueue = new UserLookupQueue()
  }

  registerUsers(items: Array<RHUserSerializer>) {
    items.forEach((user) => (this.users[user.userid] = user))
  }

  async lookup(session: Session, userId: number): Promise<RHUserSerializer> {
    await semaphore.acquire(userId)

    if (this.users[userId]) {
      semaphore.release(userId)
      return this.users[userId]
    } else {
      // The userLookupQueue makes a single request for a batch of independent
      // requests.
      return new Promise((resolve) => {
        const resolver = (user: RHUserSerializer) => {
          this.users[userId] = user

          resolve(user)
          semaphore.release(userId)
        }

        this.userLookupQueue.queue(session, resolver, userId)
      })
    }
  }

  async lookup2(session: Session, userId: number) {
    try {
      await semaphore.acquire(userId)

      if (!this.users[userId]) {
        const rpcClient = session.rpcClient('/api/v1/rh/rpc/user/')

        // RHUserSerializer
        const userInfo: Record<string, any> = await rpcClient.request(
          'UserLookup',
          { userId },
        )

        const value: number = userInfo.userid
        const type: number = userInfo.type
        const text: string = userInfo.displayname

        if (value) {
          this.users[userId] = { type, text, value }
        }
      }

      return this.users[userId]
    } finally {
      semaphore.release(userId)
    }
  }
}

export default new UserLookup()
