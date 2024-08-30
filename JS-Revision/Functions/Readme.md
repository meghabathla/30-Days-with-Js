## differnce between functions and arrw function memory allocation in global context execution.

```js
intro(); // Output: "hello, I'm intro function"
details(); // Output: ReferenceError: Cannot access 'details' before initialization
happy(); // Output: ReferenceError: Cannot access 'happy' before initialization

function intro() {
  console.log(`hello, I'm intro function`);
}

var details = function () {
  console.log(`hello, I'm details function`);
};

const happy = () => {
  console.log(`hello, I'm happy function`);
};
```

Why This Happens:

- Function Declaration (intro):

Hoisting: Function declarations are fully hoisted. This means the entire function (including its body) is moved to the top of its scope during the creation phase. So, you can call intro() before its definition.
Output: When you call intro(), it prints "hello, I'm intro function" as expected.

- Function Expression (details):

Hoisting: Variables declared with var are hoisted, but only the declaration is hoisted, not the initialization. So, before the assignment, details is undefined.
Output: When you call details() before its assignment, it results in a ReferenceError: Cannot access 'details' before initialization.

- Arrow Function (happy):

Hoisting: Variables declared with const are also hoisted, but they remain in the "temporal dead zone" until the code reaches the line where they are initialized. Attempting to access happy before its initialization results in a ReferenceError.
Output: Calling happy() before its assignment results in a ReferenceError: Cannot access 'happy' before initialization.
