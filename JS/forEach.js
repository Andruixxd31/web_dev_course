var todos = [
    "clean room", 
    "get dressed", 
    "go to the toilet", 
    "do your business in the toilet", 
    "brush your teeth", 
    "wash your hands",
    "leave"
]; 

var todos2 = [
    "Drive to job", 
    "code", 
    "sleep", 
    "wake up"
]; 

var todosImportant = [
    "Buy medicine", 
    "pay bills", 
    "eat", 
    "fix pc"
]; 

//for each loop 

todos.forEach(function(todos, i){ //the second argument shows the index
    console.log(todos,i); 
})

function logTodos2(todos2){ //making a function which can be reused 
    console.log(todos2)
}

todos2.forEach(logTodos2); 
todosImportant.forEach(logTodos2); //using the for each function made to iterate over another list