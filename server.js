import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'

const app = express()
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: ['https://exclusive-ecommerce-ten.vercel.app','http://localhost:5173'],  // Allow your frontend domain
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],  // Allow all necessary methods
  allowedHeaders: ['Content-Type', 'Authorization', 'token'],  // Allow headers you might need
  credentials: true,  // Allow cookies if needed
};

app.use(express.json())
app.use(cors(corsOptions));  // Apply CORS middleware globally

connectDB();

app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/', (req, res) => {
    res.send('Welcome to my backend server!');
  })

app.listen(port,()=>console.log(`Server Started on http://localhost:${port}`))