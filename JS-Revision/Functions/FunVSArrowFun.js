intro(); // output :hello, I'm intro function
details(); // Output: ReferenceError: Cannot access 'details' before initialization
happy(); // Output: ReferenceError: Cannot access 'happy' before initialization

function intro() {
  console.log(`hello, I'm intro function`);
}
var details = function () {
  console.log(`hello, I'm details function`);
};
const happy = () => {
  console.log(`hello, I'm happy function`);
};
