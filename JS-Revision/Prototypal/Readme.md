## Prototypal Inheritance

Prototypal Inheritance refers to the process by which one object can inherit properties and methods from another through its prototype. In JavaScript, objects inherit directly from other objects, as opposed to class-based inheritance in traditional object-oriented programming (OOP) languages.

```js
const animal = {
  speak: function () {
    console.log(`${this.name} makes a noise.`);
  },
};

const dog = Object.create(animal); // dog inherits from animal
dog.name = "Buddy";
dog.speak(); // Output: Buddy makes a noise.
```

## Prototype Chain

If you try to access a property or method on an object and it doesn’t exist on that object, JavaScript will traverse the prototype chain, looking up the inheritance hierarchy until it finds the property or method, or until it reaches the end of the chain (null).

```js
const car = {
  type: "vehicle",
  drive() {
    console.log("Driving...");
  },
};

const myCar = Object.create(car);
myCar.brand = "Toyota";

console.log(myCar.brand); // Toyota (from myCar)
console.log(myCar.type); // vehicle (inherited from car)
myCar.drive(); // Driving... (inherited from car)
```

### Summary:

- Prototype: An object from which other objects inherit properties and methods.
- Prototypal Inheritance: The mechanism by which objects inherit from other objects through their prototype.
- Prototype Chain: The chain of objects formed when looking for properties or methods up the inheritance hierarchy.
