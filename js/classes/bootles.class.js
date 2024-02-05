/**
 * Represents a bottle object in the game.
 * @extends MoveableObject
 */
class Bottle extends MoveableObject {
    /**
     * Initializes a bottle object with default settings.
     * Loads images, sets dimensions, position, and initiates animation.
     */
    constructor() {
        super();
        this.width = 100;
        this.height = 100;
        this.loadImage(this.IMAGES_BOTTLES[0]);
        this.x = 200 + Math.random() * 10000;
        this.y = 320 + Math.random() * -10;
        this.loadImages(this.IMAGES_BOTTLES);
        this.animate();
    }

    /**
     * Initiates the animation loop for the bottle object.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLES);
        }, 1000 / 2);
    }

    /**
     * Plays the animation for the bottle object.
     * @param {string[]} images - Array of image paths for animation.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Removes the bottle object from the map by moving it off-screen.
     */
    removeFromMap() {
        this.x = -1000;
    }
}
