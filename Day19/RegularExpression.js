//Activity1: Basic Regular Expression

const str = "Hello, I'm Javascript";
const regex = /Javascript/;
const getMatch = str.match(regex);

if (getMatch) {
  console.log(`Found in string`);
} else {
  console.log(`Not found`);
}

const newStr = "My favor numbers are 12, 45, 34 and 123";
const checkRegex = /\d+/g;
const digitFound = newStr.match(checkRegex);

console.log(digitFound);

//Activity2: Character Classes and Quantifiers

const wordStr = "Himalayas is a Beautiful Place to Visit";
const wordRegex = /\b[A-Z][a-z]*\b/g;

const capitalWords = wordStr.match(wordRegex);
console.log(capitalWords);

const sequenceStr = `code 3456, 787 pin code 345565 544667`;
const seqRegex = /\d+/g;

const seqResult = sequenceStr.match(seqRegex);
console.log(seqResult);

//Activity3: Grouping amd capturing

const codeStr = `area code (123-3445-54656)`;
const codeRegex = /\(\d{3}-\d+-\d+\)/g;

const codeResult = codeStr.match(codeRegex);
console.log(codeResult);

const emailStr = "example@example.com";
const emailRegex = /^([^@]+)@([^@]+)$/;

const matchEmail = emailStr.match(emailRegex);

if (matchEmail) {
  const userName = matchEmail[1];
  const domain = matchEmail[2];
  console.log(`username ${userName} domain ${domain}`);
} else {
  console.log(`not found`);
}

//Activity4: Assertion and Boundaries

const myStr = ` is a nice person Megha`;
const firstWord = `Megha`;
const regexWord = new RegExp(`^${firstWord}\\b`);

const getMatched = myStr.match(regexWord);

if (getMatched) {
  console.log(`Found in the begining of string`, getMatched[0]);
} else {
  console.log(`Not found`);
}
console.log(getMatched[0]);
if (getMatched) {
  console.log(`Found in the end of string`, getMatched[myStr.length - 1]);
} else {
  console.log(`Not found`);
}
