const a = 5;
const b = 2;

const script2 = require('./script2.js') //getting a constant which can access to the values of the objects exported from script2

const c = script2.largeNumber; //Accesing the value of largeNumber
const d = script2.smallNumber

setTimeout(() =>{ 
    console.log(a + b); //node will read everthing on the file executed and will exit at the end.
    console.log(a + c);
    console.log(b + d);
}, 1000) 

//global objects of nodejs
console.log(__dirname);
console.log(__filename);