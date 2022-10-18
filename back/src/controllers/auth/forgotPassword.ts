import { Request, Response } from 'express'
import User from '../../schemas/User'
import jwt from 'jsonwebtoken'
import { secretKeyReset } from '../../utils/constants'
import { sendRecover } from '../../utils/sendEmail'

const forgotPassword = async (req: Request, res: Response) => {
    const {email} = req.body
    try {
        const user = await User.findOne({ email: email})//Compruebo que usuario exista
        if (!user) {
            return res.status(200).json({ ok: false, msg: 'Email not found' })
        }
        const password = user.password
        const id = user._id
        //creo nuevo token
        const token = jwt.sign({ email, password, id }, secretKeyReset, {
            expiresIn: '30s',
        })
        
        //guardo el token nuevo en base de datos 
        
        await User.updateOne({resetLink:token})//!UpdateOne no funciona Investigar
        
        console.log('usuario cambiado',user);
        if(!user){
            return res.status(400).json({msj:'reset password link error'})
        }else{
        //envio email con nodemailer
            sendRecover(email,token)
            return res.json({msg:'Email sent, kindly follow the instructions'})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact an administrator',
        })
    }
}

export default forgotPassword