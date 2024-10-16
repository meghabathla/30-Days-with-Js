function* numberGenerator() {
  let num = 5;
  while (num >= 0) {
    yield num--;
  }
}
const generate = numberGenerator();
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
