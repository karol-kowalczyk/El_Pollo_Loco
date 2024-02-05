/**
 * Represents a background object that extends MoveableObject.
 * @extends MoveableObject
 */
class BackgroundObject extends MoveableObject {

    /**
     * Width of the background object.
     * @type {number}
     */
    width = 720;

    /**
     * Height of the background object.
     * @type {number}
     */
    height = 600;

    /**
     * Creates an instance of BackgroundObject.
     * @param {string} imagePath - The path to the image of the background object.
     * @param {number} x - The initial x-coordinate of the background object.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}
