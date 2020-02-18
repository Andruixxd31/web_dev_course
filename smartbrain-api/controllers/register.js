const handleRegister = (db, bcrypt) => (req, res) => { //*Register
    const {name, email, password} = req.body;
    const hash = bcrypt.hashSync(password);

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
}

module.exports = {
    handleRegister: handleRegister
}