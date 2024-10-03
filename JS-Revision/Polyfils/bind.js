const obj = {
  name: "megha",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const greet = obj.greet;
greet(); // Output: "Hello, my name is undefined" (or throws an error in strict mode)

//that's why we need bind
function print() {
  console.log(`my name is ${this.name} and age is ${this.age}`);
}

const res = print.bind(obj);
res();
