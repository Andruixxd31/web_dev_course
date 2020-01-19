//A Async function is a function that returns a promise. 
//Async makescode easier to read.

fetch('https://jsonplaceholder.typicode.com/users') //promise
  .then(resp => resp.json())
  .then(console.log)
  
//Async await code those the same as promises, its just than the syntax is different
async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users') //await makes the function to wait till their is a responce from fetch
  const data = await resp.json();  //resp.json returns a promise
  console.log(data);
}

urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts', 
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try{
    const [users, posts, albums] = await Promise.all(urls.map(url => //destructuring users, post and user in the async
      fetch(url).then(resp => resp.json())
    ))
      console.log(users)
      console.log(posts)
      console.log(albums)
  } catch (err) {
    console.log('oops', err)
  }
}