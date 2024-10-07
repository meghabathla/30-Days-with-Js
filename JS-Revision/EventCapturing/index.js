const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const button = document.getElementById("button");

grandParent.addEventListener(
  "click",
  () => {
    console.log(`grandParent clicked`);
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    console.log(`parent clicked`);
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    console.log(`parent clicked`);
  },
  true
);

button.addEventListener(
  "click",
  () => {
    console.log(`button clicked`);
  },
  true
);
