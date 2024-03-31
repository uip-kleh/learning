let n = `123xxx`;
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));

let d = new Date();
console.log(Number(d));
console.log(Number.parseFloat(d));
console.log(Number.parseInt(d));

let b = `0x10`;
console.log(Number(b));
console.log(Number.parseFloat(b));
console.log(Number.parseInt(b));

let e = `1.01e+2`;
console.log(Number(e));
console.log(Number.parseFloat(e));
console.log(Number.parseInt(e));
