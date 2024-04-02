let getTriangleArea = new Function(
    `base`,
    `height`,
    `return base * height / 2`,
);

console.log(getTriangleArea(5, 10));
