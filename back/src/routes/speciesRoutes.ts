import express from 'express'
import createSpecies from '../controllers/species/createSpecies'
import deleteSpecies from '../controllers/species/deleteSpecies'

const router = express.Router()



router.post('/new', createSpecies)

router.delete('/delete/:id', deleteSpecies)

export default router