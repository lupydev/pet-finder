import userRoutes from './userRoutes'
import express from 'express'
const router = express.Router()

router.use('/users', userRoutes)

export { router }
