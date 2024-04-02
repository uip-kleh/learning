let obj = {};
let data = new WeakMap();
data.set(obj, 1);
obj = null;
console.log(data.size); // undefined
