const object = {
  firstname: "megha",
  lastname: "bathla",
};
function printName(city, state) {
  console.log(
    `My name is ${this.firstname} ${this.lastname} and live in city ${city} at state ${state}`
  );
}

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") throw new Error(this + "is not callable");
  if (!Array.isArray(args))
    throw new TypeError("CreateListFromArrayLike called on non object");
  context.func = this;
  context.func(...args);
};

printName.myApply(object, ["Muzaffarnagar", "Uttar Pradesh"]);
