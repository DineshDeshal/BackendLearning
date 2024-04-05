import express from 'express'
import mongoose from 'mongoose'
import router from './Routers/Router.mjs'
const app =  express();
app.use(express.json())
// connect to MongoDB database
mongoose.connect('mongodb+srv://dsharma41396:Avinashsingh123@cluster0.xuuxhwy.mongodb.net/').then(() => {
    console.log("Connected to the Database")
}).catch((err) =>{console.error(err)})
app.use('/',router)

app.listen(5000, ()=> console.log("Server is running on port 5000"))