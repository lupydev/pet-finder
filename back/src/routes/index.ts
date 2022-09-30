import userRoutes from './userRoutes'
import petRoutes from './petRoutes'
import speciesRoutes from './speciesRoutes'
import authRoutes from './authRoutes'
import express from 'express'

const router = express.Router()

router.use('/users', userRoutes)

router.use('/pets', petRoutes)

router.use('/species', speciesRoutes)

router.use('/', authRoutes)

export { router }
