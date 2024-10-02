Array.prototype.myFilter = function (cb) {
  if (this.length === 0) return "Array is empty";

  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const array = [1, 2, 3, 4, 6, 7];

const result = array.myFilter((element) => element % 2 === 0);
console.log(result);
