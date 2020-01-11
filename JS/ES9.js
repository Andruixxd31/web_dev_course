// Object spread operator 
const animals = {
  tiger: 23, 
  Lion: 20, 
  Monkey: 2, 
  Bird: 10
}

function objectSpread(p1,p2,p3) {
  console.log(p1)
  console.log(p2)
  console.log(p3)
}

const {tiger, ...rest} = animals; 
//rest will include the rest of the objects left.
//when using rest it will return the other animals.

objectSpread(tiger, Lion, rest);