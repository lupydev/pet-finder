import Pet from '../../schemas/Pet'
import { Request, Response } from 'express'

const createPet = async (req: Request, res: Response) => {
    const petData = req.body
    try {
        const newPet = new Pet(petData)
        await newPet.save()

        res.status(200).json({ ok: true, msg: 'Pet Created' })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: 'An error occured, contact with admin',
        })
    }
}

export default createPet