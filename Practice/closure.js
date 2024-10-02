//example

function z(g) {
  let a = 100;
  return function y() {
    console.log(a, g);
  };
}

const result = z(6);
result();
//z()()==> calling the inner function

function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}
const res = new Counter();
res.incrementCounter();
