import Breed from '../../schemas/Breed'
import { Request, Response } from 'express'

const deleteBreed = async (req: Request, res: Response) =>{

    const { id } = req.params;

    try {

        const breed = await Breed.findByIdAndDelete({_id: id});

        if(breed){               
            return res.status(200).json({ breed, ok: true, msg: 'Breed deleted' })
        }else{
            return res.status(404).json({ ok: false, msg: 'Breed id not found' })
        }

    } catch (error) {

        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occurred, contact admin',
        })
            
    }
}

export default deleteBreed