import Species from '../../schemas/Species'
import { Request, Response } from 'express'

const getAllSpecies = async (_req: Request, res: Response) => {

    try {
        const species = await Species.find()
        if (species.length > 0) {
            return res
                .status(200)
                .json({ species, ok: true, msg: 'All species in DB' })
        } else {
            return res.status(404).json({ ok: false, msg: 'No species in DB' })
        }
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact with admin',
        })
    }
}

export default getAllSpecies