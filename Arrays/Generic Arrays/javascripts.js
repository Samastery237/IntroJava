const arrayLike = {
    0: "a",
    1: "b",
    length: 2,
}
console.log(Array.prototype.join.call(arrayLike, "+"));

const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length);