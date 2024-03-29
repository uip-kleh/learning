function sayHello(name, greeting) {
    return "".concat(greeting || 'hello', " ").concat(name);
}
console.log(sayHello('Takya'));
console.log(sayHello('Takya', 'hi'));
