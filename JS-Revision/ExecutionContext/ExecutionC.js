function intro() {
  console.log(`hello, I'm intro function`);
}
function details() {
  console.log(`hello, I'm details function`);
}
function happy() {
  details();
  console.log(`hello, I'm happy function`);
}
happy();
intro();
