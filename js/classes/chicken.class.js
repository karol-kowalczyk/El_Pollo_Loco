/**
 * Represents a chicken enemy in the game.
 * @extends MoveableObject
 */
class Chicken extends MoveableObject {

    height = 100;
    y = 320;
    isAnimating = true;
    offset = {
        top: -20,
        left: 0,
        right: 0,
        bottom: -10
    };

    IMAGES_WALKING = [
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
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

    chicken_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/Chickens-sound-effect-.mp3');

    /**
     * Initializes chicken's properties and animations.
     */
    constructor() {
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEATH);
        this.x = 1000 + Math.random() * 15000;
        this.speed = 20 + Math.random() * 2;
        this.animate();
    }

    /**
     * Animates the chicken's movements.
     */
    animate() {
        setInterval(() => {
            if (this.isAnimating) {
                this.playAnimation(this.IMAGES_WALKING);
                this.moveLeft();
            } else {
                this.removeFromMap();
            }
        }, 500);
    }

    /**
     * Removes the chicken from the map.
     */
    removeFromMap() {
        setTimeout(() => {
            this.x = -1000;
            clearInterval(playDeathAnimation); // Beende das Intervall, wenn setTimeout ausgeführt wird
        }, 300);

        let playDeathAnimation = setInterval(() => {
            this.playAnimation(this.IMAGES_DEATH);
            if (!this.mute)
                this.chicken_sound.play();
        }, 10);
    }
}
