import Breed from '../../schemas/Breed'
import { Request, Response } from 'express'

const getAllBreedsBySpecies = async (req: Request, res: Response) =>{
    
    const {species} = req.params;    

    try {
        const breeds = await Breed.find({ species: species })

        if (breeds.length > 0) {
            return res.status(200).json({ breeds, ok: true, msg: 'All breeds by species in DB' })
        } else {
            return res.status(200).json({ ok: false, msg: 'No breeds in DB' })
        }

    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occurred, contact with admin',
        })
    }
}

export default getAllBreedsBySpecies