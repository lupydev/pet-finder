import User from '../../schemas/User'
import { Request, Response } from 'express'

const createUser = async (req: Request, res: Response) => {
    const userData = req.body
    try {
        const newUser = new User(userData)
        await newUser.save()

        res.status(200).json({ ok: true, msg: 'User Created' })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: 'An error occured, contact an administrator',
        })
    }
}

export default createUser
