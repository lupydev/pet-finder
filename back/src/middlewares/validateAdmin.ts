import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { secretKey } from '../utils/constants'
import { IPayload } from '../interfaces/jwtPayload'

export const validateAdmin = async (
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

        jwt.verify(token, secretKey) as IPayload

        return next()
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'Token not valid',
        })
    }
}
