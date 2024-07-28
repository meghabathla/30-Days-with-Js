## Closure

Closure: The inner function forms a closure around the num variable. This means that even though outer has finished executing, the num variable is still available to inner because inner retains a reference to outer's execution context.

## Scope Chain

Scope Chain: When inner is called, it first looks in its local scope for variables. If it doesn't find num there, it looks in the outer scope (the scope of outer). This chain continues up to the global scope.

## Lexical Scope chain

Lexical Scoping:
JavaScript functions are lexically scoped, meaning they remember the scope in which they were defined, not where they were called. When a function is defined, it captures its surrounding environment.

## How to create memoized function

```js
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = args.toString();
    if (cache[key]) {
      console.log(`return from cache`);
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
};

const add = (a, b) => {
  return a + b;
};

const memoAdd = memoize(add);
console.log(memoAdd(1, 3));
console.log(memoAdd(1, 3));
```

## Module Pattern Closures

```js
const createItem = () => {
  let arr = [];
  return {
    addItem: (item) => {
      arr.push(item);
      console.log(`${item} is added to collection`);
    },
    removeItem: (item) => {
      arr = arr.filter((element) => element !== item);
    },
    listOfItem: () => {
      if (arr.length > 0) {
        arr.forEach((element) => {
          console.log(element);
        });
      } else {
        console.log(`No items in array`);
      }
    },
  };
};
const output = createItem();
output.addItem("Book");
output.addItem("Pen");
output.addItem("Pencil");
output.addItem("Notebook");
output.addItem("Scale");
output.addItem("Sharpner");
output.listOfItem();
output.removeItem("Scale");
output.listOfItem();
```
