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
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ]

    constructor() {
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEATH);

        this.x = 2700 + Math.random() * 8000;
        this.speed = 25 + Math.random() * 2;
        this.animate();
    }

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

    removeFromMap() {
        setTimeout(() => {
            this.x = -1000;
        }, 800);

        setTimeout(() => {
            this.playAnimation(this.IMAGES_DEATH);
        }, 400); 
    }
}