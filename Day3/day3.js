//Activity1: If-Else statement
function ifElse(num) {
  if (num > 0) {
    return `positive`;
  } else return `negative  `;
}
console.log(ifElse(-9));

function eligible(age) {
  if (agr >= 18) return `you are Eligible to vote`;
  else return `you are not eligible to vote`;
}

//Activity2: If-Else statement

function nested(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return `${num1} is largest number`;
  } else if (num2 > num1 && num2 > num3) return `${num2} is largest number`;
  else return `${num3} is largest number`;
}

//Activity3: Switch Case
const day = 2;
switch (day) {
  case 1:
    console.log(`Sunday`);
    break;
  case 2:
    console.log(`Monday`);
    break;
  case 3:
    console.log(`Tuesday`);
    break;
  case 4:
    console.log(`Wednesday`);
    break;
  case 5:
    console.log(`Thursday`);
    break;
  case 6:
    console.log(`Friday`);
    break;
  case 7:
    console.log(`Saturday`);
    break;
}

const grade = "A";
switch (grade) {
  case "A":
    console.log(`A`);
    break;
  case B:
    console.log(`B`);
    break;
  case C:
    console.log(`C`);
    break;
  case D:
    console.log(`D`);
    break;
  case F:
    console.log(`F`);
    break;
}

//Activity4: Ternary operator

function ternary(num) {
  num / 2 == 0 ? console.log(`Even`) : console.log(`Odd`);
}

ternary(45);

//Activity5: Combining condition
function Combining(num) {
  num % 4 == 0 && num % 400 == 0
    ? console.log(`Leap year`)
    : console.log(`Non leap year`);
}
Combining(1940);
