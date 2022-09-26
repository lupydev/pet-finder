import { Schema, model, Types } from 'mongoose'
import { User } from '../interfaces/user.interface'

const userSchema = new Schema<User>({
    nickname: {
        type: String,
        unique: true,
    },
    fullname: {
        type: String,
    },
    img: {
        type: String,
        default:
            'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    pets: [
        {
            types: Types.ObjectId,
            //ref: 'Pet',
        },
    ],
    admin: {
        type: Boolean,
        default: false,
    },
    externId: {
        type: String,
    },
    email_verified: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        default: 'Active',
    },
})

const User = model('User', userSchema)
export default User
