import Pet from "../../schemas/Pet";
import { Request, Response } from 'express'


const getAllPets = async (req: Request ,res: Response)=>{
    const {type} = req.params

    try {
        
        const pets = await Pet.find({$and: [{type: { $eq: type}}, {status: "Active"}]});
        
        if (pets.length > 0) {
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