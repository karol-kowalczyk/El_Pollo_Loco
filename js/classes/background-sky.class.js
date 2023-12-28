class BackgroundSky extends MoveableObject {

    width = 720;
    height = 1000;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}