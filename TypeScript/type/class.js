var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.moveX = function (n) {
        this.x += n;
    };
    Point.prototype.moveY = function (n) {
        this.y += n;
    };
    Point.prototype.printCoordinate = function () {
        console.log("x: ".concat(this.x));
        console.log("y: ".concat(this.y));
    };
    return Point;
}());
var point = new Point();
point.moveX(10);
console.log("x, y: ".concat(point.x, ", ").concat(point.y));
// overload
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.moveZ = function (n) {
        this.z += n;
    };
    Point3D.prototype.printCoordinate = function () {
        console.log("x: ".concat(this.x));
        console.log("y: ".concat(this.y));
        console.log("z: ".concat(this.z));
    };
    return Point3D;
}(Point));
var point3D = new Point3D();
point3D.moveX(10);
point3D.moveZ(-10);
point3D.printCoordinate();
