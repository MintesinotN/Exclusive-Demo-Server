import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import userRouter from './routes/userRoute.js'

const app = express()
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())

connectDB();

app.use('/',userRouter)
app.use('/', (req, res) => {
    res.send('Welcome to my backend server!');
  })

app.listen(port,()=>console.log(`Server Started on http://localhost:${port}`))