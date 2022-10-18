import { Request, Response } from 'express'

import User from '../../schemas/User'
import bcrypt from 'bcryptjs'

export const resetPassword = async (req: Request, res: Response) => {
    const token = req.header('token')
    const newPassword = req.body.password
    const id = req.id

    if (!token)
        return res
            .status(200)
            .json({ ok: false, msg: 'Token must be provided' })

    try {
        const user = await User.findById({ _id: id })

        if (user && token === user.resetLink) {
            //*Encrypt password
            const salt = bcrypt.genSaltSync()
            const hashPassword = bcrypt.hashSync(newPassword, salt)

            user.password = hashPassword
            user.resetLink = ''
            user.save()

            return res.status(200).json({
                ok: true,
                msg: 'The password has been changed',
                id: user._id,
            })
        }

        return res.status(200).json({ ok: false, msg: 'User not found' })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact an administrator',
        })
    }
}
