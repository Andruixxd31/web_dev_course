const basket =["apples","oranges", "raspberries"]; 
const detailedBasket = {
    apples: 5, 
    oranges: 2,
    raspberries: 8
}
//for of loop
for(item of basket){
    console.log(item);
}

//for in loop 
for(item in detailedBasket){
    console.log(item); //for in is used in objects, it enumarates
}

