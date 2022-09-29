import { Request, Response } from 'express'
import Pet from '../../schemas/Pet'

const updatePet = async (req: Request, res: Response) => {
    const { id } = req.params
    const newData = req.body

    try {
        const petUpdated = await Pet.findOneAndUpdate({ _id: id }, newData, {
            new: true,
        })

        if (petUpdated) {
            return res
                .status(201)
                .json({ ok: true, msg: 'Pet Updated!', petUpdated })

        } else {
            return res.status(404).json({
                msg: "Pet doesn't exist",
            })
        }


    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact an administrator',
        })
    }
}

export default updatePet
