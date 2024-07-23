## Syntax for Promise

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
```

## Syntax for Async Await function

```js
async function myAsync() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = result.json();
    console.log(data);
  } catch (error) {
    consol.log(error);
  }
}
myAsync();
```

## Promise.all Syntax

Promise.all: If any of the promises in Promise.all reject, the entire Promise.all promise rejects.

```js
const promise1 = "678";
const promise2 = 638;
const promise3 = true;

Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);
```

## Promise Race

The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.

The Promise.race() method is one of the promise concurrency methods. It's useful when you want the first async task to complete, but do not care about its eventual state (i.e. it can either succeed or fail).

If the iterable contains one or more non-promise values and/or an already settled promise, then Promise.race() will settle to the first of these values found in the iterable.

```js
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

Promise.race([promise1, promise2]).then((val) => console.log(`fast`, val));
```
