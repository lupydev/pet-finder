import express from 'express'
import createPet from '../controllers/pets/createPet'

const router = express.Router()

router.post('/new', createPet)


export { router }
