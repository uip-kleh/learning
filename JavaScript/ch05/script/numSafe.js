console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);

// when use more than MAX_SAFE_INTEGER, use BigInt
// add `n` at the end of number
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n);

// BigInt has some limitation
// console.log(2n + 1); // error
console.log(10n / 3n);
console.log(10 / 3);
console.log(10n === 10); // false
console.log(10n == 10); //true

/*
avoid casting BigInt to Int
*/
