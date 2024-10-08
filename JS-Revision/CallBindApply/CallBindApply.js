const obj = {
  firstName: "Megha",
  lastName: "Bathla",
  getdata: function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
};

obj.getdata();

//call
const obj2 = {
  firstName: "Mithie",
  lastName: "Bathla",
};

const details = function (place) {
  console.log(`Hello myself ${this.firstName} and place is ${place}`);
};
details.call(obj2, "Pune"); //function borrowing

const res = details.bind(obj2, ["Uttar pradesh"]); //bind
res();

details.apply(obj2, ["Delhi"]); //apply
