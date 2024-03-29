// array composed of only string type
let array: string[] = []
array.push("123")
array.push("456")

console.log(array)

// array composed of multiple types
let mixedArray = ["foo", 1]
console.log(mixedArray)
let mixedArrayU: (string|number)[] = ["foo", 1]
console.log(mixedArray)
let mixedArrayT: [string, number] = ["foo", 1] // tuple
