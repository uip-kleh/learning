let data = new Set([1, 2, 3]);

data.forEach(function(value, key, set) {    // TODO:same as map
    console.log(value);
    console.log(key);
    console.log(set);
})

for(let value of data) {
    console.log(value);
}
