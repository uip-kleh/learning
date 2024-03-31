let list = [1, 2, 3];
let copy = Array.from(list);

console.log(list == copy);  // false
console.log(list === copy); // false

let list2 = list;
console.log(list == list2); // true
console.log(list === list2);// true

