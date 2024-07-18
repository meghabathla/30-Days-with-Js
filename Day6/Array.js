const arr = [1, 2, 3, 4, 5];

//Activity1:  Creation and Access
console.log(arr);
console.log(arr[0], arr[1]);

//Activity2: Basics
arr.push(6); // add  from end of array
arr.unshift(3); //add from begining of array
console.log(arr);
arr.pop(); //removes the last element from array
arr.shift(); // removes the first element from array
console.log(arr);

//Activity3: intermediate
const newArr = arr.map((a) => a * 2);
console.log(newArr);

const evenArr = arr.filter((a) => a % 2 === 0);
console.log(evenArr);

const sumArr = arr.reduce((acc, cur) => {
  acc = acc + cur;
  return acc;
}, 0);
console.log(sumArr);

//Activity4: Iteration
function iteration(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(arr[i]);
  }
}

iteration(arr);

arr.forEach((val) => console.log(val));

//Activity5: Multidemension Array
const myArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8, 9],
];
console.log(myArray);
console.log(myArray[1][0]);

//Another way

const matrix = [];

function arrMatrix(row, col) {
  for (let i = 0; i < row; i++) {
    matrix.push([]);
    for (let j = 0; j < col; j++) {
      matrix[i].push(i * j + 1);
    }
  }
  return matrix;
}
console.log(arrMatrix(3, 3));
console.log(matrix[0][2]);
