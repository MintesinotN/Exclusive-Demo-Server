import express from 'express'
import { addUser, listUser, updateAddress, updateCart } from '../controller/userController.js';

const userRouter = express.Router()

userRouter.get("/users",listUser)
userRouter.post("/users",addUser)
userRouter.patch("/users/:id",updateCart)
userRouter.patch("/users/address/:id",updateAddress)

export default userRouter;