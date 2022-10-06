import { Request, Response } from 'express'
import User from './../../schemas/User'

//* Devuelve todos usuarios con status 'Active'
//!Queda pendiente middleware para asegurar quienes acceden a este endpoint

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const allUsers = await User.find({ status: 'Active' }) //!ver populate despues

        if (allUsers) {
            return res.status(200).json({ ok: true, allUsers })
        }

        return res.status(200).json({ ok: false, msg: 'Users not found' })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact an administrator',
        })
    }
}
