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
const regexEndWord = new RegExp(`${firstWord}\\b$`);
const getMatchedEnd = myStr.match(regexEndWord);

if (getMatchedEnd) {
  console.log(`Found at the end of string`, getMatchedEnd[0]);
} else {
  console.log(`Not found at the end`);
}

//Activity5: Practical Application

const strPassword = `P@123hvd`;
const regexPassword =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$#%&*?!])[A-Za-z\d@$!%*?&]{8,}$/;

if (regexPassword.test(strPassword)) {
  console.log(`Password is valid`);
} else {
  console.log(`Invalid password`);
}

const strURL = `https://courses.chaicode.com/`;
const regexURL =
  /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|\d{1,3}(\.\d{1,3}){3}|localhost)(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

if (regexURL.test(strURL)) {
  console.log(`Valid url`);
} else {
  console.log(`Invalid url`);
}
