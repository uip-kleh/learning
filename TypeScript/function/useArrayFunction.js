function printName(firstName, formatter) {
    console.log(formatter(firstName));
}
function formatName(name) {
    return "".concat(name, " san");
}
printName('Takya', formatName);
// arrow function
var sayHello = function (name) { return "hello, ".concat(name); };
console.log(sayHello('Takya'));
