const object = {
  firstname: "megha",
  lastname: "bathla",
};
function printName(city, state) {
  console.log(
    `My name is ${this.firstname} ${this.lastname} and live in city ${city} at state ${state}`
  );
}

printName.call(object, "Muzaffarnagar", "Uttar Pradesh");

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(this + "is not callable");
  context.func = this;
  context.func(...args);
};
printName.myCall(object, "Muzaffarnagar", "Uttar Pradesh");
