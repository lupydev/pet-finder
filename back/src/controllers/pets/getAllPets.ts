import Pet from "../../schemas/Pet";
import { Request, Response } from 'express'


const getAllPets = async (req: Request ,res: Response)=>{
    const {petType} = req.params

    try {
        
        const pets = await Pet.find({$and: [{type: petType}, {status: "Active"}]});
        
        if (pets) {
            return res.status(200).json({ pets, ok: true, msg: 'All pets in DB' })            
        } else {
            return res.status(204).json({ ok: false, msg: 'No pets in DB' })
        }

    } catch (error) {

        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact with admin',
        })
        
    }
 
}

export default getAllPets