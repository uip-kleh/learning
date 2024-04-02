class BasePoint3D {
    public x: number;
    private y: number;
    protected z: number;
}

const basePoint = new BasePoint3D();
basePoint.x;
// basePoint.y; // cannot access
// basePoint.z; // cannot access

class ChildPouint extends BasePoint3D {
    constructor() {
        super();
        this.x;
        // this.y;  // cannot access
        this.z;
    }
}
