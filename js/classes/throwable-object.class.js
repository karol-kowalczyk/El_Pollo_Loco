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

    extractFileNameFromPath(path) {
        let pathParts = path.split('/');
        return pathParts[pathParts.length - 1];
    }

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