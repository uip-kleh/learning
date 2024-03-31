let list = [1, 2, 3];

let list2 = [...list];
console.log(list == list2);
console.log(list === list2);

let list3 = list.slice();
console.log(list == list3);
console.log(list === list3);

let list4 = list.concat();
console.log(list == list4);
console.log(list === list4);
