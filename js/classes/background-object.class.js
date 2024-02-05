/**
 * Represents a background object in the game.
 * @extends MoveableObject
 */
class BackgroundObject extends MoveableObject {
    /**
     * Initializes a background object with the provided image path and x-coordinate.
     * @param {string} imagePath - The path to the image of the background object.
     * @param {number} x - The x-coordinate of the background object.
     */
    constructor(imagePath, x) {
        super();
        this.width = 720;
        this.height = 600;
        this.loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}
