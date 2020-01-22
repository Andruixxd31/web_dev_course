//*--------stting up the server and it's dependecies ---------*/
const express = require('express');


const app = express();

app.use(express.json()); //parsing the responsonse to use req.body

//*-------- variables used ---------*/
const database = {
    users: [
        {
            id: '123', 
            name: 'John',
            email: 'john@example.com',
            password: 'cookies',
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
    ]
}


//*--------components of the server ---------*/
app.get('/', (req, res) => { //*Root
    res.send(database.users);
})

app.post('/signin', (req, res) => { //*Signin
    if (req.body.email === database.users[0].email 
        && req.body.password === database.users[0].password) {
        res.json("sucess")//express comes with a built in json response
    } else {
        res.status(400).json("error login in");
    }
})

app.post('/register', (req, res) => { //*Register
    const {name, email, password} = req.body;
    database.users.push({
        id: '125', 
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    });
    res.json(database.users[database.users.length-1]);
})

//*-------- Port listening and its actions ---------*/
app.listen(3000, () => {
    console.log('App is running');
});

/* 
Main idea of the eskeleton of the server
/signin -> POST res: success/fail
/register -> POST res: user
/profile/:uderid -> GET res: return user
/image --> PUT -> res: count of user

*/