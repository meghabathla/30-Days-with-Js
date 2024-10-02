function addFunc(num1, num2) {
  return num1 + num2;
}

function myObject() {
  const obj = {
    person: "Aman",
    say() {
      console.log(`hello world`);
    },
  };
  return obj;
}

module.exports = { addFunc, myObject };
