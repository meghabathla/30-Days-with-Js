//Activty1: Template Literals
const name = "Megha";
const age = 20;

console.log(`My name is ${name} and age ${age}`);

const multiLineLiterals = ` Name: ${name}
age:${age}
and live in India
`;
console.log(multiLineLiterals);

//Activity2: Destructing

const arr = [1, 3, 4, 56, 7, 8, 9];

const [first, ...rest] = arr;

console.log(first);
console.log(rest);

const obj = {
  author: "Megha",
  title: "Hello world",
  year: 2023,
  detail: {
    place: "Delhi",
    favorite: "Chole bhature",
  },
};

const { author, state = "Mumbai" } = obj;

console.log(author);
console.log(state);
const {
  detail: { favorite },
} = obj;
console.log(favorite);

// Activity3: Spread and Rest operator

const myArray = [1, 2, 34, 56, 78, 9];
function mySpread(arr) {
  const newArr = [23, 45, 67];
  newArr.push(...arr);
  return newArr;
}
console.log(mySpread(myArray));

const object = {
  name: "Megha",
  price: 25000,
  year: 2034,
};

function myObject(object) {
  const newObject = { ...object, place: "Delhi" };
  return newObject;
}

console.log(myObject(object));

const array = [23, 67, 78];
function spreadArray(a, b, c) {
  const sum = a + b + c;
  return sum;
}
console.log(spreadArray(...array));

//Rest operator

function myRest(...arrayRest) {
  return arrayRest.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
}

console.log(myRest(56, 89, 67, 89));

const object1 = {
  name1: "Megha",
  price: 25000,
  year: 2034,
};

const { name1, ...myrest } = object1;

//Activity4: Default Parameters

function defaultVal(num1, num2 = 1) {
  let sum = 0;
  sum = num1 + num2;
  return sum;
}

console.log(defaultVal(45, 5));
console.log(defaultVal(45));

//Activity5: Enchanced Object Literals

const myName = "Megha";
const myAge = 20;

const EnchancedObject = {
  myName,
  myAge,
  say() {
    console.log(`this is me enchanced object function`);
  },
};

console.log(EnchancedObject); // output: { myName: 'Megha', myAge: 20, say: [Function: say] }

const myKey = "name";
const index = 1;
const myObj = {};
myObj[myKey] = "Megha";
myObj["result" + index] = 25;

console.log(myObj);
