import { emailPassword, emailApi } from './constants'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    tls: {
        rejectUnauthorized: false,
    },
    auth: {
        user: emailApi,
        pass: emailPassword,
    },
})

export const sendEmail = async (email: any, template: any, sub: any) => {
    await transporter.sendMail({
        from: `PetFinder <${email}>`, // sender address
        to: email, // list of receivers
        subject: sub, // Subject line
        text: sub, // plain text body
        html: template, // html body
    })
}
