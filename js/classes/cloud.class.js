class Cloud extends MoveableObject {
    y = 50;
    width = 500;
    height = 200;

    IMAGES_CLOUDS = [
        '../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/4_clouds/full.png',
        '../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/4_clouds/full.png',
        '../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/4_clouds/full.png',
        '../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/4_clouds/full.png',
        '../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/4_clouds/full.png'
    ];
    constructor() { // constructor wird sofort aufgerufen
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/4_clouds/full.png');
        this.loadImages(this.IMAGES_CLOUDS);

        this.x = 200 + Math.random() * 0.9;
        this.animate();
    }

    animate() { // jedes mal wenn sich die seite neu laed (spater wenn sich die Objekte bewegen), wird die Position der Wolke veraendert.
        this.moveLeft();
        
    }

  
}