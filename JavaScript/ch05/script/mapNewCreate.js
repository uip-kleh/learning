let keys = [1, 2, 3];
let values = [`first`, `second`, `third`];

let data = new Map(
    keys.map(function(key, index) {
        return [key, values[index]];
    })
);
console.log(data);
