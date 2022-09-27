import { Request, Response } from 'express'

const deletePet = async (_req: Request, res: Response) => {
      res.send("Delete")
}
export default deletePet