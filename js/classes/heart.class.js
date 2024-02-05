/**
 * Represents a heart object in the game.
 * @extends DrawableObject
 */

class Heart extends DrawableObject {

    y = 60;
    width = 100;
    height = 100;
    IMAGES_HEALTH = [
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/3_icons/icon_health.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/3_icons/icon_health_2.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_HEALTH[0]);
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 1200 + Math.random() * 10000;
        this.y = this.y * Math.random() * 2;
        this.animate();
    }

    /**
     * Initiates the animation loop for an object.
     * Calls the playAnimation method at an interval of 2 frames per second (0.5 seconds per frame).
     * The animation is based on the provided array of images representing the health status of the object.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_HEALTH);
        }, 1000 / 2);
    }

    /**
     * Plays the next frame of animation from the provided array of images.
     * Updates the object's image based on the current frame.
     * @param {string[]} images - Array of image paths representing the animation frames.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Removes the object from the map by setting its horizontal position to a large negative value.
     */
    removeFromMap() {
        this.x = -1000;
    }
}