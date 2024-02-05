/**
 * Represents a cloud object in the game.
 * @extends MoveableObject
 */
class Cloud extends MoveableObject {
    y = 0;
    width = 500;
    height = 200;
    IMAGES_CLOUDS = '../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/4_clouds/2.png';

    /**
     * Constructs an instance of the Cloud class.
     * Loads the cloud image and sets its initial position randomly along the x-axis.
     */
    constructor() { 
        super().loadImage(this.IMAGES_CLOUDS);
        this.x = -1000 + Math.random() * 5000;
    }
}