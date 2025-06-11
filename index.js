import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import blogRoutes from './routes/blogRoutes.js'

dotenv.config();
const app = express();


app.use(cors())
const PORT=process.env.Port || 5000


mongoose.connect(process.env.Mongo_URI)
.then(()=>{console.log("Database is connected..")})
.catch((err)=>{console.log(err)})


app.get('/',(req,res)=>{
    res.send('Home page running...')
})

app.use('/api/blogs',blogRoutes)


app.listen(PORT,()=>{
    console.log(`Webapp is running on PORT ...`)
})

