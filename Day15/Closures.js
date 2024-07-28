//ACtivity1: Understanding closures

function outer() {
  let num = 10;
  function inner() {
    let sum = 8;
    sum += num;
    return sum;
  }
  return inner;
}

const res = outer();
console.log(res());

function myCounter() {
  let counter = 0;

  function getValue() {
    counter += 1;
    return counter;
  }
  return getValue;
}

const result = myCounter();
console.log(result());

function generateId() {
  let res = Math.random(89);

  function increment() {
    res = res + 1;
    res = `id- #` + res;
    return res;
  }
  return increment;
}

const value = generateId();
console.log(value());

function myUser(name) {
  return function data() {
    return `My name is ${name}`;
  };
}

const info = myUser("Megha");
console.log(info());

//Activity3: Closures in Loop
//Write a loop that creates an array of functions.
// Each function should log its  index  when called.
// Use a closure  to ensure each function logs the correct index.
function createFunctionsArray(size) {
  const functionsArray = [];

  for (let i = 0; i < size; i++) {
    functionsArray.push(function () {
      console.log(i); // Log the current index
    });
  }

  return functionsArray;
}

// Create an array of functions
const functionsArray = createFunctionsArray(5);
functionsArray[0]();
functionsArray[1]();
functionsArray[2]();
functionsArray[3]();
functionsArray[4]();

//Activity4: Module Pattern

const createItem = () => {
  let arr = [];
  return {
    addItem: (item) => {
      arr.push(item);
      console.log(`${item} is added to collection`);
    },
    removeItem: (item) => {
      arr = arr.filter((element) => element !== item);
    },
    listOfItem: () => {
      if (arr.length > 0) {
        arr.forEach((element) => {
          console.log(element);
        });
      } else {
        console.log(`No items in array`);
      }
    },
  };
};
const output = createItem();
output.addItem("Book");
output.addItem("Pen");
output.addItem("Pencil");
output.addItem("Notebook");
output.addItem("Scale");
output.addItem("Sharpner");
output.listOfItem();
output.removeItem("Scale");
output.listOfItem();

//Activity5: Memoization

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = args.toString();
    if (cache[key]) {
      console.log(`return from cache`);
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
};

const add = (a, b) => {
  return a + b;
};

const memoAdd = memoize(add);
console.log(memoAdd(1, 3));
console.log(memoAdd(1, 3));

// Task 8: Create a memoized version of a function that calculates the factorial of a number.

const factorial = (num) => {
  const cache = {};

  if (num in cache) {
    console.log(`returned from cache`);
    return cache[num];
  }
  if (num <= 1) {
    cache[num] = num;
    return num;
  }
  const result = num * factorial(num - 1);
  cache[num] = result;
  return result;
};

console.log(factorial(6));
