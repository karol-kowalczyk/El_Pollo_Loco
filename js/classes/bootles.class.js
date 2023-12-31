class Bottle extends MoveableObject {
    width = 100;
    height = 100;
    IMAGES_BOTTLES = [
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        '../El_Pollo_Loco/img_pollo_locco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_BOTTLES[0]);

        this.x = 200 + Math.random() * 10000; // hier wird die variable x, also die Position im Graphen auf der x-achse neu zugeteilt, und mit einem random wert erstellt
        // damit jedes Huhn, von den dreien die generiert werden, anders positioniert werden.
        this.y = 320 + Math.random() * -10;

    }
}