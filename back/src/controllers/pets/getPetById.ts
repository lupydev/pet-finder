import { Request, Response } from 'express'

const getPetById = async (_req: Request, res: Response) => {
    res.send('Get Pet By Id')
}
export default getPetById
