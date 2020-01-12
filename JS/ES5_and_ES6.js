// let and const

const player = 'bobby' //its a constant, pretty much self explanatory 
let experience = 100;
let wizzard = true;

if (experience > 90){
    let wizzard = false; 
    console.log("Inside: ", wizzard);
    //let creates a new scope when it is inside curly braces. If wizzard is printed it will show true 
    //var would have changed the wizzard becuase for var ther is no other scope
}

console.log("Outside: ", wizzard);

const obj = {
    player: 'bobby', 
    experience: 100,
    wizzardLevel: false, 
}//The object cannot be reassigned but is properties can be changed. This

//Destructing 
const player = obj.player; 
const experience = obj.experience;
let wizzardLevel = obj.wizzardLevel;

const {player, experience} = obj; //Same as the first two lines above
let {wizzardLevel} = obj;

const name = "john"; 


const obj2 = {
    [name]: 'hello',
}


const lastName = 'Snow'; 
const alive = true;
const c = {};

const obj3 = { 
    a,
    b,
    c
}

//Symbol

let sym1 = Symbol(); 
let sym2 = Symbol('foo');
let sym3 = Symbol('foo'); 
//each symbol is unique, sym2 and sym3 are different


//arrow functions

const add = (a, b) => a + b; 