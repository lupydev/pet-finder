import express from 'express'
import { sendContact } from '../controllers/email/sendContact'

const router = express.Router()

router.post('/contact', sendContact)

export default router
