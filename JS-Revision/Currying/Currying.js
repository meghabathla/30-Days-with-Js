function add(x, y) {
  console.log(x + y);
}

let addByTwo = add.bind(this, 3);
addByTwo(2);

//currying by function closures

function multiple(x) {
  return function (y) {
    console.log(x * y);
  };
}

let res = multiple(6);
res(8);
