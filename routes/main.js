import express from "express";
import { login, register, verifyUser, getUsers } from '../controllers/user.js'
import { authMiddleware } from '../middleware/auth.js';
const router = express.Router()

//rotas todas juntas, provavelmente devo separar em arquivos diferentes futuramente (?)

//no auth routes
router.route('/user/register').post(register)
router.route('/user/login').post(verifyUser, login)

//auth routes
router.route('/users').get(authMiddleware, getUsers)



export { router }