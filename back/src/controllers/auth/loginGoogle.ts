import { Request, Response } from 'express'
import jwt_decode from 'jwt-decode'
import { IPayload } from '../../interfaces/jwtPayload'
import User from '../../schemas/User'
import { generateJWT } from '../../utils/jwt'
import bcrypt from 'bcryptjs'

export const loginGoogle = async (req: Request, res: Response) => {
    const { credential } = req.body

    try {
        const userInfo = jwt_decode(credential) as IPayload

        const user = await User.findOne({
            email: userInfo.email,
            status: 'Active',
        })

        if (!user) {
            const newUser = new User({
                nickname: userInfo.given_name,
                fullname: userInfo.name,
                email: userInfo.email,
                password: ':P',
                img: userInfo.picture,
                externId: userInfo.sub,
            })

            //*Encrypt password
            const salt = bcrypt.genSaltSync()
            newUser.password = bcrypt.hashSync(newUser.password, salt)

            //*Generate JWT
            const token = await generateJWT(newUser.id, newUser.admin)

            await newUser.save()
            return res.status(200).json({
                ok: true,
                msg: 'User Created and Logged',
                id: newUser.id,
                token,
                google: true,
            })
        }
        //*Generate JWT
        const token = await generateJWT(user.id, user.admin)
        return res.status(200).json({
            ok: true,
            msg: 'User Logged',
            id: user.id,
            token,
            google: true,
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact an administrator',
        })
    }
}
