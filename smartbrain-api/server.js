//With knex.js a postgres sql database was linked with the server

//*--------stting up the server and it's dependecies ---------*/
const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const app = express();

app.use(express.json()); //parsing the responsonse to use req.body
app.use(cors()) //middleware for cors

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1', //is localhost
        user : '',
        password : '',
        database : 'smart-brain' //connecting the database by putting its name
    }
});

// db.select('*').from('users').then(data => { //example of simple query with knex
//     console.log(data);
// });

//*-------- variables used ---------*/
const database = {
    users: [
        {
            id: '123', 
            name: 'John',
            email: 'J',
            password: 'C',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124', 
            name: 'Sally',
            email: 'sally@example.com',
            password: 'brownies',
            entries: 0,
            joined: new Date()
        }
    ], 
    logging: [
        {
            id: '987',
            hash: '',
            email: 'john@example.com'
        }
    ]
}


//*--------components of the server ---------*/
app.get('/', (req, res) => { //*Root
    res.send(database.users);
})

app.post('/signin', (req, res) => { //*Signins
    if (req.body.email === database.users[0].email 
        && req.body.password === database.users[0].password) {
        res.json(database.users[0]);//express comes with a built in json response
    } else {
        res.status(400).json("error login in");
    }
})

app.post('/register', (req, res) => { //*Register
    const {name, email, password} = req.body;
    // bcrypt.hash(password, null, null, function(err, hash) {
    //     console.log(hash);
    // });
    db('users')
        .returning('*')
        .insert({
            email: email,
            name: name,
            joined: new Date() 
        })
        .then(response => {
            res.json(response);
        })
        .catch(err => res.status(400).json('unable to register'))
})

app.get('/profile/:id', (req, res) => {
    const {id} = req.params;
    db.select('*').from('users').where({id})
    .then( user => {
        if(user.length){
            res.status(200).json(user[0]);
        }else{
            throw new ERROR('Could not find user')
        }
    })
    .catch(err =>
        res.status(400).json(err.message))
})

app.put('/image', (req, res) => { //*Root
    const {id} = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++;
            return res.json(user.entries);
        } 
    })
    if(!found){
        res.status(404).json('user not found');
    }
})



// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

//*-------- Port listening and its actions ---------*/
app.listen(3000, () => {
    console.log('App is running');
});

