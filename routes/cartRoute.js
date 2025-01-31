import express from 'express'
import { firstAddToCart,addToCart,removeFromCart,totalRemoveFromCart,getCart } from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post("/firstAdd",authMiddleware,firstAddToCart)
cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/totalRemove",authMiddleware,totalRemoveFromCart)
cartRouter.post("/get",authMiddleware,getCart)

export default cartRouter;