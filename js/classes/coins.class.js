class Coins extends DrawableObject {

    y = 250;
    width = 200;
    height = 200;
    IMAGES_COINS = [
        '../El_Pollo_Loco/img_pollo_locco/img/8_coin/coin_1.png',
        '../El_Pollo_Loco/img_pollo_locco/img/8_coin/coin_2.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_COINS[0]);
        this.loadImages(this.IMAGES_COINS);
        this.x = 500 + Math.random() * 10000; 
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
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
