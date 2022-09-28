import Species from "../../schemas/Species";
import { Request, Response } from 'express'

const deleteSpecies = async (req: Request, res: Response) => {
    const {id} = req.params

    try {

        const species = await Species.deleteOne({_id: { $eq: id}});
        res.status(200).json({ species, ok: true, msg: 'Species deleted' })

    } catch (error) {

        console.log(error)
        res.status(404).json({
            ok: false,
            msg: 'An error occured, contact with admin',
        })
            

    }
}
export default deleteSpecies