## Function currying

It is a technique in functional programming where a function that takes multiple arguments is transformed into a series of functions, each taking a single argument. In other words, instead of passing all the arguments to the function at once, you pass them one by one, with each function returning a new function that expects the next argument.

The purpose of currying is to break down a function that takes multiple arguments into a chain of functions, each handling a single argument. This allows for more flexibility, partial application of arguments, and code reuse.

```js
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // Output: 6
```

## Benefits of Currying:

- Partial Application: You can apply some of the arguments and get a new function that takes the remaining arguments. This is useful for creating specialized functions based on generic ones.

- Reusability: Curried functions allow you to reuse functions by passing some arguments and creating more specific functions from generic ones.

- Function Composition: In functional programming, currying makes it easier to compose functions, where the output of one function becomes the input for another.
