/* import Breed from '../../schemas/Breed' */
import { Request, Response } from 'express'

const createBreed = async (_req: Request, res: Response) =>{
    res.send("Create")
}

export default createBreed