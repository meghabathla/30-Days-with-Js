## Enhanced Object Literals

With these enhancements you can write code to create objects that is easier to read and more concise.

# Key Shorthand

```js
const name = "Kyle";
const age = 25;

const person = {
  name: name,
  age: age,
};
```

In the above example we are creating a person object with a name and age property and we are assigning the age and name property to the variables age and name. It is very common to set object keys that have the same name as the variable you are using to assign the value so JavaScript added the following shorthand syntax.

```js
const name = "Kyle";
const age = 25;

const person = {
  name,
  age,
};
```

# Function Shorthand

JavaScript also added the ability to shorten function definitions as well. Normally you would need to write code like the following.

```js
const person = {
  sayHi: function () {
    console.log("Hi");
  },
};
```

```js
const person = {
  sayHi() {
    console.log("Hi");
  },
};
```

# Computed Property Names

```js
const dynamicKey = "name";
const index = 1;

const person = {
  [dynamicKey]: "Kyle",
  ["age" + index]: 25,
};

["age" + index]: 25,

}
//output
{
  "name": "Kyle",
  "age1": 25
}
```

In the above code you can see that we wrapped the computed property names in square brackets and put some JavaScript code in there which will be converted to a string and then used as the property name. In our case this creates the following object.

In order to do this before these changes you would have had to create the entire object first and then add the dynamic keys.

```js
const dynamicKey = "name";
const index = 1;

const person = {};
person[dynamicKey] = "Kyle";
person["age" + index] = 25;
```

Overall, these changes are pretty minor, but they do make creating objects a bit easier which in turn makes the code you write easier to read.
