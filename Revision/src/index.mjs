import express from 'express';
import mongoose from 'mongoose';
import router from './routes/router.mjs';
const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://dsharma41396:Avinashsingh123@cluster0.xuuxhwy.mongodb.net/FstData").then(()=>console.log('connected to db')).catch((err)=>{
    console.log(err)
})
app.use('/', router);
app.listen(8000,()=>{
    console.log(`this server started at`, new Date(),`on port 8000`)
});

// Models
import User from './models/User';