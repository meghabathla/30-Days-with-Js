## Closure

Closure: The inner function forms a closure around the num variable. This means that even though outer has finished executing, the num variable is still available to inner because inner retains a reference to outer's execution context.

```js
function outer() {
  let x = 10;
  return function inner() {
    console.log(x); // Remembers x even after outer() finishes
  };
}
let closureFunction = outer();
closureFunction(); // Prints 10
```

## Scope

JavaScript offers various types of scope, with the three primary ones being global, local, and block scope. These scopes control the accessibility of variables in different parts of your code means where you can access a specific function or variable is called scope.

```js
function example() {
  let x = 10; // x is only accessible inside this function
}
console.log(x); // Error! x is not accessible here.
```

## Scope Chain

Scope Chain: When inner is called, it first looks in its local scope for variables. If it doesn't find num there, it looks in the outer scope (the scope of outer). This chain continues up to the global scope.

Explaination: The JS engine first searches for a variable in the current local memory space, if its not found here it searches for the variable in the lexical environment of its parent, and if its still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. If a variable is not found anywhere, then we say that the variable is not present in the scope chain.

```js
let a = 1;
function outer() {
  let b = 2;
  function inner() {
    let c = 3;
    console.log(a, b, c); // Can access a, b, and c
  }
  inner();
}
outer();
```

## Lexical Scope chain

Lexical Scoping:
Whenever an execution context is created, a lexical environment is created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence.
Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.

```js
function outer() {
  let x = 10;
  function inner() {
    console.log(x); // inner can access x because it's in the outer scope
  }
  inner();
}
outer();
```

## Temporal Dead Zone

The Temporal Dead Zone (TDZ) in JavaScript refers to the period between the start of a block scope and the point where a variable is declared. During this time, the variable exists but cannot be accessed or used. If you try to use the variable before it's declared, you'll get a ReferenceError. Example variables decared with let and const and arrow functions.

```js
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

## How to create memoized function

```js
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
```

## Module Pattern Closures

```js
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
```
