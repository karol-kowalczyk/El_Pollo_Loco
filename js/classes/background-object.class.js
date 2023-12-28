class BackgroundObject extends MoveableObject {
    width = 720;
    height = 600;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height; // 480 - 400 // 480 - 400 this.height( also Hoehe unseres canvas - schwarze box)
        //  = 80, was die optimale pos fuer unsere Background Landschaften sind
    }
}