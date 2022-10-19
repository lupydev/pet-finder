import { Request, Response } from 'express'
import { sendEmail } from '../../utils/sendEmail'
import getContactTemplate from '../../utils/getContactTemplate'
import { getMessages } from '../../utils/getMessages'

export const sendContact = (req: Request, res: Response) => {
    const values = req.body

    console.log(values.lastname)
    console.log(values.phone)
    console.log(values.emailTo)

    try {
        if (values.lastname) {
            console.log('constact')
            sendEmail(
                'nocountry.s4.11.mern@gmail.com',
                getContactTemplate(values),
                'Contact Form'
            )

            return res.status(200).json({ ok: true, msg: 'Email sent' })
        }

        if (values.phone) {
            console.log('message')
            sendEmail(values.emailTo, getMessages(values), 'PetFinder Message')

            return res.status(200).json({ ok: true, msg: 'Email sent' })
        }

        return res
            .status(400)
            .json({ ok: false, msg: 'Email not sent,send values' })
    } catch (error) {
        return res.status(400).json({ ok: false, msg: 'Email not sent' })
    }
}
