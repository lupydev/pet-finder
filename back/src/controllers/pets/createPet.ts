import Pet from '../../schemas/Pet'
import User from '../../schemas/User'
import { Request, Response } from 'express'

const createPet = async (req: Request, res: Response) => {
        
    try {
        const petData = req.body
        const newPet = new Pet(petData)
        const updateUser = await User.findByIdAndUpdate(
            petData.userId,
            {$push:{pets: newPet._id}},
            {new:true}
        )
        if (newPet && updateUser){
            await newPet.save()
            await updateUser.save()
            res.status(200).json({ ok: true, msg: 'Pet Created' })
        }else{
            console.log('An error occured, contact with admin');
        }
        
    } catch (error) {
        console.log(error)
        res.status(404).json({
            ok: false,
            msg: 'An error occured, contact with admin',
        })
    }
}

export default createPet
