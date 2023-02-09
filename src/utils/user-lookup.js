import Semaphore from '@chriscdn/promise-semaphore'
import get from 'lodash.get'

const semaphore = new Semaphore()

class UserLookup {
  constructor() {
    this.users = {}
  }

  registerUsers(items) {
    items.forEach((user) => (this.users[user.value] = user))
  }

  fullName(userRec) {
    const firstName = userRec.first_name
    const lastName = userRec.last_name
    const username = userRec.name

    if (firstName || lastName) {
      return [firstName, lastName, `(${username})`].join(' ')
    } else {
      return username
    }
  }

  async lookup(session, userId) {
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
