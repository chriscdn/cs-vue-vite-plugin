import Semaphore from '@chriscdn/promise-semaphore'
import { Session } from '@kweli/cs-rest'
import get from 'lodash.get'

const semaphore = new Semaphore()

export type UserSimple = {
  value: number
  type: number
  text: string
}

class UserLookup {
  users: Record<string, any>

  constructor() {
    this.users = {}
  }

  registerUsers(items: Array<UserSimple>) {
    items.forEach((user) => (this.users[user.value] = user))
  }

  fullName(userRec: Record<string, any>) {
    const firstName = userRec.first_name
    const lastName = userRec.last_name
    const username = userRec.name

    if (firstName || lastName) {
      return [firstName, lastName, `(${username})`].join(' ')
    } else {
      return username
    }
  }

  async lookup(session: Session, userId: number) {
    try {
      await semaphore.acquire(userId)

      if (!this.users[userId]) {
        const response = await session.members.member(userId, 'v1')

        const value = get(response, 'data.data.id')
        const type = get(response, 'data.data.type')
        const text = this.fullName(get(response, 'data.data')) // get(response, 'data.data.name')

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
