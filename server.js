const express = require("express");
const app = express();
const path = require ('path');
var mongoose = require('mongoose');

const port = 3000;

//setting up connection to data base file
var db = require('./config/db');
console.log("connecting ------------------" , db);
mongoose.connect(db.url); //mongoose connection created

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.get('/', (req, res) => res.send ("Welcome to my app built with mean"));


app.get('/frontPage' ,(req, res) => {res.sendFile(path.join(__dirname, 'views/index.html'))});

app.get('/firstPage' , function (req, res) {
    res.send("this is first page created by routing protocols using express and node")
});

var Student = require('./app/models/students');
app.get('/api/students', function(req , res){
    Student.find().then(function(err , students){
        if (err)
        res.send(err);
    
        res.json(students);

    })
})

app.listen(port, () => console.log("App listening on port"));