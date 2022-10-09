import { param } from 'express-validator'

export const checkIdParams = () => {
    return [
        param('id')
            .notEmpty()
            .withMessage('Id field is required')
            .isMongoId()
            .withMessage('Id format Invalid'),
    ]
}
