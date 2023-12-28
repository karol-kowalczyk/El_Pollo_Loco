class Cloud extends MoveableObject {
    y = 50;
    width = 500;
    height = 200;


    constructor() {
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/4_clouds/full.png');

        this.x = Math.random() * 500;
    }
}