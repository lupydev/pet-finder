import { Request, Response } from 'express'
import User from '../../schemas/User'

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const user = await User.findById({ _id: id, status: 'Active' }) //Todo:Despopular info para retornar datos basicos

        if (user) {
            return res.status(200).json({ ok: true, msg: 'User found', user })
        }

        return res.status(404).json({ ok: false, msg: 'User not found' })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact an administrator',
        })
    }
}
