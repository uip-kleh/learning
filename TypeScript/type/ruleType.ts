function calc(isSum: boolean) {
    let a = 100
    if(isSum) {
        let b = a + 1
        return b
    }
    return a
}

console.log(calc(true))
console.log(calc(false))
