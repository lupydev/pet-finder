import { param } from 'express-validator'

export const checkIdParams = () => {
    return [
        param('id')
            .notEmpty() //todo:En realidad si esta vacio seria otra ruta? chequear!!
            .withMessage('Id field is required')
            .isMongoId()
            .withMessage('Id format Invalid'),
    ]
}
