import Pet from '../../schemas/Pet'
import { Request, Response } from 'express'

const deletePet = async (req: Request, res: Response) => {
    const { id } = req.params

    try {

        const pet = await Pet.findByIdAndDelete({_id: id});
        if(pet){               
            return res.status(200).json({ pet, ok: true, msg: 'Pet deleted' })
        }else{
            return res.status(404).json({ ok: false, msg: 'Pet id not found' })
        }

    } catch (error) {

        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occurred, contact with admin',
        })
            
    }
}
export default deletePet
