class Heart extends DrawableObject {

    y = 10;
    width = 100;
    height = 100;
    IMAGES_HEALTH = [
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/3_icons/icon_health.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/3_icons/icon_health_2.png'
    ];
    

    constructor() {
        super().loadImage(this.IMAGES_HEALTH[0]);
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 1200 + Math.random() * 10000; // hier wird die variable x, also die Position im Graphen auf der x-achse neu zugeteilt, und mit einem random wert erstellt
        // damit jedes Huhn, von den dreien die generiert werden, anders positioniert werden.
        this.y = this.y * Math.random() * 2;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_HEALTH); // Calls the method from the superclass
        }, 1000 / 2);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        
    }

}