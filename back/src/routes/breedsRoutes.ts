import express from 'express'

import deleteBreed from '../controllers/breeds/deleteBreed'
import createBreed from '../controllers/breeds/createBreed'
import getAllBreedsBySpecies from '../controllers/breeds/getAllBreedsBySpecies'
import { validateAdmin } from '../middlewares/validateAdmin';

const router = express.Router()

router.get('/getBreed/:species', getAllBreedsBySpecies)

router.post('/newBreed',validateAdmin, createBreed)

router.delete('/delete/:id',validateAdmin, deleteBreed)

export default router
