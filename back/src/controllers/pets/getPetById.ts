import Pet from '../../schemas/Pet'
import { Request, Response } from 'express'

const getPetById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const pet = await Pet.findOne({ _id: id }).populate({path: "breed", select: "_id name"}).populate({path: "species", select: "_id name"})

        if (pet) {
            return res.status(200).json({ pet, ok: true, msg: 'Pet found' })
        } else {
            return res.status(404).json({ ok: false, msg: 'Pet not found' })
        }
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact with admin',
        })
    }
}
export default getPetById
