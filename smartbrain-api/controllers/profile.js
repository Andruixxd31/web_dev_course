const handleProfileGet = (db) => (req, res) => {
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
}

module.exports = {
    handleProfileGet: handleProfileGet
}