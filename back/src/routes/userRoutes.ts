import express from 'express'
import createUser from '../controllers/user/createUser'

import { signUpCheck } from '../utils/checks/signUpCheck'
import { validateResult } from '../middlewares/validateResults'

const router = express.Router()

//* Ruta completa de estos endpoints http://localhost:4000/users

//! Aun falta middleware de proteccion de rutas para acciones que requieran login
//!Aun falta comprobacion de datos (definir si se usa middlewares o express validator)

router.post('/create', signUpCheck(), validateResult, createUser)

//router.get('/', getAllUsers)
//router.get('/:id', getUserById)
//router.put('/update/:id', updateUser) // Con este tambien se "borra" cambiando status

export default  router 
