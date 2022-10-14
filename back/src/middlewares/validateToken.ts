import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { secretKey } from '../utils/constants'
import { IPayload } from '../interfaces/jwtPayload'

export const validateJWT = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    //*Recibo por headers el token

    const token = req.header('token')

    try {
        if (!token) {
            return res.status(401).json({
                ok: false,
                msg: 'Access denied',
            })
        }

        const payload = jwt.verify(token, secretKey) as IPayload

        req.id = payload.id
        req.admin = payload.admin
        return next()
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            ok: false,
            msg: 'Token not valid',
        })
    }
}
