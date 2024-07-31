# Key Event

## Keydown:

keydown: This event is triggered when a key is first pressed down. It repeats while the key is held down.
Fired when any key is pressed down. Captures all keys, including non-character keys (e.g., Shift, Arrow keys)

```js
var inputField = document.getElementById("inputField");

inputField.addEventListener("keydown", function (event) {
  console.log("Keydown event:", event.key);
});
```

## Keyup:

keyup: This event is triggered when a key is released. Fired when any key is released. Captures all keys, including non-character keys.

```
js
var inputField = document.getElementById('inputField');

    inputField.addEventListener('keyup', function(event) {
      console.log('Keyup event:', event.key);
```

## Keypress:

keypress: This event is triggered when a key that produces a character value is pressed down. It has been deprecated and should generally be avoided in favor of keydown and keyup. Fired when a character key is pressed down. Does not capture non-character keys and has been deprecated in favor of keydown and keyup.

```js
var inputField = document.getElementById("inputField");

inputField.addEventListener("keypress", function (event) {
  console.log("Keypress event:", event.key);
});
```

# Form Events

A FormData object is created from the form, which captures all the form data. After creating it object, we can access all the field inside form. Note: e.preventDefault() is called to prevent the form's default submission behavior

```js
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  console.log(`my name is ${name}`);
});
```

# Select from options

A change event listener is added to the select element.
Inside the event listener, the selected value is obtained from e.target.value.
The text content of the p element is updated to display the selected value.

```js
const select = document.querySelector(".select");
const emptyPara = document.querySelector(".select-para");
select.addEventListener("change", (e) => {
  emptyPara.textContent = `value is ${e.target.value}`;
});
```

# Event Delegation

```js
const ul = document.querySelector(".ul");
ul.addEventListener("click", (e) => {
  if (e.target.nodeName == "LI") console.log(e.target.innerText);
});
```

an event listener is added to the ul element that listens for click events. When a click event occurs on the ul element or any of its child elements, the provided callback function is executed.

Inside the callback function, a condition checks if the nodeName of the event's target element (e.target) is LI. nodeName is a property of the DOM element that returns the tag name in uppercase. This condition ensures that the code inside the if block only executes if the clicked element is an LI element.

If the clicked element is an LI, this line logs the innerText of the clicked LI element to the console. innerText is a property that returns the text content of the element.
