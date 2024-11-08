const person = {
  say() {
    console.log("first");
  },
  name: "megha",
  write: function () {
    console.log(this.name);
  },
};
