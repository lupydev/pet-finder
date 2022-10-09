import express from 'express'
import createUser from '../controllers/user/createUser'

import { checkCreateUser } from '../utils/checks/users/checkCreateUser'
import { validateResult } from '../middlewares/validateResults'
import { getAllUsers } from '../controllers/user/getAllUsers'
import { getUserById } from '../controllers/user/getUserById'
import { updateUser } from '../controllers/user/updateUser'
import { deleteUser } from '../controllers/user/deleteUser'
import { checkIdParams } from '../utils/checks/users/checkIdParams'
import { validateJWT } from '../middlewares/validateToken'
import { validateAdmin } from '../middlewares/validateAdmin'

const router = express.Router()

//* Ruta completa de estos endpoints http://localhost:4000/users

router.post('/create', checkCreateUser(), validateResult, createUser)
router.get('/', validateAdmin, getAllUsers)
router.get('/:id', checkIdParams(), validateResult, validateJWT, getUserById)
router.put('/update/:id', validateJWT, updateUser)
router.delete(
    '/delete/:id',
    checkIdParams(),
    validateResult,
    validateAdmin,
    deleteUser
)

export default router
