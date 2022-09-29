import express from 'express';

import deleteBreed from '../controllers/breeds/deleteBreed'
import createBreed from '../controllers/breeds/createBreed'
import getAllBreedsBySpecies from '../controllers/breeds/getAllBreedsBySpecies'

const router = express.Router();

router.get('/', getAllBreedsBySpecies)

router.post('/newBreed', createBreed)

router.delete('/delete', deleteBreed)

export default router