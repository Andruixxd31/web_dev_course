let obj = {
    user1: "Santa",
    user2: "Grinch",
    user3: "Rudolf"
};

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]); //gets the key of each value
}) 

Object.values(obj).forEach((value) => {
    console.log(value); //loops and grabs the value of each key.
})
Object.entries(obj).forEach((value) => {
    console.log(value); //loops and grabs the key and the value
})

Object.entries(obj).forEach((value) => {
    console.log(value); //loops and grabs the key and the value
})

const array = Object.entries(obj).map((value) => {
    return value[1] + value[0].replace("user", '');
})
console.log(array); 