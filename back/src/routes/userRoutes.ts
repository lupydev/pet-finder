import express from 'express'
import createUser from '../controllers/user/createUser'

import { checkCreateUser } from '../utils/checks/users/checkCreateUser'
import { validateResult } from '../middlewares/validateResults'
import { getAllUsers } from '../controllers/user/getAllUsers'
import { getUserById } from '../controllers/user/getUserById'
import { updateUser } from '../controllers/user/updateUser'
import { deleteUser } from '../controllers/user/deleteUser'
import { checkIdParams } from '../utils/checks/users/checkIdParams'

const router = express.Router()

//* Ruta completa de estos endpoints http://localhost:4000/users

//! Aun falta middleware de proteccion de rutas para acciones que requieran login
//!Aun falta comprobacion de datos (definir si se usa middlewares o express validator)

router.post('/create', checkCreateUser(), validateResult, createUser)
router.get('/', getAllUsers)
router.get('/:id', checkIdParams(), validateResult, getUserById)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser) //! Endpoint solo accesible para admins

export default router
