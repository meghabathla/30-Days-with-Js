## why to use Super when extend a class

Calling Constructors in Both: The parent class constructor is called to ensure that any initialization code defined in the parent class is executed. This allows the child class to inherit properties and methods from the parent class properly.

Use of super: The super keyword is used to call the constructor of the parent class. It ensures that the parent class is initialized before the child class adds its own properties. This is necessary to maintain the correct order of initialization and to ensure that the inherited properties are set up correctly.

## Accessing Static Property

Static property declaration: Static properties in JavaScript are declared outside of the constructor using the static keyword directly on the class.

```js
class ClassWithStaticMethod {
  static staticProperty = "someValue";
  static staticMethod() {
    return "static method has been called.";
  }
  static {
    console.log("Class static initialization block called");
  }
}

console.log(ClassWithStaticMethod.staticProperty);
// Expected output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// Expected output: "static method has been called.
```

## Getter Setter

Getters and setters provide a way to add logic around getting and setting properties, such as validation, transformation, or logging.

```js
class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullname() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullname(newlastName) {
    this.lastName = newlastName;
  }
}

const result = new Person2("Megha", "Bathla");
console.log(result.fullname); //Not calling getter like normal function

result.firstName = "Shobhit";
result.lastName = "Arora";
console.log(result.fullname);
```

## Private Fields

```js
class Account {
  #balance;
  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  withdraw(amount) {
    this.#balance -= amount;
    return this.#balance;
  }
}
const money = new Account(100);
console.log(money.deposit(600));
console.log(money.withdraw(300));
```
