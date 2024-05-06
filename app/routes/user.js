import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js'

const path = '/users'
const userRouter = Router()

userRouter.get(path,getUsers)
userRouter.get(`${path}/:id`,getUser)
userRouter.post(`${path}`,createUser)
userRouter.put(`${path}/:id`,updateUser)
userRouter.delete(`${path}/:id`,deleteUser)

export {userRouter}
