const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

let users = ["mohan", "kanhiya", "shyam"];

router.get('/user', function(req, res) {
    console.log("Someone has hit the home page");   
    const { user } = req.query;
    for(let i = 0; i < users.length; i++) {
        if(users[i] === user) return res.send({ message: `User ${user} exists` });
    }
    res.status(400).send({ message: "User does not exist" });
});

router.post("/add-user", function(req, res) {
    const { username } = req.body;
    if(!verifyUniqueUsername(username)) {
        return res.status(409).send({ message: 'Username already exists' });
    } else {
        users.push(username);
        res.send({ message: 'User added successfully!' });
    }
});

router.put('/update-user/:id', function(req, res) {
    let index = parseInt(req.params.id);
    if(index >= 0 && index < users.length) {
        users[index] = req.body.username;
        res.send({ done: true, user: users[index] });
    } else {
        res.status(400).send('Invalid User ID');
    }
});

router.delete('/delete-user/:id', function(req, res) {
    var index = parseInt(req.params.id);
    if(isNaN(index)) {
        return res.status(400).send("Invalid user id");
    }
    if(index < 0 || index >= users.length) {
        return res.status(400).send("User does not exist.");
    }
    users.splice(index, 1);
    console.log(`Deleted user at position ${index}`);
    res.json({ "Message": "User deleted!" });
});

function verifyUniqueUsername(username) {
    for(let name of users) {
        if(name === username) return false;
    }
    return true;
}

app.use('/', router);
const port = 3001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
