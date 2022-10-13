import express from 'express'
import createSpecies from '../controllers/species/createSpecies'
import deleteSpecies from '../controllers/species/deleteSpecies'
import getAllSpecies from '../controllers/species/getallSpecies';
import { validateAdmin } from '../middlewares/validateAdmin';

const router = express.Router()

router.get('/all',getAllSpecies)

router.post('/new',validateAdmin, createSpecies)

router.delete('/delete/:id',validateAdmin, deleteSpecies)

export default router