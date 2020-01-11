const fs = require('fs'); 

fs.readFile('./hello.text', (err, data) => {
    if(err){
        console.log('error');
    }
     //If it doesn't have to string it returns a buffer. toSting() uses UTF-8 by default
    console.log('Async', data.toString());
})

const file = fs.readFileSync('./hello.text');
console.log('Sync', file.toString());

//Append
// fs.appendFile('./hello.text', ' This is so cool!', err => {
//     if (err) {
//         console.log("error");
//     }
// })


//Write 
fs.writeFile('./bye.text', 'Sad to c u go', err => {
    if (err) {
        console.log("error");
    }
})


//Delete
fs.unlink('./bye.text', err => {
    if (err) {
        console.log("error");
    }
})