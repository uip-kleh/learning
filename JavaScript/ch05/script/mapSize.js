let data = new Map([
    [`1st`, 1],
    [`2nd`, 2],
    [`3rd`, 3],
]);

console.log(data.size);

let cnt = 0;
for(let obj of data) {
    // console.log(obj)
    ++cnt;
}
console.log(`data size is ${cnt}!`);
