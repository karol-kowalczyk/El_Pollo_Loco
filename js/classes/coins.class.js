/**
 * Represents a coins object in the game.
 * @extends DrawableObject
 */
class Coins extends DrawableObject {

    y = 250;
    width = 200;
    height = 200;
    IMAGES_COINS = [
        '../El_Pollo_Loco/img_pollo_locco/img/8_coin/coin_1.png',
        '../El_Pollo_Loco/img_pollo_locco/img/8_coin/coin_2.png'
    ];

    /**
     * Constructs an instance of the Coins class.
     * Loads initial images, sets initial dimensions and position, and initiates animation.
     */
    constructor() {
        super().loadImage(this.IMAGES_COINS[0]);
        this.loadImages(this.IMAGES_COINS);
        this.x = 500 + Math.random() * 10000; 
        this.animate();
    }

    /**
     * Initiates the animation loop for the coins object.
     * Plays the animation at an interval of 2 frames per second (0.5 seconds per frame).
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 1000 / 2);
    }

    /**
     * Plays the animation for the coins object.
     * @param {string[]} images - Array of image paths representing the animation frames.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Removes the coins object from the map by setting its horizontal position to a large negative value.
     */
    removeFromMap() {
        this.x = -1000;
    }
}
