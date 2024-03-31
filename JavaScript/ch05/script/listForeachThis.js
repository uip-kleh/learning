let list = [1, 2, 4, null, 6];
let result = [];
list.forEach(function(value) {
    if(value !== null) {
        this.push(value);
    }
}, result);
console.log(result);
