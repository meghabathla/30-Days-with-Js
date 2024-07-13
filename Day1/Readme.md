## A script that demonstrates the behavior of variables declared with var, let, and const when it comes to reassignment in JavaScript:

```js
// Using var
var varVariable = "Initial value";
console.log(varVariable); // Output: "Initial value"

// Reassigning var
varVariable = "Reassigned value";
console.log(varVariable); // Output: "Reassigned value"

// Redeclaring var
var varVariable = "Redeclared value";
console.log(varVariable); // Output: "Redeclared value"

// Using let
let letVariable = "Initial value";
console.log(letVariable); // Output: "Initial value"

// Reassigning let
letVariable = "Reassigned value";
console.log(letVariable); // Output: "Reassigned value"

// Redeclaring let (this will throw an error)
// let letVariable = "Redeclared value"; // Uncommenting this line will cause a SyntaxError

// Using const
const constVariable = "Initial value";
console.log(constVariable); // Output: "Initial value"

// Reassigning const (this will throw an error)
// constVariable = "Reassigned value"; // Uncommenting this line will cause a TypeError

// Redeclaring const (this will also throw an error)
// const constVariable = "Redeclared value"; // Uncommenting this line will cause a SyntaxError
```

## A script that declares variables of different data types and logs both their values and types to the console:

```js
// Declaring variables of different data types
let myString = "Hello, world!";
let myNumber = 42;
let myBoolean = true;
let myUndefined;
let myNull = null;
let myObject = { name: "Alice", age: 30 };
let myArray = [1, 2, 3];
let myFunction = function () {
  return "I'm a function";
};
let mySymbol = Symbol("symbol");

// Logging values and types to the console
console.log("Value: ", myString, ", Type: ", typeof myString);
console.log("Value: ", myNumber, ", Type: ", typeof myNumber);
console.log("Value: ", myBoolean, ", Type: ", typeof myBoolean);
console.log("Value: ", myUndefined, ", Type: ", typeof myUndefined);
console.log("Value: ", myNull, ", Type: ", typeof myNull);
console.log("Value: ", myObject, ", Type: ", typeof myObject);
console.log("Value: ", myArray, ", Type: ", typeof myArray);
console.log("Value: ", myFunction(), ", Type: ", typeof myFunction);
console.log("Value: ", mySymbol.toString(), ", Type: ", typeof mySymbol);
```

In this script:

- myString is a string.
- myNumber is a number.
- myBoolean is a boolean.
- myUndefined is undefined.
- myNull is null.
- myObject is an object.
- myArray is an an object.
- myFunction is a function.
- mySymbol is a symbol.

Note- that for myNull, typeof returns "object" due to a well-known quirk in JavaScript. For mySymbol, toString() is used to convert the symbol to a string for logging purposes.
