import express from 'express'
import createSpecies from '../controllers/species/createSpecies'
import deleteSpecies from '../controllers/species/deleteSpecies'
import getAllSpecies from '../controllers/species/getallSpecies';

const router = express.Router()

router.get('/all',getAllSpecies)

router.post('/new', createSpecies)

router.delete('/delete/:id', deleteSpecies)

export default router