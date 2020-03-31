const app = require('http')
    .createServer((req, res) => {
        res.send("Oh hi there");
    })


//hardcoding a code is not a realistic way, using a service we cant pick the port. 
//we need an environmental variable to pick a port dinamically
//to access or create an environmental variable we need to inyected 
//Inyecting in bash => PORT=3000 node envVar.js
//We can also inyect a databaseURL
const PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log(`Listening to port ${PORT}`);
})

console.log(process.env); //prints environment