import Pet from "../../schemas/Pet";
import { Request, Response } from 'express'

const deletePet = async (req: Request, res: Response) => {
      const {id} = req.params

      try {
            
            const pets = await Pet.deleteOne({_id: id});
            res.status(200).json({ pets, ok: true, msg: 'Pet deleted' })

      } catch (error) {

            console.log(error)
            res.status(404).json({
                  ok: false,
                  msg: 'An error occured, contact with admin',
            })
            
      }
}
export default deletePet