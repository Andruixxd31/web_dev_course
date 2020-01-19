/*
A promise is an object that may produce a single value sometime in the future
states: fulfilled, pending, rejected 
A promise can succeed or fail only once
*/ 

const promise = new Promise((resolve, reject) => { //a promise has those two parameters
  if (true){ //if the promised returned
    resolve("stuff Worked"); //The promise value
  }
  else{ 
    reject("It broked");
  }
})

promise.then(result => console.log(result)); //returning the result of the promise

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hello")
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "It's Me")
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "I was wondering")
})

Promise.all([promise, promise2, promise3, promise4]) //promise.all takes an array of promises
.then(values => {
  console.log(values)
})

promise  //Chaining a promise
.then(result => result + "!")
.then(result2 => result2 + "?")
.catch(() => console.log('error!'))
//Catches the errors that happened between the chains .then
//Tha catch checks if anything before it fails
.then(result3 => {
  //throw Error;
  console.log(result3 + "!");
})

