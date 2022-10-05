import express from 'express'
import createPet from '../controllers/pets/createPet'
import getAllPetsByType from '../controllers/pets/getAllPetsByType'
import getPetById from '../controllers/pets/getPetById'
import updatePet from '../controllers/pets/updatePet'
import deletePet from '../controllers/pets/deletePet'
const router = express.Router()

router.post('/newPet', createPet)
router.get('/:id', getPetById)
router.get('/getAll/:type', getAllPetsByType)
router.put('/update/:id', updatePet)
router.delete('/delete/:id', deletePet)

export default router
