type Point = {
    x: number,
    y: number,
};
function printPoint(point: Point) {
    console.log(`x: ${point.x}`);
    console.log(`y: ${point.y}`);
};

printPoint({x: 100, y: 100});

