const http = require('http');

const server = http.createServer((request, response) => {
    //console.log('headers', request.headers); //info requested, will be showned in the terminal.
    console.log('method', request.method); //returns http method
    console.log('url', request.url); // url accesed
    const user = {
                name: 'Sally', 
                hobby: 'Soccer'
            }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
})

//It is listening to the connection, when it listens to it it will execute.
//Every time the port 3000 is accesed console.log will run
server.listen(3000);
