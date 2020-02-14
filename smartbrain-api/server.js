//With knex.js a postgres sql database was linked with the server

//*--------stting up the server and it's dependecies ---------*/
const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

//controllers
const register = require('./controllers/register'); 
const signin = require('./controllers/signin'); 

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



//*--------components of the server ---------*/
app.get('/', (req, res) => { //*Root
    res.send(database.users);
})

//the req res receive the req, res, database and bcrypt 
//This is called dependecy injection
app.post('/sigin', (req, res) => {signin.handleSignIn(req, res, db, bcrypt)})
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})



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

app.put('/image', (req, res) => { 
    const {id} = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0]);
    })
    .catch(err => res.status(400).json("unable to get count"));
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

