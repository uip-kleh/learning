function printPoint(point) {
    console.log("x: ".concat(point.x));
    console.log("y: ".concat(point.y));
    console.log("z: ".concat(point.z));
}
printPoint({ x: 100, y: 100, z: 100 });
var MyPoint = /** @class */ (function () {
    function MyPoint() {
    }
    return MyPoint;
}());
function printMyPoint(point) {
    console.log("x: ".concat(point.x));
    console.log("y: ".concat(point.y));
}
printMyPoint({ x: 100, y: 100 });
