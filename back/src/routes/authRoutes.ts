import express from 'express'
import { login } from '../controllers/auth/login'
const router = express.Router()

router.get('/login', login)

export default router
