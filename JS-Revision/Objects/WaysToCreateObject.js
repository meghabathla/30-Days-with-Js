const obj = {
  name: "megha",
};
console.log(obj);

const object = new Object();
object.name = "Alice";
console.log(object);

const newObj = Object.create(obj);
newObj.place = "mumbai";
console.log(newObj);

function myObj() {
  this.name = "Hello";
  this.age = 23;
}

const res = new myObj();
console.log(res);

//Using Factory Functions

function factoryObj(name, height) {
  return {
    name,
    height,
  };
}

const result = factoryObj("Hie", 5.2);
console.log(result);
