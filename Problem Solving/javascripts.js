// 1. When a user inputs a number
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// 2. Loop from 1 to the entered number
for (let i = 1; i <= answer; i++) {

  // 3. If divisible by 3 AND 5, print "FizzBuzz"
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } 
  // 4. If divisible by 3, print "Fizz"
  else if (i % 3 === 0) {
    console.log("Fizz");
  } 
  // 5. If divisible by 5, print "Buzz"
  else if (i % 5 === 0) {
    console.log("Buzz");
  } 
  // 6. Otherwise print the current number
  else {
    console.log(i);
  }
}