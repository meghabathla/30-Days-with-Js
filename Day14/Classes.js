//Activity1: Class Definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static myStatic() {
    return ` hello I'm a static method`;
  }
  greet() {
    return `My name is ${this.name}`;
  }
  updateAge(newAge) {
    return (this.age = newAge);
  }
}

const data = new Person("Megha", 12);
console.log(data.greet());
console.log(data.updateAge(16));

//Activity2: Class Inheritence

class Student extends Person {
  static myStaticCount = 1; //Activity3

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;

    Student.myStaticCount++;
  }

  getStudentId() {
    return this.studentId;
  }
  greet() {
    return `Hello my name is ${this.name} and age is ${this.age} having student id is ${this.studentId}`;
  }

  static studentCount() {
    //Activity3
    return `${this.myStaticCount}`;
  }
}

const value = new Student("Himanshu", 20, "123");
console.log(value.getStudentId());
console.log(value.greet());

//Activity3: Static Methods and Properties

console.log(Person.myStatic());
console.log(Student.studentCount());

//Activity4: Getter Setter

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

//Activity5: Private Fields

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
