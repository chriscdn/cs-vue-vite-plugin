import Semaphore from '@chriscdn/promise-semaphore'
import get from 'lodash.get'

const semaphore = new Semaphore()

class AncestorLookup {
  constructor() {
    this.nodes = {}
  }

  registerNodes(items) {
    items.forEach((user) => {
      this.nodes[user.value] = user
    })
  }

  async lookup(session, dataId) {
    try {
      await semaphore.acquire(dataId)

      if (!this.nodes[dataId]) {
        const response = await session.nodes.ancestors(dataId)
        this.nodes[dataId] = get(response, 'data.ancestors', [])
      }

      return this.nodes[dataId]
    } finally {
      semaphore.release(dataId)
    }
  }
}

export default AncestorLookup
