
const express = require('express');
const app = express();

//Generic express middleware. As the request is coming in is gonna pase through use and then trickle down the the reuqests.
app.use((req, res, next) => {
    console.log('<h1>Helloooo</h1>');
    next(); //will make express keep running to get the other requests
}); 

app.get('/', (req, res) => { 
    res.send('testing, atention please');
});


app.listen(3000);