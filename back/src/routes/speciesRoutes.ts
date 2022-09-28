import express from 'express'
import createSpecies from '../controllers/species/createSpecies'
import deleteSpecies from '../controllers/species/deleteSpecies'
import {Request, Response} from 'express'
const router = express.Router()

router.get('/hola', async(_req:Request,res:Response) => {res.send("Hola")})

router.post('/new', createSpecies)

router.delete('/delete/:id', deleteSpecies)

export default router