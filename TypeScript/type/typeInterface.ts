interface Point {
    x: number,
    y: number,
}

function printPoint(point: Point) {
    console.log(`x: ${point.x}`);
    console.log(`y: ${point.y}`);
    console.log(`z: ${point.z}`);
}

interface Point {
    z?: number;
}

printPoint({x: 100, y: 100, z: 100});

class MyPoint implements Point {
    x: number;
    y: number;
}

function printMyPoint(point: MyPoint) {
    console.log(`x: ${point.x}`);
    console.log(`y: ${point.y}`);
}

printMyPoint({x: 100, y: 100});
