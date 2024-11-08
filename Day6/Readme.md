## Push

push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

```js
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]
```

## Pop

pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

```js
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"
const res = plants.pop();
console.log(res);
// Expected output: "Kale"
```

## Unshift

The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.

```js
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

const res = array1.unshift(3);
console.log(res);
// Expected output: 6
console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
```

## Shift

The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1
```

## Map

The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

## Filter

The filter function creates a new array with all elements that pass the test implemented by the provided function.

```js
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

## Reduce

The map function creates a new array populated with the results of calling a provided function on every element in the calling array.

The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0)

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
```

## ForEach

The forEach() method of Array instances executes a provided function once for each array element.

```js
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```
