let getTriangleArea = new Function(
    'base',
    'height',
    'return base * height / 2;'
);

console.log(getTriangleArea(10, 4))

let param = 'height, width';
let formula = 'return height * width / 2;';
let diamond = new Function(param, formula);
console.log(diamond(5, 2));
