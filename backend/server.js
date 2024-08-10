import express from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import dotenv from 'dotenv'
import foodRouter from "./routes/foodRoute.js"



// app config
dotenv.config({path: './config/config.env'})


const app = express()

const Port = 4000

// middleware 
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter);
app.use('/images',express.static('uploads'))

app.get('/', (req,res)=>{
    res.send('API Working')
})

app.listen(Port,()=>{
    console.log(`Server listening on Port: ${Port}`)
})

