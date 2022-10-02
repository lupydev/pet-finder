import jwt from 'jsonwebtoken'
import { secretKey } from './constants'

export const generateJWT = async (id: string, admin: boolean) => {
    const token = jwt.sign({ id, admin }, secretKey, {
        expiresIn: '2h',
    })
    return token
}
