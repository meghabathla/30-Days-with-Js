## Object.Keys

The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.

```js
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
```

## Object.Values

The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.

```js
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
```

## Object.groupBy

The Object.groupBy() static method groups the elements of a given iterable according to the string values returned by a provided callback function. The returned object has separate properties for each group, containing arrays with the elements in the group.

```js
Object.groupBy(items, callbackFn);
```

an example

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ type }) => type);

/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

## for in

for in loop is typically used to iterate over the enumerable properties of an object. However, when dealing with arrays, it’s generally better to use a for...of loop or array methods like forEach, map, etc., because a for...in loop can iterate over properties that are not part of the array, such as methods or inherited properties.

```js
const library = {
  name: "Arvind Kaushikh",
  books: [
    {
      title: "Hello",
      notebook: "Ajanta",
    },
    {
      title: "World map",
      notebook: "Classic",
    },
  ],
};

for (const index in library.books) {
  console.log(library.books[index].title);
}
```
