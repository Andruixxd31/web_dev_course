//*--------setting up the server and it's dependecies ---------*/
const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

//controllers
const register = require('./controllers/register'); 
const signin = require('./controllers/signin'); 
const profile = require('./controllers/profile'); 
const image = require('./controllers/image'); 

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1', //is localhost
        user : '',
        password : '',
        database : 'smart-brain' //connecting the database by putting its name
    }
});

const app = express();

app.use(express.json()); //parsing the responsonse to use req.body
app.use(cors()) //middleware for cors


//*--------components of the server ---------*/
//the req res receive the req, res, database and bcrypt 
//This is called dependecy injection
app.get('/', (req, res) => { res.send(database.users) })
app.post('/sigin', signin.handleSignIn(db, bcrypt)) //currying the functions
app.post('/register', register.handleRegister(db, bcrypt))
app.get('/profile/:id', profile.handleProfileGet(db) )
app.put('/image', image.handleImage(db) )

//*-------- Port listening and its actions ---------*/
app.listen(3000, () => {
    console.log('App is running');
});

