/*Create an Arrays*/

const fruits = ["Apple", "Banana"];
console.log(fruits.length);

const fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);

const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length);

/* Access an array item by its index */

const fruitsTwo = ["Apple", "Banana"];
console.log(fruitsTwo[0]);
console.log(fruitsTwo[1]);
console.log(fruitsTwo[fruits.length - 1]);
console.log(fruitsTwo[99]);

console.log(fruitsTwo.indexOf("Banana"));

/* Check if an array contains a certain item */

const fruitsThree = ["Apple", "Banana"];

console.log(fruitsThree.includes('Banana'));
console.log(fruitsThree.includes("Cherry"));

console.log(fruitsThree.indexOf("Banana") !== -1);
console.log(fruitsThree.indexOf("Cherry") !== -1);

/* Append an item to an array */

const fruitsFour = ["Apple", "Banana"];
const newLength = fruitsFour.push("Orange");
console.log(fruitsFour);
console.log(newLength);

/* Remove the last item from array */

const fruitFive = ["Apple", "Banana", "Orange"];
const removedItem = fruitFive.pop();
console.log(fruitFive);
console.log(removedItem);

/* Remove multiple items from the end of an array */

const fruitSix = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = -3;
const removedItems = fruitSix.splice(start);
console.log(fruitSix);
console.log(removedItems);

/* Truncate an array down to just its first N items */

const fruits7 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start1 = 2;
const removedItems1 = fruits.splice(start1);
console.log(fruits7);
console.log(removedItems1);

/* Remove the first item from an array */

const fruitSeven = ["Apple", "Banana"];
const removedItem2 = fruitSeven.shift();
console.log(fruitSeven);
console.log(removedItem2);

/* Remove multiple items from the beginning of an array */

const fruitEight = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
const start2 = 0;
const deleteCount = 3;
const removedItems3 = fruitEight.splice(start2, deleteCount);
console.log(fruitEight);
console.log(removedItems3);

/* Add a new first item to an array */

const fruitNine = ["Banana", "Mango"];
const newLength1 = fruitNine.unshift("Strawberry");
console.log(fruitNine);
console.log(newLength1);

/* Remove a single item by index */

const fruitsTen = ["Strawberry", "Banana", "Mango"];
const start3 = fruitsTen.indexOf("Banana");
const deleteCount1 = 1;
const removedItems4 = fruitsTen.splice(start3, deleteCount1);
console.log(fruitsTen);
console.log(removedItems4);

/* Remove multiple items by index */

const fruits11 = ["Apple", "Banana", "Strawberry", "Mango"];
const start4 = 1;
const deleteCount2 = 2;
const removedItems2 = fruits11.splice(start4, deleteCount2);
console.log(fruits11);
console.log(removedItems2);

/* Replace multiple items in an array */

const fruits12 = ["Apple", "Banana", "Strawberry"];
const start5 = -2;
const deleteCount3 = 2;
const removedItems5 = fruits12.splice(start5, deleteCount3, "Mango", "Cherry");
console.log(fruits12);
console.log(removedItems5);

/* Iterate over an array */

const fruits13 = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits13) {
    console.log(fruit);
}

/* Call a function on each element in an array */

const fruits14 = ["Apple", "Mango", "Cherry"];
fruits14.forEach((item, index, array) => {
    console.log(item, index);
});


/* Merge multiple arrays together */

const fruits15 = ["Apple", "Banana", "Strawberry"];
const moreFruits = ["Mango", "Cherry"];
const combinedFruits = fruits15.concat(moreFruits);
console.log(combinedFruits);
console.log(fruits15);
console.log(moreFruits);

/* Copy an array */

const fruits16 = ["Strawberry", "Mango"];

const fruitsCopy = [...fruits16];
console.log(fruitsCopy);

const fruitsCopy2 = Array.from(fruits16);
console.log(fruitsCopy2);

const fruitsCopy3 = fruits16.slice();
console.log(fruitsCopy3);

const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits16));
console.log(fruitsDeepCopy);

const fruitsAlias = fruits16;
fruits16 === fruitsAlias; // true
fruits.unshift("Apple", "Banana");
console.log(fruits16);
console.log(fruitsAlias);

/* Using an array to tabulate a set of values */

const values = [];
for (let x = 0; x < 10; x++) {
    values.push([2 ** x, 2 * x ** 2]);
};

console.table(values);

/* Creating an array using the result of a match */

const myRe = /d(b+)(d)/i;
const execResult = myRe.exec("cdbBdbsbz");

console.log(execResult.input); 
console.log(execResult.index);
console.log(execResult);

/* Mutating initial array in iterative methods */

testSideEffect((arr, index) => {
  if (index === 1) arr.splice(2, 1);
});

const arr2 = ["e1", "e2", "e3", "e4"];
arr2.find((elem, index, arr) => {
  console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
  if (index === 1) arr.splice(2, 1);
  return false;
});