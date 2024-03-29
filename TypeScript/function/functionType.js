function genBird(name) {
    return name.split(',');
}
function singBird(birdInfo) {
    return birdInfo('hato, kiji')[0] + ' piyopiyo';
}
console.log(singBird(genBird));
// console.log(singBird('dobato')) // error
