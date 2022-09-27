import { Request, Response } from 'express'

export const deleteUser = (_req: Request, res: Response) => {
    res.send('DeleteUser')
}
