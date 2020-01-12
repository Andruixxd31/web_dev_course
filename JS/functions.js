//curryng 
const multiply = (a, b) => a * b;
const curriedMult = (a) => (b) => a * b; //This kind a function can take one argument at a time
console.log(curriedMult(3)); //it will return the function b -> 3 * b. 
console.log(curriedMult(3)(4));
const multiplyBy5 = curriedMult(5);
console.log(multiplyBy5(4)); //5 times the argument that is given to multiply

//compose 
const compose = (f,g) => (a) => (f(g(a)));
const sum = (num) => num + 1;
let res = compose(sum, sum)(5);
console.log(res); 
//5 will be five, g will be the sum function so sum(5) => 6; 
//f is sum so f(g) --> f(6) --> sum(6) = 7.
//sum(sum(5))