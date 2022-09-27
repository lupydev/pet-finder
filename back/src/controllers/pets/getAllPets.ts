import Pet from "../../schemas/Pet";
import { Request, Response } from 'express'


const getAllPets = async (req: Request ,res: Response)=>{

    try {
        
        const pets = await Pet.find({});
        res.status(200).json({ pets, ok: true, msg: 'All pets in DB' })

    } catch (error) {

        console.log(error)
        res.status(404).json({
            ok: false,
            msg: 'An error occured, contact with admin',
        })
        
    }
 
}

export default getAllPets