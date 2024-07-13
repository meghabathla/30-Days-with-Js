// Variable and DataType

var num = 30;
console.log(num);

let str = "Megha";
console.log(str);

const value = false;
console.log(value);

// Create variable with diff dataTypes

const myNumber = 89; //new Number(8);  --> object
console.log(typeof myNumber);

const myString = "megha"; //new String("Hello"); --> object
console.log(typeof myString);

var myBoolean = false; // new Boolean(); --> object
console.log(typeof myBoolean);

let myUndefined;
console.log(myUndefined);

let myNull = null;
console.log(myNull);

let mySymbol = Symbol("Dev");
console.log(mySymbol.toString());
console.log(typeof mySymbol);

let obj = new Object();
console.log(typeof obj);

const myObject = {
  name: "Bro",
};
console.log(typeof myObject);

var arr = new Array();
console.log(typeof arr);

let myArray = [49, 30, 45, 25];
console.log(typeof myArray);

let myFunction = function () {};
console.log(myFunction);

//Reassign values

let result = 20;
console.log(result);

result = 90;
console.log(result);

const res = 28;

//res = 36; // TypeError Assignment to constant variable.

console.log(res);
