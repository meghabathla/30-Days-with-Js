// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

// function y() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// y();

//How to achieve it with using var

function z() {
  for (var i = 1; i <= 5; i++) {
    function m(j) {
      setTimeout(() => {
        console.log(j);
      }, j * 1000);
    }
    m(i);
  }
}
z();
