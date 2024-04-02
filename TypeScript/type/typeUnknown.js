var x = 123;
var y = "hello";
// console.log(x.toFixed(1));   // error
// console.log(y.toLowerCase()) // error
if (typeof x === "number") {
    console.log(x.toFixed(1));
}
if (typeof y === "string") {
    console.log(y.toLowerCase());
}
