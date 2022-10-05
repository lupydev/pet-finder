import User from '../../schemas/User'
import users from './users.json'

export const fillUsers = async () => {
    const isUser = await User.findOne()

    !isUser ? await User.insertMany(users) : null
}
