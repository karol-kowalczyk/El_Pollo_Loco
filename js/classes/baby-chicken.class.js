/**
 * Represents a baby chicken object that inherits from MoveableObject.
 * @extends MoveableObject
 */
class BabyChicken extends MoveableObject {

    width = 80;
    height = 50;
    y = 360;
    isAnimating = true;
    offset = {
        top: -30,
        left: 0,
        right: 0,
        bottom: 0
    };

    IMAGES_WALKING = [
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGES_DEATH = [
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ]

    /**
     * Creates an instance of BabyChicken.
     */
    constructor() {
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEATH);
        this.x = 2000 + Math.random() * 7800;
        this.speed = 5 + Math.random() * 2;
        this.animate();
    }

    chicken_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/Chickens-sound-effect-.mp3');

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
     * Removes the chicken from the map.
     */
    removeFromMap() {
        setTimeout(() => {
            this.x = -1000;
            clearInterval(playDeathAnimation); // Beende das Intervall, wenn setTimeout ausgeführt wird
        }, 400);

        let playDeathAnimation = setInterval(() => {
            this.playAnimation(this.IMAGES_DEATH);
            if (!this.mute)
                this.chicken_sound.play();
        }, 20);
    }
}