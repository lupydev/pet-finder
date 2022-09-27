import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export const validateResult = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors,
        })
    }

    return next()
}
