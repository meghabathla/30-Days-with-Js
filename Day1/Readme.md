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
//"SyntaxError: Identifier 'variableName' has already been declared"

// Using const
const constVariable = "Initial value";
console.log(constVariable); // Output: "Initial value"

// Reassigning const (this will throw an error)
// constVariable = "Reassigned value"; // Uncommenting this line will cause a TypeError
// "TypeError: Assignment to constant variable."

// Redeclaring const (this will also throw an error)
// const constVariable = "Redeclared value"; // Uncommenting this line will cause a SyntaxError
//"SyntaxError: Identifier 'constVariable' has already been declared"
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
- myNull is object.
- myObject is an object.
- myArray is an an object.
- myFunction is a function/callable object
- mySymbol is a symbol.

Note- that for myNull, typeof returns "object" due to a well-known quirk in JavaScript.Historically, it was due to a bug in the original implementation, and it has been maintained for backward compatibility. Although null represents the absence of any object value, typeof null returns "object" instead of "null" or something else.

For mySymbol, toString() is used to convert the symbol to a string for logging purposes.

## difference between Undefined and not defined in js

- undefined: A variable is undefined when it has been declared but has not been assigned a value.
  For example:

```js
let a;
console.log(a); // Output: undefined
```

Here, the variable a is declared but not initialized, so it holds the value undefined.

- not defined: A variable is "not defined" when it has not been declared at all in the current scope.
  Attempting to access a variable that hasn't been declared will result in a ReferenceError.
  For example:

```js
console.log(b); // ReferenceError: b is not defined
```
