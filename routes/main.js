import express from "express";
import { login, register, verifyUser, getUsers } from '../controllers/user.js'
import { authMiddleware } from '../middleware/auth.js';
const router = express.Router()

//rotas todas juntas, provavelmente devo separar em arquivos diferentes futuramente (?)
router.route('/user/register').post(register)
router.route('/user/login').post(login)
router.route('/users').get(authMiddleware, getUsers)



export { router }