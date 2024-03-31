let book = {
    name: `yasuaki`,
    age: 24,
    sex: `male`,
    other: {keywd: `Java`, log: `logo.jpg`},
};

let {name, other, other: {keywd}} = book;

console.log(name);
console.log(other);
console.log(keywd)


