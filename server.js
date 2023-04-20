const express = require("express");
const app = express();

const port = 3000;

app.get('/', (req, res) => res.send ("Welcome to my app built with mean"));

app.get('/firstPage' , function (req, res) {
    res.send("this is first page created by routing protocols using express and node")
});

app.listen(port, () => console.log("App listening on port"));