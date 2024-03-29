function genBird(name: string): string[] {
    return name.split(',')
}

function singBird(birdInfo: (x: string) => string[]): string {
    return birdInfo('hato, kiji')[0] + ' piyopiyo'
}

console.log(singBird(genBird))
// console.log(singBird('dobato')) // error
