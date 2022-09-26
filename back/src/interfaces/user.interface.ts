import { StatusUser } from '../utils/enums'

export interface User {
    nickname: string
    fullname?: string
    img: string
    password: string
    email: string
    pets?: string
    admin: boolean
    externId: string
    email_verified: boolean
    status: StatusUser
}
