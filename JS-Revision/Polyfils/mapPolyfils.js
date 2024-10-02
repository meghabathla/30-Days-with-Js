Array.prototype.MyMap = function (cb) {
  if (this.length === 0) return "Array is empty";

  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i], i, this));
  }
  return newArray;
};

const array = [1, 2, 3, 4, 6, 7];

const result = array.MyMap((element) => element * 2);
console.log(result);
