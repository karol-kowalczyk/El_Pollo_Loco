/**
 * Represents a bottle object that extends MoveableObject.
 * @extends MoveableObject
 */
class Bottle extends MoveableObject {

    width = 100;
    height = 100;
    collectBottleSound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/pick_bottle.mp3');
    IMAGES_BOTTLES = [
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    /**
        * Creates an instance of Bottle.
        */
    constructor() {
        super().loadImage(this.IMAGES_BOTTLES[0]);
        this.x = 200 + Math.random() * 10000;
        this.y = 320 + Math.random() * -10;
        this.loadImages(this.IMAGES_BOTTLES);
        this.animate();
    }

    /**
     * Animates the bottle.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLES);
        }, 1000 / 2);
    }

    /**
     * Removes the bottle from the map.
     */
    removeFromMap() {
        this.x = -1000;
        if(this.mute == false) {
            this.collectBottleSound.play();
        }
    }
}