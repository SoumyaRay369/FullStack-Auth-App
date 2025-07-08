import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000
import cookieParser from 'cookie-parser'
app.use(cookieParser())
import cors from 'cors'
app.use(cors({
    credentials: true, 
    origin: 'http://localhost:5173'
}))



import connectDB from './config/db.js'
connectDB()

import router from './routes/authRoutes.js'
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})