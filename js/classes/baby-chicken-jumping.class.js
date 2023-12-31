class BabyChickenJumping extends MoveableObject {

    acceleration = 100;
    width = 80;
    height = 50;
    y = 360; // 360 waeren die Kueken auf den Boden
    IMAGES_WALKING = [
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 2800 + Math.random() * 3000; // hier wird die variable x, also die Position im Graphen auf der x-achse neu zugeteilt, und mit einem random wert erstellt
        // damit jedes Huhn, von den dreien die generiert werden, anders positioniert werden.
        this.speed = 0.05 + Math.random() * 1;
        
        this.applyGravityBabyChicken();
        this.rejectGravityBabyChicken();
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
            
        }, 300);

        setInterval( () => {
            this.moveLeft();
        }, 1000/60);
    }

    applyGravityBabyChicken() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 10000 / 30);
    }

    rejectGravityBabyChicken() {
        setInterval(() => {
            if (this.y = 360) {
                this.y += this.speedY;
                this.speedY += this.acceleration;
            }
        }, 10000 / 15);
    }
}