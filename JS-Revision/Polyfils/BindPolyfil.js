const object = {
  firstname: "megha",
  lastname: "bathla",
};
function printName(city, state) {
  console.log(
    `My name is ${this.firstname} ${this.lastname} and live in city ${city} at state ${state}`
  );
}

Function.prototype.myBind = function (...args) {
  let func = this;
  let params = args.slice(1);
  return function (...args2) {
    func.apply(args[0], [...params, ...args2]); //calling printName method here
  };
};

const res = printName.myBind(object, "Muzaffarnagar");
res("UP");
