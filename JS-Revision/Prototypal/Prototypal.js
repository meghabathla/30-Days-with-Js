const obj = {
  firstName: "Megha",
  lastName: "Bathla",
  city: "delhi",
  getdata: function () {
    console.log(`My name is ${this.firstName} ${this.city}`);
  },
};

let obj2 = {
  firstName: "Mithie",
  city: "Uttar Pradesh",
  age: 24,
};

obj2.__proto__ = obj;
obj2.getdata();
