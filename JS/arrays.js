//map 
const array = [1,2,5,10];
const mapArray = array.map(num => {  //loops over each elements and returns a new array. map will always have to return something
    return num * 2;
})
console.log(mapArray);

//filter 
const filterArray = array.filter(num => num > 4); //will filter the array by only returning numbers bigger than 5
console.log("filter: ", filterArray);

//reduce
const reduceArray = array.reduce((acc, num) => {
    return acc + num; //Each time the acc gets refreshed, in this one will be the last acc plus the num
}, 0) //the deafualt value of acc
console.log("reduce: ", reduceArray); //this function returns the sum of all numbers in the array. 
