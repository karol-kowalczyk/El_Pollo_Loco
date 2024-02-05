/**
 * Represents a chicken enemy object in the game.
 * @extends MoveableObject
 */
class Chicken extends MoveableObject {
    height = 100;
    y = 320;
    isAnimating = true;

    IMAGES_WALKING = [
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    IMAGES_DEATH = [
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    /**
     * Constructs an instance of the Chicken class.
     * Loads initial images, sets initial dimensions and position, and initiates animation.
     */
    constructor() {
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEATH);
        this.x = 2700 + Math.random() * 8000;
        this.speed = 25 + Math.random() * 2;
        this.animate();
    }

    /**
     * Initiates the animation loop for the chicken object.
     * Moves the chicken left and plays the walking animation.
     */
    animate() {
        setInterval(() => {
            if (this.isAnimating) {
                this.playAnimation(this.IMAGES_WALKING);
                this.moveLeft();
            } else {
                this.removeFromMap();
            }
        }, 1000);
    }

    /**
     * Removes the chicken object from the map.
     * Delays the removal and plays the death animation.
     */
    removeFromMap() {
        setTimeout(() => {
            this.x = -1000;
        }, 400);

        setTimeout(() => {
            this.playAnimation(this.IMAGES_DEATH);
        }, 200);
    }
}
