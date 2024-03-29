function sayHello(name: string, greeting?: string): string {
    return `${greeting || 'hello'} ${name}`
}

console.log(sayHello('Takya'))
console.log(sayHello('Takya', 'hi'))
