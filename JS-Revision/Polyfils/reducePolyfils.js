Array.prototype.myReduce = function (cb, acc) {
  if (this.length === 0) return "Array is empty";
  let i = 0;
  if (acc == undefined) {
    acc = this[i];
    i = 1;
  }
  for (; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

const arr = [1, 2, 3, 4];

const result = arr.myReduce((acc, cur) => (acc += cur), 0);
console.log(result);
