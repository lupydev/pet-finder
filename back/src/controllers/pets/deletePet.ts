import Pet from "../../schemas/Pet";
import { Request, Response } from 'express'

const deletePet = async (req: Request, res: Response) => {
      const {id} = req.params

      try {

            const pet = await Pet.deleteOne({_id: { $eq: id}});
            res.status(200).json({ pet, ok: true, msg: 'Pet deleted' })

      } catch (error) {

            console.log(error)
            res.status(404).json({
                  ok: false,
                  msg: 'An error occured, contact with admin',
            })
            
      }
}
export default deletePet