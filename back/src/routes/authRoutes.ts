import express from 'express'
import { loginUser } from '../controllers/auth/loginUser'
import { checkEmail } from '../utils/checks/users/checkLogin'
import { validateResult } from '../middlewares/validateResults'
import { renewToken } from '../controllers/auth/renewToken'
const router = express.Router()

router.post('/login', checkEmail(), validateResult, loginUser)
router.post('/renew', renewToken)

router

export default router
