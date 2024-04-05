// const express = require('express');
// const app = express();
// const router = express.Router();
// app.use(express.json());

// let users = [{"name" : "Dinesh","passward" : 123},{"name" : "Aditya","passward" : "456"}];

// router.get('/', function(req, res) {
//     console.log("Someone has hit the home page");   
//     const { name } = req.body;
//     for(let i = 0; i < users.length; i++) {
//         if(users[i].name === name) return res.send(  + users[i].name + users[i].passward+ ' is exist.' );
//     }
//     res.send({ message: "User does not exist" });
// });
// app.use("/",router);
// app.listen(3001, () => console.log("Server is running on port 3000"));

const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

let users = [{"name" : "Two state of mind","auther" : "chetan bhagat","discription" : "for know about your mind"},{"name" : "Aditya","passward" : "456"}];
router.get('/', function(req , res){
   const { bookey } = req.query;
   const {movy} = req.params;
    for(let i = 0 ; i < booksData.length ; i++) {
        if(booksData[i].name === bookey){
            return res.send(booksData[i]);
        }
    }
   for(let j = 0 ; j < movies.length ; j++){
        if(movies[j].name === movy){
            return res.send(movies[j]);
        }
    }
    return res.send(`${bookey || movy} is not found)`);
  })

  app.listen(4400, () => console.log('Listening on port ' + 4400))