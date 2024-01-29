class Bottle extends MoveableObject {

    width = 100;
    height = 100;
    IMAGES_BOTTLES = [
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_BOTTLES[0]);
        this.x = 200 + Math.random() * 10000; 
        this.y = 320 + Math.random() * -10;
        this.loadImages(this.IMAGES_BOTTLES);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLES); // Call the method from the superclass
        }, 1000 / 2);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    removeFromMap() {
        this.x = -1000;
    }
}