//Activity1: For Loop
function count() {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i}`);
  }
}
count();

//Activity2: Loop

function reverse() {
  let num = 10;
  while (num) {
    console.log(num);
    num = num - 1;
  }
}
reverse();

//Activity3: Do while

function factorial(num) {
  let result = 1;
  do {
    result = result * num;
    num -= 1;
  } while (num);
  return result;
}

console.log(factorial(4));

//Activity4: Nested Loop

function nested() {
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
nested();
console.log(`hello`);

function reverseStar() {
  for (let i = 5; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

reverseStar();

//Activity 5:

function continueVal() {
  for (let i = 0; i < 10; i++) {
    if (i == 5) {
      continue;
    }
    console.log(i);
  }
}
continueVal();

function breakVal() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i == 7) {
      break;
    }
  }
}
breakVal();
