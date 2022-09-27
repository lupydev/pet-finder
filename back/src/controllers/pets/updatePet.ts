import { Request, Response } from 'express'

const updatePet = async (_req: Request, res: Response) => {
    res.send('Update Pet')
}
export default updatePet
