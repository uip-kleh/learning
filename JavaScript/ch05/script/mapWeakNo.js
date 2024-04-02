let obj = {};
let data = new Map();
data.set(obj, 1);
obj = null; // clear map
console.log(data.size); // 1
