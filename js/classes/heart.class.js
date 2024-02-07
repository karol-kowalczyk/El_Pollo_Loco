/**
 * Represents a heart object that extends a drawable object.
 * @extends MoveableObject
 */
class Heart extends MoveableObject {

    y = 60;
    width = 100;
    height = 100;
    collectHeart = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/pick_heart.mp3');
    IMAGES_HEALTH = [
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/3_icons/icon_health.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/3_icons/icon_health_2.png'
    ];

    /**
      * Constructs a new Heart object.
      */
    constructor() {
        super().loadImage(this.IMAGES_HEALTH[0]);
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 1200 + Math.random() * 11000;
        this.y = this.y * Math.random() * 2;
        this.animate();
    }

    /**
     * Initiates animation for the heart object.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_HEALTH);
        }, 1000 / 2);
    }

    /**
     * Removes the heart object from the map.
     */
    removeFromMap() {
        this.x = -1000;
        if (this.mute == false) {
            this.collectHeart.play();
        }
    }
}