import { Request, Response } from 'express'

const getAllBreedsBySpecies = async (_req: Request, res: Response) =>{
    res.send("getAllBreedsBySpecies")
}

export default getAllBreedsBySpecies