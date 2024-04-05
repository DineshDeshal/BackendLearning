import express from 'express'
import mongoose from 'mongoose'
import router from './routes/route.mjs'
const app = express();
app.use(express.json()) // for parsing application/json
// Connect to MongoDB database using Mongoose ORM
mongoose.connect("mongodb+srv://dsharma41396:Avinashsingh123@cluster0.xuuxhwy.mongodb.net/SDMS").then(() => {
    console.log('Connected Successfully')
}).catch((err) => {
    console.error(err);
});
app.use('/',router)
app.listen(8000, ()=>{console.log(`Server is running on port 8000`)})