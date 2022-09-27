import { Request, Response } from 'express'

const getAllPets = async (_req: Request, res: Response) => {
      res.send("Get All Pets")
}
export default getAllPets