function add7(number) {
    return number + 7;
}
console.log (add7(10));

function multiply(a, b) {
    return a * b;
}

console.log (multiply(3, 2));

// You can keep your previous functions here (add7, multiply)

function capitalize(string) {
  if (!string) return ""; 
  let firstLetter = string.charAt(0).toUpperCase();
  let restOfWord = string.slice(1).toLowerCase();
  
  return firstLetter + restOfWord;
}

// Tests
console.log(capitalize("abcd")); // Abcd
console.log(capitalize("ABCD")); // Abcd
console.log(capitalize("aBCd")); // Abcd

function lastLetter(string){
    return string.slice(-1);
}

console.log(lastLetter("abcd"));