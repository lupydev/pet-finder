import userRoutes from './userRoutes'
import petRoutes from './petRoutes'
import speciesRoutes from './speciesRoutes'
import authRoutes from './authRoutes'
import breedsRoutes from './breedsRoutes'
import emailRoutes from './emailRoutes'
import express from 'express'

const router = express.Router()

router.use('/users', userRoutes)

router.use('/pets', petRoutes)

router.use('/species', speciesRoutes)

router.use('/', authRoutes)

router.use('/breeds', breedsRoutes)

router.use('/sendMail', emailRoutes)

export { router }
