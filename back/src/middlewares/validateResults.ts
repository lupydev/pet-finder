import { validationResult } from 'express-validator'

export const validateResult = async (req: any, res: any, next: any) => {
    // body('email', 'El email es obligatorio').isEmail()
    // body('password', 'El password debe de ser de 6 caracteres').isLength({
    //     min: 6,
    // })

    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors,
        })
    }

    next()
}
