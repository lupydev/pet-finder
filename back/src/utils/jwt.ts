import jwt from 'jsonwebtoken'
import { secretKey } from './constants'

export const generateJWT = async (id: string) => {
    const token = jwt.sign(id, secretKey)
    return token
}
