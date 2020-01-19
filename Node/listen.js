//setting up a simple server
//This file is running in node
const http = require('http');

const server = http.createServer(() => {
    console.log("I hear you!. Thanks for the request")
})

//It is listening to the connection, when it listens to it it will execute.
//Every time the port 3000 is accesed console.log will run
server.listen(3000) 
