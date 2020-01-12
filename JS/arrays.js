//map 
const array = [1,2,5,10];
const mapArray = array.map((num) => {  //loops over each elements and returns a new array
    return num * 2;
})
console.log(mapArray);