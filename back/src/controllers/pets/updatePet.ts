import { Request, Response } from 'express'
import Pet from '../../schemas/Pet';

const updatePet = async (req: Request, res: Response) => {
      res.send("Update Pet")
    const { id } = req.params
    const newData = req.body

    console.log(id, newData)

    try {
        const petUpdated = await Pet.findOneAndUpdate({ _id: id }, newData, {
            new: true,
        })

        if (petUpdated) {
            return res
                .status(200)
                .json({ ok: true, msg: 'Pet Updated!', petUpdated })
        }else{
            return res.status(204).json({
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