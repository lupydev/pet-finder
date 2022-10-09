import { generateJWT } from '../../utils/jwt'
import { Request, Response } from 'express'

export const renewToken = async (req: Request, res: Response) => {
    const admin = req.admin
    const id = req.id

    //* Generar JWT
    const token = await generateJWT(id, admin)

    res.status(200).json({ ok: true, id, admin, token: token })
}
