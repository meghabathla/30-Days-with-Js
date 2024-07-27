//Activity1: Basics of Error Handling
function myError() {
  try {
    throw new Error("network issue");
  } catch (error) {
    console.log("Error found");
  }
}
myError();

function divide(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("denominator is zero");
    }
    return num1 % num2;
  } catch (error) {
    console.log(error);
  }
}

divide(8, 0);

//Activity2: Finally Block

function myFinally() {
  try {
    console.log("I'm a try block");
  } catch (err) {
    console.log("I'm a catch block", err);
  } finally {
    console.log("I'ma  finally block");
  }
}
myFinally();

//Activity3: Custom error

class customError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}
function throwError() {
  try {
    throw new Error("This is a custom error msg");
  } catch (error) {
    console.log(error);
  }
}
throwError();

function checkString(str) {
  try {
    if (str.length === 0) {
      throw new Error(" string is empty");
    } else console.log(`${str} is string`);
  } catch (error) {
    console.log(error);
  }
}
checkString("megha");

//Activity4: Error Handling in promises

const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("response is not resolved");
  }, 0);
}).catch((error) => {
  console.log(error);
});

async function errorPromise() {
  try {
    const result = await new Promise((resolve, reject) => {
      reject("promise is rejected");
    });
    console.log(result);
  } catch (error) {
    console.log(`error`, error);
  }
}
errorPromise();

//Activity5: Gracefull error handling in fetch

function fetchFail() {
  fetch("https:/example/api")
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(`error found in fetching data`, error));
}
fetchFail();

async function errorFetch() {
  try {
    const result = await fetch("https:/example/api");
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log("error found in promise");
  }
}
errorFetch();
