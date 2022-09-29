import Breed from '../../schemas/Breed'
import { Request, Response } from 'express'

const createBreed = async (req: Request, res: Response) =>{
    
    const breedData = req.body

    try {
        
        const newBreed = new Breed(breedData)
        await newBreed.save()

        res.status(200).json({ ok: true, msg: 'Breed created' })

    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: 'An error occurred, contact with admin',
        })
    }
}

export default createBreed