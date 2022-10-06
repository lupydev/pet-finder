import { Request, Response } from 'express'

import User from '../../schemas/User'

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const deleted = await User.findByIdAndDelete({ _id: id })

        if (deleted) {
            return res.status(200).json({ ok: true, msg: 'user deleted', id })
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
