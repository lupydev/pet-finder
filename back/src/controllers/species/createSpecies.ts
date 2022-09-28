import Species from '../../schemas/Species'
import { Request, Response } from 'express'

const createSpecies = async (req: Request, res: Response) => {
    const speciesData = req.body
    try {
        const newSpecie = new Species(speciesData)
        await newSpecie.save()

        res.status(200).json({ ok: true, msg: 'Species Created' })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: 'An error occured, contact with admin',
        })
    }
}

export default createSpecies