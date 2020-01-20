const express = require('express'); 
const app = express(); 

//the URL-encoded data will be parsed with the qs library. It allows for nested objects
app.use(express.urlencoded({extended: true})); 

app.use(express.json()); //express will know of json
app.get('/', (req, res) => { 
    //Most used properties of request
    console.log(req.query); //get query
    console.log(req.body);
    console.log(req.headers);
    console.log(req.params);
    res.send('Getting the root');
});

app.listen(3000);