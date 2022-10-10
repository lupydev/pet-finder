import { body } from 'express-validator'

export const checkCreatePet = () => {
    return [
        body("name")
            .toUpperCase()
            .isLength({max: 15}).withMessage('The maximum length of a name is 15 characters'),
        body("userId")
            .notEmpty().withMessage('UserId field is required')
            .isMongoId().withMessage('Id format is invalid'),
        body("description")
            .isLength({max: 100}).withMessage('The maximum length of a description is 100 characters'),
        body("species")
            .notEmpty().withMessage('Species field is required'),
        body("gender")
            .notEmpty().withMessage('Gender field is required'),
        body("size")
            .notEmpty().withMessage('Size field is required'),
        body("type")
            .notEmpty().withMessage('Type field is required'),
        body("breed")
            .notEmpty().withMessage('Breed field is required'),
        body("age")
            .isNumeric().withMessage('Age field must contain a number')
            .isLength({max: 3}).withMessage('The maximum length of the age field is 3 characters'),
        body("color")
            .notEmpty().withMessage('Color field is required'),
        body("date")
            .notEmpty().withMessage('Date field is required')
            .isDate().withMessage('Date format is invalid'),
        body("observation")
            .isLength({max: 100}).withMessage('Maximum length is 100 characters')
        
    ]
}