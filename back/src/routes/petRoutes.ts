import express from 'express'
import createPet from '../controllers/pets/createPet'
import { checkCreatePet } from '../utils/checks/pets/checkCreatePet'
import getAllPetsByType from '../controllers/pets/getAllPetsByType'
import getPetById from '../controllers/pets/getPetById'
import updatePet from '../controllers/pets/updatePet'
import deletePet from '../controllers/pets/deletePet'
const router = express.Router()

router.post('/newPet',checkCreatePet(), createPet)
router.get('/:id', getPetById)
router.get('/getAll/:type', getAllPetsByType)
router.put('/update/:id', updatePet)
router.delete('/delete/:id', deletePet)

export default router
