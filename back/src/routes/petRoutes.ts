import express from 'express'
import createPet from '../controllers/pets/createPet'
import getAllPetsByType from '../controllers/pets/getAllPetsByType'
import getPetById from '../controllers/pets/getPetById'
import updatePet from '../controllers/pets/updatePet'
import deletePet from '../controllers/pets/deletePet'
import { validateJWT } from '../middlewares/validateToken'
import { validateAdmin } from '../middlewares/validateAdmin'
const router = express.Router()

router.post('/newPet',validateJWT, createPet)
router.get('/:id', validateJWT, getPetById)
router.get('/', getAllPetsByType)
router.put('/update/:id',validateJWT, updatePet)
router.delete('/delete/:id',validateAdmin, deletePet)

export default router
