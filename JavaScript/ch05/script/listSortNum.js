let list = [5, 20, 15];

console.log(list.sort());   // bad
console.log(
    list.sort(function(m, n) {
        return m - n;
    }));
