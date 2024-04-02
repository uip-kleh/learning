interface Colorful {
    color: string;
};

interface Circle {
    radius: number;
}

interface ColofullCircle extends Colorful, Circle {};

const cc: ColofullCircle = {
    color: `red`,
    radius: 10,
}
