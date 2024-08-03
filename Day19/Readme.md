# Key Differences bwteen Test and Match in Regular Expression

Return Type:

- test: Returns a boolean (true or false).
- match: Returns an array of matches or null.

Purpose:

- test: To check if a pattern exists in a string.
- match: To retrieve the actual matches from a string.

Usage Context:

- Use test when you only care about the existence of a match.
- Use match when you need the actual matched values or details about the matches.
  Examples of Both in Action
  Using test:

```js
const regex = /\d/;
const str = "There are 3 apples";
if (regex.test(str)) {
  console.log("The string contains a digit.");
} else {
  console.log("The string does not contain a digit.");
}
// Output: "The string contains a digit."
```

```js
Using match:

javascript
Copy code
const regex = /\d+/g;
const str = "There are 3 apples and 10 oranges";
const matches = str.match(regex);
console.log(matches); // Output: ["3", "10"]
```

In this match example, it finds all sequences of digits in the string and returns an array of matches.

## Regex

Let's break down the regex /\b[A-Z][a-z]\*\b/g in simple terms:

/ and /: These are just the start and end markers for the pattern. They tell the computer, "This is the pattern we want to find."

\b: Think of this as a signal that says, "Look for the start or end of a word." It's like a boundary or fence around a word.

[A-Z]: This part is looking for a single big letter, like 'A', 'B', or 'C'. It can be any capital letter from A to Z.

[a-z]_: This part is looking for any small letters that come after the big letter. The _ means "zero or more" small letters. So, it could be just one big letter or a big letter followed by many small letters.

\b: Again, this is another boundary or fence around the end of the word.

g: This is a flag that means "find all matches." Without this, it would stop after the first match.

\d matches any digit (0-9).

`+` means "one or more" of the preceding element (in this case, digits).
