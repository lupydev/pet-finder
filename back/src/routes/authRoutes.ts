import express from 'express'
import { loginUser } from '../controllers/auth/loginUser'
import { checkEmail } from '../utils/checks/users/checkLogin'
import { validateResult } from '../middlewares/validateResults'
import { renewToken } from '../controllers/auth/renewToken'
import { validateJWT } from '../middlewares/validateToken'
const router = express.Router()

router.post('/login', checkEmail(), validateResult, loginUser)
router.post('/renew', validateJWT, renewToken)

router

export default router
