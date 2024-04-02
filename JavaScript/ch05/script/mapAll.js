let data = new Map();

data.set(`1st`, 1)
    .set(`2nd`, 2)
    .set(`3rd`, 3);

for(let key of data.keys()) {
    console.log(key);
}

for(let value of data.values()) {
    console.log(value);
}

for(let [key, value] of data.entries()) {
    console.log(`${key} ${value}`);
}

console.log(Array.from(data.keys()));

Array.from(data.keys()).forEach(value => {
    console.log(value);
})

data.forEach(function(key, value) {
    console.log(key, value);
})
