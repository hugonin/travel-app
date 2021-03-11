const app = require('./server') 
 

// Setup Server

const port = 8081;
/* Spin up the server*/
const server = app.listen(port, listening);

//Debug

function listening(){
    console.log(`server running`);
    console.log(`running on localhost: ${port}`);
}
