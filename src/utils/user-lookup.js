import get from 'lodash.get'
import Semaphore from '@chriscdn/promise-semaphore'

const semaphore = new Semaphore()

class UserLookup {
    constructor() {
        this.users = {}
    }

    registerUsers(items) {
        items.forEach((user) => {
            this.users[user.value] = user
        })
    }

    async lookup(session, userId) {
        try {
            await semaphore.acquire(userId)

            if (!this.users[userId]) {
                const response = await session.members.member(userId, 'v1')

                const value = get(response, 'data.data.id')
                const type = get(response, 'data.data.type')
                const text = get(response, 'data.data.name')

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

export default UserLookup
