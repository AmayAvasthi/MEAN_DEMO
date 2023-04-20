const express = require("express");
const app = express();
const path = require ('path');

const port = 3000;

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.get('/', (req, res) => res.send ("Welcome to my app built with mean"));


app.get('/frontPage' ,(req, res) => {res.sendFile(path.join(__dirname, 'views/index.html'))});

app.get('/firstPage' , function (req, res) {
    res.send("this is first page created by routing protocols using express and node")
});

app.listen(port, () => console.log("App listening on port"));