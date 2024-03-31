let list = [1, 2, 3];
list.push(4);
list.push(5);

console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.shift());
console.log(list);

list.push(...[1, 2, 3]);
console.log(list);
