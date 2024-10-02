function multiply(x, y) {
  return x * y;
}

const multiplyNow = multiply.bind(this, 2);
console.log(multiplyNow(5));

const multiplyMe = multiply.bind(null, 3);
console.log(multiplyMe(5));

function divideOutter(x) {
  return function divideInner(y) {
    return x / y;
  };
}
const result = divideOutter(4);
console.log(result(2));
