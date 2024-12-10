import express from 'express'
import { addUser, listUser, updateCart } from '../controller/userController.js';

const userRouter = express.Router()

userRouter.get("/users",listUser)
userRouter.post("/users",addUser)
userRouter.put("/users/:id",updateCart)

export default userRouter;