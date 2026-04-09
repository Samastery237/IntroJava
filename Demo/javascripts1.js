let a = 10;
console.log(a);

let b = a + 7;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage)

/* Declaring Strings */

const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString);

/* Single quotes, double quotes, and backticks */

const single = 'Single Quotes';
const double = "Double Quotes";
const backticks = `Backticks`;

console.log(single);
console.log(double);
console.log(backticks);

/* Embedding JavaScripts */

 const name = "Chris";
 const greeting = `Hello, ${name}`;
 console.log(greeting);

 const one = "Hello, ";
 const two = "how are you?";
 const joined = `${one}${two}`;
 console.log(joined);

 /* Concatenation using "+" */

const greeting2 = "Hello";
const name2 = "Bob";
console.log(greeting2 + ", " + name2);

const greeting3 = "Howdy";
const name3 = "Ramesh";
console.log(`${greeting3}, ${name3}`);


/* Including expression in strings */

const song = "I'm Sorry";
const score = 6;
const highestScore = 10;
const output = `I like the song ${song}, i gave it a score of ${
    (score / highestScore)*100
}%.`;
console.log(output);

/* Multiline Strings */

const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

const newline2 = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline2);

/* Including quotes in strings */

const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

/* Numbers vs. strings */

const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number); 

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);

/* JavaScript String Length */

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = text.length;