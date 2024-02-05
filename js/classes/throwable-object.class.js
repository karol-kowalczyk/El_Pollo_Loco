/**
 * Represents a throwable object that extends MoveableObject.
 * @extends MoveableObject
 */
class ThrowableObject extends MoveableObject {

    IMAGES_SPLASH = [
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    IMAGES_ROTATE = [
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    iconFileName = this.extractFileNameFromPath(document.getElementById('sound-icon').src);
    splashedBottleSound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/splashed_bottle.mp3');

    /**
     * Creates an instance of ThrowableObject.
     * @param {number} x - The x-coordinate.
     * @param {number} y - The y-coordinate.
     */
    constructor(x, y) {
        super().loadImage(this.IMAGES_ROTATE[1]);
        this.loadImages(this.IMAGES_ROTATE);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 100;
        this.throw(100, 150);
    }

    /**
     * Throws the object.
     */
    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);

        this.intervalId = setInterval(() => {
            this.playAnimation(this.IMAGES_ROTATE);
        }, 2.5);
    }

    /**
     * Extracts the filename from a given path.
     * @param {string} path - The path from which to extract the filename.
     * @returns {string} The extracted filename.
     */
    extractFileNameFromPath(path) {
        let pathParts = path.split('/');
        return pathParts[pathParts.length - 1];
    }

    /**
     * Plays the animation for a splashed bottle.
     */
    splashedBottle() {
        clearInterval(this.intervalId);
        this.playAnimation(this.IMAGES_SPLASH);

        if (this.iconFileName === 'speaker-mute.png') {
            this.splashedBottleSound.pause();
        } else {
            this.splashedBottleSound.play();
        }
    }
}
