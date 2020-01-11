const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 
app.use(express.static(--__dirname+ '/public'))

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());
// app.get('/', (req, res) => {
//     //Most common request
//     console.log(req.query);
//     console.log(req.body);
//     console.log(req.header); 
//     console.log(req.params);
//     res.send('getting root');
// });



// app.get('/profile', (req, res) => {
//     res.send('getting profile');
// });

// app.post('/profile', (req, res) => {
//     console.log(req.body);
//     const user = {
//         name: 'Sally', 
//         hobby: 'Soccer'
//     }
//     res.send(user);
// });

app.listen(3000);

