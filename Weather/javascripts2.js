/* Comparing Strings */

const a = "a";
const b = "b";
if (a < b) {
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss");
areEqualInLowerCase("ı", "I");

const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de");
areEqual("ı", "I", "tr");

/* String primitives and String objects */

const strPrim = "foo"; 
const strPrim2 = String(1); 
const strPrim3 = String(true); 
const strObj = new String(strPrim); 

console.log(typeof strPrim);
console.log(typeof strPrim2);
console.log(typeof strPrim3);
console.log(typeof strObj);

const s1 = "2 + 2";
const s2 = new String("2 + 2");
console.log(eval(s1));
console.log(eval(s2));
console.log(eval(s2.valueOf()));

/* String Conversion */

const nullVar = null ;
nullVar.toString();
String(nullVar);

const undefinedVar = undefined;
underdefinedVar.toString();
String(undefinedVar);
