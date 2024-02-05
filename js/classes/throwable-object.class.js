/**
 * Represents a throwable object.
 * @extends MoveableObject
 */
class ThrowableObject extends MoveableObject {

    /**
     * Array of image paths for splash animation.
     * @type {string[]}
     */
    IMAGES_SPLASH = [
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    /**
     * Array of image paths for rotation animation.
     * @type {string[]}
     */
    IMAGES_ROTATE = [
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    /**
     * The file name of the icon.
     * @type {string}
     */
    iconFileName = this.extractFileNameFromPath(document.getElementById('sound-icon').src);

    /**
     * Audio object for the sound of a splashed bottle.
     * @type {Audio}
     */
    splashedBottleSound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/splashed_bottle.mp3');

    /**
     * Initializes a new instance of ThrowableObject.
     * @param {number} x - The x coordinate.
     * @param {number} y - The y coordinate.
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
     * Extracts the file name from the given path.
     * @param {string} path - The file path.
     * @returns {string} The file name.
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
