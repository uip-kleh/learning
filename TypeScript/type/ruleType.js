function calc(isSum) {
    var a = 100;
    if (isSum) {
        var b = a + 1;
        return b;
    }
    return a;
}
console.log(calc(true));
console.log(calc(false));
