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



//*--------components of the server ---------*/
app.get('/', (req, res) => { //*Root
    res.send(database.users);
})

app.post('/signin', (req, res) => { //*Signins
    const {email, password} = req.body;
    db.select('email', 'hash').from('login')
        .where('email', '=', req.body.email)
        .then(data => {
            const isValid = bcrypt.compareSync(password, data[0].hash);
            if (isValid) {
                return db.select('*').from('users')
                    .where('email', '=', email)
                    .then(user => {
                        res.json(user[0]);
                    })
                    .catch(err => res.status(400).json('unable to get user'));
            } else {
                res.status(400).json('wrong credentials')
            }
        })
        .catch(err => res.status(400).json('wrong credentials'));
})

app.post('/register', (req, res) => { //*Register
    const {name, email, password} = req.body;
    const hash = bcrypt.hashSync(password);

    bcrypt.compareSync("veggies", hash); // false

    //use to update info in login and users always together if one fails nothing is updated
    db.transaction(trx =>{
        trx.insert({ 
            hash: hash,
            email: email,
        })
        .into('login') //update login
        .returning('email')
        .then(loginEmail => { //use the login email to retunr another trx transaction
            return trx('users')
            .returning('*')
            .insert({
                email: loginEmail[0],
                name: name,
                joined: new Date() 
            })
            .then(response => {
                res.json(response);
            })
        })
    .then(trx.commit) //commits if everything works
    .catch(trx.rollback) //doesn't do the transaction if anything fails.
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

