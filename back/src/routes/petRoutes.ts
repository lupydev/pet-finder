import express from 'express'
import createPet from '../controllers/pets/createPet'
import {Request, Response} from 'express'
const router = express.Router()

router.post('/newPet', createPet)
router.get('/hola', async(_req:Request,res:Response) => {res.send("Hola")})


export default router
