import { Request, Response } from 'express'
import User from '../../schemas/User'
import jwt from 'jsonwebtoken'
import { secretKey } from '../../utils/constants'
import { sendEmail } from '../../utils/sendEmail'
import { baseUrl } from '../../../src/utils/constants'
import { getTemplateForgotPassword } from '../../utils/getTemplateForgotPassword'

const forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body
    try {
        const user = await User.findOne({ email: email }) //Compruebo que usuario exista
        if (!user) {
            return res.status(200).json({ ok: false, msg: 'Email not found' })
        }
        const id = user._id
        //creo nuevo token
        const token = jwt.sign({ email, id }, secretKey, {
            expiresIn: '10m',
        })

        //guardo el token nuevo en base de datos

        const userUpdate = await User.findOneAndUpdate(
            { email: email },
            { resetLink: token }
        )

        if (!userUpdate) {
            return res.status(200).json({ok:false, msg: 'reset password link error' })
        }

        //envio email con nodemailer
        sendEmail(
            userUpdate.email,
            getTemplateForgotPassword(baseUrl, token),
            'Forgot Password'
        )
        return res.json({ ok:true, msg: 'Email sent, kindly follow the instructions' })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            ok: false,
            msg: 'An error occured, contact an administrator',
        })
    }
}

export default forgotPassword
