import userRoutes from './userRoutes'
import petRoutes from './petRouter'
import express from 'express'

const router = express.Router()

router.use('/users', userRoutes)

router.use('/pets',petRoutes)

export { router }
