sessionStorage.setItem("account", "andruixxd"); //SessioStorage only takes strings
sessionStorage.setItem("account2", "andres");

console.log(sessionStorage.getItem("account")); //the value of the key is returned

//we can pass an object with json 
const accountObj = {account: "andres", password: "12345"};
sessionStorage.setItem("person", JSON.stringify(accountObj));
console.log(JSON.parse(sessionStorage.getItem("person"))); //the object is parsed to get a native js object

// removing an item
sessionStorage.removeItem(sessionStorage.key(2));

for(let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    console.log(`Item: ${key}, => ${sessionStorage.getItem(key)}`); 
}


