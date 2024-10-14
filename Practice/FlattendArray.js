const arr = [1, [2, 3], [[4]]];

function flattedArray(array) {
  if (array.length === 0) return;

  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      console.log("priniting array", array[i]);
      newArr.push(...flattedArray(array[i]));
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
console.log(flattedArray(arr));
