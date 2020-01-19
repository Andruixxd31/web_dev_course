const http = require('http');

const server = http.createServer((request, response) => {
    console.log('headers', request.headers); //info requested, will be showned in the terminal.
    console.log('method', request.method);
    console.log('url', request.url);
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Hellooooooooo!</h1>');
})

//It is listening to the connection, when it listens to it it will execute.
//Every time the port 3000 is accesed console.log will run
server.listen(3000) 
