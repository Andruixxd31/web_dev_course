const express = require('express'); 
const app = express(); 

//the URL-encoded data will be parsed with the qs library. It allows for nested objects
app.use(express.urlencoded({extended: true})); 

app.use(express.json()); //express will know of json
app.get('/', (req, res) => { 
    res.send('Getting the root');
});

app.get('/profile', (req, res) => { 
    const user = {
        name: 'Sally', 
        hobby: 'Soccer'
    }
    res.send(user);
});

app.post('/profile', (req, res) => { 
    console.log(req.body); //need a middleware to acces req.body. for this it will be a body parser
    const user2 = {
        name: 'Kevin', 
        hobby: 'Basketball'
    }
    res.send(user2);
});

app.listen(3000);