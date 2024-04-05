const express = require("express");
const app = express();
const router = express.Router();
router.get("/", (req, res) => {
    console.log("hello u are not good student")
    res.send({"name" : "Dinesh Sharma"})
})

app.use('/',router);
app.listen(3001);
console.log('Server is running on port 3001');