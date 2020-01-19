
//finally
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => fetch(url).then(people => people.json())))
  .then(array => {
    throw Error
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err))
  .finally(() => console.log('extra action here')) //added after the promise is finished. finally doesn't receive anything of the promise


const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/postss',
  'https://jsonplaceholder.typicode.com/albums'
]

//for await of:
const loopThroughUrl = (urls) => {
  for (url of urls) {
    console.log(url)
  }
}


const getData2 = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for (const request of arrayOfPromises) {
    console.log(request);
  }

  for await (const request of arrayOfPromises) {
    const data = await request.json(); 
    console.log(data)
  }
  //In this case, for-await takes each item from the array and waits for it to resolve. You'll get the first response even if the second response isn't ready yet, but you'll always get the responses in the correct order.
}


