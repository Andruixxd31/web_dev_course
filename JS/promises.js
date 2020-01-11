/*
A promise is an object that may produce a single value sometime in the future
states: fulfilled, pending, rejected 
*/ 

const promise = new Promise((resolve, reject) => {
  if (true){
    resolve("stuff Worked"); 
  }
  else{
    reject("It broked");
  }
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hello")
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "It's Me")
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "I was wondering")
})

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
  console.log(values)
})

promise.then(result => console.log(result));

promise 
.then(result => result + "!")
.then(result2 => result2 + "?")
.catch(() => console.log('error!'))
//Catches the errors that happened between the chains .then
.then(result3 => {
  //throw Error;
  console.log(result3 + "!");
})

