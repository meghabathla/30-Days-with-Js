const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const button = document.getElementById("button");

grandParent.addEventListener("click", () => {
  console.log(`grandParent clicked`);
});

parent.addEventListener("click", () => {
  console.log(`parent clicked`);
});

parent.addEventListener("click", () => {
  console.log(`parent clicked`);
});

button.addEventListener("click", (e) => {
  console.log(`button clicked`);
  e.stopPropagation(); // to stop bublling/propogation
});
// event capturing/tickling
