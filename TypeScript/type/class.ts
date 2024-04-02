class Point {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    moveX(n: number) : void {
        this.x += n;
    }

    moveY(n: number): void {
        this.y += n;
    }

    printCoordinate(): void {
        console.log(`x: ${this.x}`);
        console.log(`y: ${this.y}`);
    }
}

const point = new Point();
point.moveX(10);
console.log(`x, y: ${point.x}, ${point.y}`)

// overload
class Point3D extends Point {
    z: number;

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        super(x, y);
        this.z = z;
    }

    moveZ(n: number): void {
        this.z += n;
    }

    printCoordinate(): void {
        console.log(`x: ${this.x}`);
        console.log(`y: ${this.y}`);
        console.log(`z: ${this.z}`);
    }
}
const point3D = new Point3D()
point3D.moveX(10);
point3D.moveZ(-10);
point3D.printCoordinate();

