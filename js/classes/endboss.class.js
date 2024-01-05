class Endboss extends MoveableObject {
    height = 450;
    width = 450;
    y = 0;
    isVisible = false;
    isEndbossWalking = false;

    IMAGES_LOOKING = [
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_WALKING = [
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G2.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G3.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_LOOKING[0]);
        this.loadImages(this.IMAGES_LOOKING);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 6800;
        this.speed = 0.15 + Math.random() * 2;
        setInterval(() => {
        if(this.isEndbossWalking == true) {
            this.animate();
        }
    }, 1000/60);
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);

        }, 300);

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);


        setInterval(() => {
            this.playAnimation(this.IMAGES_LOOKING);
        }, 1000);

    }
}