import express from 'express'
import createPet from '../controllers/pets/createPet'
import getAllPets from '../controllers/pets/getAllPets'
import getById from '../controllers/pets/getPetById'
import updatePet from '../controllers/pets/updatePet'
import deletePet from '../controllers/pets/deletePet'
import { Request, Response } from 'express'
const router = express.Router()

router.post('/newPet', createPet)
router.get('/hola', async (_req: Request, res: Response) => {
    res.send('Hola')
})
router.get('/', getAllPets)
router.get('/:id', getById)
router.put('/update/:id', updatePet)
router.delete('/delete/:id', deletePet)

export default router
