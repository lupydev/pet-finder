import express from 'express'
import createPet from '../controllers/pets/createPet'
import { checkCreatePet } from '../utils/checks/pets/checkCreatePet'
import { validateJWT } from '../middlewares/validateToken'
import { validateAdmin } from '../middlewares/validateAdmin'
import getAllPetsByType from '../controllers/pets/getAllPetsByType'
import getPetById from '../controllers/pets/getPetById'
import updatePet from '../controllers/pets/updatePet'
import deletePet from '../controllers/pets/deletePet'
const router = express.Router()

router.post('/newPet',checkCreatePet(),validateJWT, createPet)
router.get('/:id', getPetById)
router.get('/getAll/:type', getAllPetsByType)
router.put('/update/:id',validateJWT, updatePet)
router.delete('/delete/:id',validateAdmin, deletePet)

export default router
