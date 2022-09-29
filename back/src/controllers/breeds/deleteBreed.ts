import { Request, Response } from 'express'

const deleteBreed = async (_req: Request, res: Response) =>{
    res.send("delete")
}

export default deleteBreed