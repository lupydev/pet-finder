import express from 'express'
import createUser from '../controllers/user/createUser'

const router = express.Router()

router.post('/create', createUser)

//router.get('/', getAllUsers)
//router.get('/:id', getUserById)
//router.put('/update/:id', updateUser) // Con este tambien se "borra" cambiando status

export { router }
