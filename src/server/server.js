// Setup empty JS object to act as endpoint for all routes
let projectData = {};

require('dotenv').config();

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require('dotenv').config();


// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));


//Get Route setup 
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/all', sendData);

app.get('/', function(req,res) {
    res.statusCode(200)
})



//Callback function to return the JS object created at the top of server code'
function sendData(req,res) {
    res.send(projectData)
}

//Post Route
app.post('/add', addData);

function addData(req, res) {
    projectData = {
        ...req.body,
        ...projectData
      }
    res.send();
    console.log(projectData)
}
