import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    tls: {
        rejectUnauthorized: false,
    },
    auth: {
        user: 'nocountry.s4.11.mern@gmail.com',
        pass: 'eanbexrdhwhoptya',
    },
})

export const sendEmail = async (email:any, template: any) => {
    await transporter.sendMail({
        from: 'PetFinder <nocountry.s4.11.mern@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Bienvenido ✔', // Subject line
        text: 'Bienvenido', // plain text body
        html: template, // html body
    })
}

export const sendRecover = async (token :any, email: any) => {
    await transporter.sendMail({
        from: 'PetFinder <nocountry.s4.11.mern@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Link de recuperacion Password', // Subject line
        text: 'Por favor click en el link para recuperar password', // plain text body
        html: `<p>https://localhost:4000/forgot-pass/${token}</p>`, // html body
    })
}

