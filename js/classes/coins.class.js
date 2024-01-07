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

        this.x = 150 + Math.random() * 1000; // hier wird die variable x, also die Position im Graphen auf der x-achse neu zugeteilt, und mit einem random wert erstellt
        // damit jedes Huhn, von den dreien die generiert werden, anders positioniert werden.
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS); // Calls the method from the superclass
        }, 1000 / 2);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    replaceX() {
        this.x = -1000;
    }
}
