// const http = require('http'); 

// const server = http.createServer((request, response) => {
//     console.log('headers', request.headers);
//     console.log('method', request.method);
//     console.log('url', request.url);

//     const user = {
//         name: 'John', 
//         hooby: 'drugs'
//     };

//     //response.setHeader('Content-Type', 'text/html');
//     //response.end('<h1>Heloooo</h1>')
//     response.setHeader('Content-Type', 'application/json');
//     response.end(JSON.stringify(user));
//     console.log('I hear you!');
// })

// server.listen(3000);


//Making the server ussing express
const express = require('express');

const app = express(); 

app.use((req, res, next) => { 
    //Midleware, receives a request ahead of time, modifies it and passes the next function. 
    console.log("<h1>Helloooo</h1>"); 
    next();
})

app.get('/', (req, res) => {
    const user = {
        name: 'Sally', 
        hobby: 'Soccer'
    }
    res.send(user);
});



app.listen(3000);

