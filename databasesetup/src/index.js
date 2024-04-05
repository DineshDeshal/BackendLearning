const express = require('express');
const mongoose = require('mongoose')
const router = require('./routes/routes');
const app = express();
// const router = express.Router();
app.use(express.json()); // for parsing application/json
// parse requests of content-type - application/x-www-form-urlencoded
// router.get('/', (req, res) => {
//     res.send('Welcome to the Home Page!');
//     res.send("this is not my mistake")
// });
mongoose.connect("mongodb+srv://dsharma41396:Avinashsingh123@cluster0.xuuxhwy.mongodb.net/").then(()=>{console.log("connected to database")}).catch((err)=>console.log(err));

app.use('/', router);
app.listen(3001, function(){
    console.log("server started on port",3001);

})
