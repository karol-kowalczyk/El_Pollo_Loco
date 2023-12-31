class Heart extends MoveableObject {

    y = 100;
    width = 100;
    height = 100;
    IMAGES_HEALTH =
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/3_icons/icon_health.png';


    constructor() {
        super().loadImage(this.IMAGES_HEALTH);

        this.x = 1200 + Math.random() * 10000; // hier wird die variable x, also die Position im Graphen auf der x-achse neu zugeteilt, und mit einem random wert erstellt
        // damit jedes Huhn, von den dreien die generiert werden, anders positioniert werden.
        this.y = this.y * Math.random() * 2;

    }
}