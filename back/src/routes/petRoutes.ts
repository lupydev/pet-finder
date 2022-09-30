import express from 'express'
import createPet from '../controllers/pets/createPet'
import getAllPets from '../controllers/pets/getAllPets'
import getById from '../controllers/pets/getPetById'
import updatePet from '../controllers/pets/updatePet'
import deletePet from '../controllers/pets/deletePet'
const router = express.Router()

router.post('/newPet', createPet)
router.get('/:type', getAllPets)
router.get('/:id', getById)
router.put('/update/:id', updatePet)
router.delete('/delete/:id', deletePet)

export default router
