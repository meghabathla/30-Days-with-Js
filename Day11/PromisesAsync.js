// //Activity1: understanding promise
const mypromise = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("promise resolved");
  }, 2000);
}).then((res) => console.log(res));

const myPromise = new Promise((reslove, reject) => {
  setTimeout(() => {
    reject("promise rejected");
  }, 2000);
})
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

//Activity2: Chaining promises //Activity4: Use API to fetch data using promises- task 6
function chainPromise(url) {
  return new Promise((reslove, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("response is not ok");
        }
        return res.json();
      })
      .then((res) => reslove(res))
      .catch((error) => reject(error));
  });
}
chainPromise("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    console.log(res);
    return chainPromise("https://jsonplaceholder.typicode.com/posts/2");
  })
  .then((res) => {
    console.log(res);
    return chainPromise("https://jsonplaceholder.typicode.com/posts/3");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));

//Activity3: Using Async Await //Activity4: using API to fetch data using async await

async function fetchAsync(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(" response was not ok");
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
fetchAsync("https://jsonplaceholder.typicode.com/todos/1");

//fetchAsync("https://jsonplaceholder.typicode.com/todos/pi"); // it throw's error

//Activity5: Concurrent Promises

const promise1 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("promise1 resolved");
  }, 0);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2 resolved");
  });
});

Promise.all([promise1, promise2])
  .then((values) => console.log(values))
  .catch((error) => console.log(error));

Promise.allSettled([myPromise, mypromise]).then((result) => {
  result.forEach((res) => {
    if (res.status === "fulfilled") console.log("promise fulfilled");
    else if (res.status === "rejected") console.log("promise rejected");
  });
});

Promise.race([promise2, promise1]).then((val) => console.log(`fast`, val));
