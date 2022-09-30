import { Request, Response } from 'express'
import { generateJWT } from '../../utils/jwt'

export const renewToken = async (req: Request, res: Response) => {
    const { id } = req.body

    //* Generar JWT

    const token = generateJWT(id)

    res.send({ ok: true, id, token })
}
