import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './db'

dotenv.config()

if(process.env.DB_URL){
    connectDb(process.env.DB_URL)
}

const app = express()
app.use(cors({
    origin: '*',
    credentials: true
}))
app.use(express.json())
app.use(morgan('dev'))

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
    console.log(`Server running in port ${PORT}`)
})