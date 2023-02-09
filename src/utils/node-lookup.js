import Semaphore from '@chriscdn/promise-semaphore'

const semaphore = new Semaphore()

class NodeLookup {
  constructor() {
    this.nodes = {}
  }

  // registerUsers(items) {
  //   items.forEach((user) => (this.users[user.value] = user))
  // }

  async lookup(session, dataId) {
    try {
      await semaphore.acquire(dataId)

      if (this.nodes[dataId] == null) {
        const response = await session.get(`/api/v1/rh/nodes/${dataId}/lite/`)

        this.nodes[dataId] = response.data
      }

      return this.nodes[dataId]
    } finally {
      semaphore.release(dataId)
    }
  }
}

export default new NodeLookup()
