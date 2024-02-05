/**
 * Represents the bottle bar in the game.
 * @extends DrawableObject
 */
class BottleBar extends DrawableObject {
    /**
     * Initializes the bottle bar with default settings.
     * Loads images, sets dimensions and position, and sets initial percentage.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLEBAR);
        this.height = 64;
        this.width = 190;
        this.x = 15;
        this.y = 90;
        this.setPercentage(0);
    }

    /**
     * Sets the percentage of the bottle bar and updates the displayed image.
     * @param {number} percentage - The percentage value to set.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_BOTTLEBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the index of the image based on the current percentage.
     * @returns {number} The index of the image in the IMAGES_BOTTLEBAR array.
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage >= 80) {
            return 1;
        } else if (this.percentage >= 60) {
            return 2;
        } else if (this.percentage >= 40) {
            return 3;
        } else if (this.percentage >= 20) {
            return 4;
        } else {
            return 5;
        }
    }

    /**
     * Retrieves the current percentage of the bottle bar.
     * @returns {number} The current percentage.
     */
    getPercentage() {
        return this.percentage;
    }
}