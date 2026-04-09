/* Built-in browser functions */

const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);

/* Function parameters */

const madeAnotherString = myArray.join();
console.log(madeAnotherString);

/* Default parameters */

function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello();

function myFunction() {
  alert("hello");
}

(function () {
  alert("hello");
});

const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled)