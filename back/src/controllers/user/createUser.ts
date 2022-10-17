import User from '../../schemas/User'
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { generateJWT } from '../../utils/jwt'
import axios from 'axios'
import { getTemplateWelcome } from '../../utils/getTemplateWelcome'
import { sendEmail } from '../../utils/sendEmail'

const createUser = async (req: Request, res: Response) => {
    const userData = req.body

    const data = {
        members: [
            {
                email_address: userData.email,
                status: 'subscribed',
            },
        ],
    }

    const postData = JSON.stringify(data)

    try {
        const findUser = await User.findOne({ email: userData.email })
        if (findUser) {
            return res.status(200).json({
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

        //Mail bienvenida
        sendEmail(userData.email, getTemplateWelcome())

        await newUser.save()

        res.status(200).json({
            ok: true,
            msg: 'User Created',
            id: newUser.id,
            token,
        })

        //MailChimp

        await axios.post(
            'https://us17.api.mailchimp.com/3.0/lists/fdb3e04161/',
            postData,
            {
                headers: {
                    Authorization: 'auth 640616577f4e558d43138af6893b722d-us17',
                },
            }
        )

        return
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact an administrator',
        })
    }
}

export default createUser
