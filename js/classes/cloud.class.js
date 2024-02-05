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
     * Initializes the cloud object and sets its position.
     */
    constructor() { 
        super().loadImage(this.IMAGES_CLOUDS);
        this.x = -1000 + Math.random() * 5000;
    }
} 