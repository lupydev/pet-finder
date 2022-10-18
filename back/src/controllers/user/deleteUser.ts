import { Request, Response } from 'express'

import User from '../../schemas/User'
import Pet from '../../schemas/Pet'

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const deleted = await User.findByIdAndDelete({ _id: id })

        if (deleted) {
            const petDeleted = await Pet.deleteMany({ userId: deleted._id })

            if (petDeleted.deletedCount >= 0) {
                return res.status(200).json({
                    ok: true,
                    msg: 'user deleted',
                    id,
                    petsDeleted: petDeleted.deletedCount,
                })
            }
        }

        return res
            .status(200)
            .json({ ok: false, msg: 'The id do not exist in DB' })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact an administrator',
        })
    }
}
