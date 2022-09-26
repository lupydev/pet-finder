import { Schema, model, Types } from 'mongoose'
import { User } from '../interfaces/user.interface'

const userSchema = new Schema<User>({
    nickname: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
    },
    img: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    pets: [
        {
            types: Types.ObjectId,
        },
    ],
    admin: {
        type: Boolean,
    },
    externId: {
        type: String,
    },
    email_verified: {
        type: Boolean,
        required: true,
    },
    status: {
        type: String,
    },
})

const User = model('User', userSchema)
export default User
