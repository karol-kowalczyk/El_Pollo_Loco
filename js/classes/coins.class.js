/**
 * Represents a collection of coins in the game.
 * @extends MoveableObject
 */
class Coins extends MoveableObject {

    y = 250;
    width = 200;
    height = 200;
    collectCoinSound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/super-mario-coin-sound.mp3');
    IMAGES_COINS = [
        '../El_Pollo_Loco/img_pollo_locco/img/8_coin/coin_1.png',
        '../El_Pollo_Loco/img_pollo_locco/img/8_coin/coin_2.png'
    ];

    /**
     * Initializes the coins collection and sets its position.
     */
    constructor() {
        super().loadImage(this.IMAGES_COINS[0]);
        this.loadImages(this.IMAGES_COINS);
        this.x = 500 + Math.random() * 10000; 
        this.animate();
    }

    /**
     * Animates the coins collection.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 1000 / 2);
    }

    /**
     * Plays the animation by cycling through the images.
     * @param {string[]} images - Array of image paths to animate.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Removes the coins collection from the map.
     */
    removeFromMap() {
        this.x = -1000;
        if(this.mute == false) 
        this.collectCoinSound.play();
    }
}
