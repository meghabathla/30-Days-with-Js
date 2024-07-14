//Activity-1: Airthmetic operations

class AirthmeticOperation {
  constructor() {}
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    if (num2 > num1) return num2 - num1;
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
  remainder(num1, num2) {
    return num1 % num2;
  }
}
const result = new AirthmeticOperation();
console.log(result.add(5, 9));
console.log(result.subtract(5, 9));
console.log(result.multiply(5, 9));
console.log(result.divide(5, 9));
console.log(result.remainder(9, 3));

//Activity2: Assignment operators

let number = 23;
number += 45;
console.log(number);

let number2 = 90;
number2 -= 34;
console.log(number2);

//Activity3: Comparison operators

class Comparision {
  constructor() {}
  greaterLessthan(num1, num2) {
    if (num1 > num2) `${num1} is greater than ${num2}`;
    return `${num2} is greater than ${num1}`;
  }
  greaterLessEqual(num1, num2) {
    if (num1 >= num2) `${num1} is greater or equals to ${num2}`;
    return `${num2} is greater or equals to ${num1}`;
  }
  equalsTo(num1, num2) {
    if (num1 == num2) `${num1} is equal ${num2}`;
    return `${num2} is not equal ${num1}`;
  }
  strictlyEqual(num1, num2) {
    if (num1 === num2) `${num1} is strictly equal ${num2}`;
    return `${num2} is not strictly equal to ${num1}`;
  }
}
const answer = new Comparision();
console.log(answer.greaterLessthan(20, 40));
console.log(answer.greaterLessEqual(20, 20));
console.log(answer.equalsTo("40", 40));
console.log(answer.strictlyEqual("40", 40));

//Activity4: Logical operator

class Logical {
  constructor() {}
  and(num1, num2) {
    if (num1 && num2) return `true`;
    return `false`;
  }
  or(num1, num2) {
    if (num1 || num2) return `true`;
    return false;
  }
  negate(num1, num2) {
    if (!(num1 && num2)) return `false`;
    return true;
  }
}

const value = new Logical();
console.log(value.and(8));
console.log(value.or(8));
console.log(value.negate(8));

//Activity5: Ternary operator

const val = 34;

const res = val > 0 ? "Number is positive" : "Number is negative";
console.log(res);
