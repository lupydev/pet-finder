import User from '../../schemas/User'
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { generateJWT } from '../../utils/jwt'

const createUser = async (req: Request, res: Response) => {
    const userData = req.body

    try {
        const findUser = await User.findOne({ email: userData.email })
        if (findUser) {
            res.status(200).json({
                ok: false,
                msg: 'The email is already used',
            })
        }

        const newUser = new User(userData)

        //*Encrypt password
        const salt = bcrypt.genSaltSync()
        newUser.password = bcrypt.hashSync(newUser.password, salt)

        //*Generate JWT
        const token = await generateJWT(newUser.id, newUser.admin)

        await newUser.save()
        res.status(200).json({
            ok: true,
            msg: 'User Created',
            id: newUser.id,
            token,
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: 'An error occured, contact an administrator',
        })
    }
}

export default createUser
