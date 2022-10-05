import { body } from 'express-validator'

export const checkLogin = () => {
    return [
        body('email')
            .notEmpty()
            .withMessage('The email field is required')
            .isEmail()
            .withMessage('Email invalid'),
        body('password')
            .isStrongPassword()
            .withMessage(
                'The Password has to contain min 8 chars, 1 lowercase(min), 1 uppercase(min), 1 number(min), 1 symbol(min) '
            ),
    ]
}
