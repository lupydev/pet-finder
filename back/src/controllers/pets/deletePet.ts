import Pet from '../../schemas/Pet' 
import { Request, Response } from 'express' 
import User from '../../schemas/User'
const deletePet = async (req: Request, res: Response) => {
    
    const { id } = req.params      
    
    try {

        const pet = await Pet.findByIdAndDelete({ _id: id })
        const user = await User.findByIdAndUpdate({ _id: pet?.userId })
        
        if (user && user.pets !== undefined) {
            const petsArray = user.pets.filter((element) => element != id)
            user.pets = petsArray
            await user.save()
        }
        
        if (pet && user) {
            return res.status(200).json({ pet, ok: true, msg: 'Pet deleted' })
        } else {
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