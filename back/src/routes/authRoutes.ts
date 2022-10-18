import express from 'express'
import { loginUser } from '../controllers/auth/loginUser'
import { checkLogin } from '../utils/checks/users/checkLogin'
import { validateResult } from '../middlewares/validateResults'
import { renewToken } from '../controllers/auth/renewToken'
import { validateJWT } from '../middlewares/validateToken'
import { loginGoogle } from '../controllers/auth/loginGoogle'
import forgotPassword from '../controllers/auth/forgotPassword'
import { resetPassword } from '../controllers/auth/resetPassword'
const router = express.Router()

router.post('/login', checkLogin(), validateResult, loginUser)
router.post('/renew', validateJWT, renewToken)
router.post('/loginGoogle', loginGoogle)
router.put('/forgot-password', forgotPassword)
router.put('/reset-password', validateJWT, resetPassword)
router

export default router
