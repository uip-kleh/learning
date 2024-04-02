let data = new Map();

data.set(`1st`, 1);
data.set(`2nd`, 2);
console.log(data.delete(`1st`));
console.log(data.delete(`2nd`));
console.log(data.delete(`3rd`));
console.log(data);
