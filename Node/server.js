const express = require('express'); //Creating an express server
const app = express(); //app to run express

//Get request at the root
app.get('/', (req, res) => { 
    res.send('Getting the root');
});

//Get request at the /proflie
app.get('/profile', (req, res) => { 
    //can aslo send html and or js variables
    const user = {
        name: 'Sally', 
        hobby: 'Soccer'
    }
    res.send(user);
});


//post request at the /profile
app.post('/profile', (req, res) => { 
    const user2 = {
        name: 'Kevin', 
        hobby: 'Basketball'
    }
    res.send(user2);
});

app.listen(3000);