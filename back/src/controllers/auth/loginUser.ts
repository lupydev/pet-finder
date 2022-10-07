import { Request, Response } from 'express'
import User from '../../schemas/User'
import bcrypt from 'bcryptjs'
import { generateJWT } from '../../utils/jwt'

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email, status: 'Active' })

        //*Comprobar que el email este en la base de datos
        if (!user) {
            return res.status(200).json({ ok: false, msg: 'Email not found' })
        }

        //* Comprobar que las contraseñas coincidan
        const validPassword = bcrypt.compareSync(password, user.password)

        if (!validPassword) {
            return res.status(200).json({
                ok: false,
                msg: 'Incorrect Password',
            })
        }

        //* Crear JWT

        const token = await generateJWT(user.id, user.admin)

        return res.status(200).json({
            ok: true,
            msg: 'User Logged',
            token,
            id: user._id,
            admin: user.admin,
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact an administrator',
        })
    }
}
