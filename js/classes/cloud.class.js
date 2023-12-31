class Cloud extends MoveableObject {
    y = 0;
    width = 500;
    height = 200;

    IMAGES_CLOUDS = [
        '../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/4_clouds/1.png',
        '../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/4_clouds/2.png',
        '../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/4_clouds/full.png'
    ];

    
    constructor() { // constructor wird sofort aufgerufen
        super().loadImage(this.IMAGES_CLOUDS[1]);
        // this.loadImages(this.IMAGES_CLOUDS);

        this.x = -1000 + Math.random() * 5000;
        this.animate();
    }

    animate() { 
        this.moveLeft();
        
    }
} 0