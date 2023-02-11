import Semaphore from '@chriscdn/promise-semaphore'
import type { Session } from '@kweli/cs-rest'
import get from 'lodash.get'

const semaphore = new Semaphore()

class AncestorLookup {
  nodes: Record<number, Array<Record<string, any>>>

  constructor() {
    this.nodes = {}
  }

  // registerNodes(items: Array<Record<string, any>>) {
  //   items.forEach((user) => {
  //     this.nodes[user.value] = user
  //   })
  // }

  async lookup(
    session: Session,
    dataId: number,
  ): Promise<Array<Record<string, any>>> {
    try {
      await semaphore.acquire(dataId)

      if (!this.nodes[dataId]) {
        const response = await session.nodes.ancestors(dataId)
        this.nodes[dataId] = get(response, 'data.ancestors', []) as Array<
          Record<string, any>
        >
      }

      return this.nodes[dataId]
    } finally {
      semaphore.release(dataId)
    }
  }
}

export default new AncestorLookup()
