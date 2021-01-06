// Setup empty JS object to act as endpoint for all routes
const projectData = [];

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require('dotenv').config();


// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);

//Debug
function listening(){
    console.log(`server running`);
    console.log(`running on localhost: ${port}`);
}

//Get Route setup 
app.get('/all', sendData);

//Callback function to return the JS object created at the top of server code'
function sendData(req,res) {
    res.send(projectData)
}

//Post Route
app.post('/add', addData);

function addData(req, res) {
    newEntry = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    }
    projectData.push(newEntry);

}
  

  

