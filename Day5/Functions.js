//Activity1: FUnction Declaration

function evenOdd(num) {
  const res = num % 2 === 0 ? `even` : `odd`;
  console.log(res);
}

function squareRoot(num) {
  const res = Math.sqrt(num);
  return res;
}

//Activity2:
function concate(str1, str2) {
  return str1.concat(" ", str2); //`${str1} ${str2}`;
}
console.log(concate("hello", "Megha"));

//Activity3:
const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(45, 56));

const characterCheck = (str, letter) => {
  const res = str.includes(letter);
  if (res) return `true`;
  return `false`;
};
console.log(characterCheck("Megha", "m"));

//Activity4: Functiona nd default value

const value = (num1, num2 = 90) => {
  return num1 * num2;
};
console.log(value(45, 78));

const greeting = (name, age = 18) => {
  return `My name is ${name} and ${age}`;
};
console.log(greeting("Megha", 24));

//Activity5: Higher order function

const calling = (func, num) => {
  while (num) {
    func();
    num = num - 1;
  }
};

const intro = () => {
  console.log(`hello`);
};

calling(intro, 5);

const passing = (func1, func2, param) => {
  const res = func1(param);
  return func2(res);
};

function double(val) {
  return val * 2;
}

function triple(val) {
  return val * 3;
}

console.log(passing(double, triple, 2));
