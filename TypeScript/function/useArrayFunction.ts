function printName(firstName: string, formatter: (name: string) => string) {
    console.log(formatter(firstName))
}

function formatName(name: string): string {
    return `${name} san`
}

printName('Takya', formatName)

// arrow function
let sayHello = (name: string): string => `hello, ${name}`
console.log(sayHello('Takya'))
