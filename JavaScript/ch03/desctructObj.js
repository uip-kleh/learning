let book = {
    name: `yasuaki`,
    age: 24,
    sex: `male`,
};

let {name, age, memo=`o`} = book;
console.log(name);
console.log(age);
console.log(memo)
