class Coins extends MoveableObject {

    y = 50;
    width = 200;
    height = 200;
    IMAGES_COINS = [
        '../El_Pollo_Loco/img_pollo_locco/img/8_coin/coin_1.png',
        '../El_Pollo_Loco/img_pollo_locco/img/8_coin/coin_2.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_COINS[0]);

        this.x = 100 + Math.random() * 10000; // hier wird die variable x, also die Position im Graphen auf der x-achse neu zugeteilt, und mit einem random wert erstellt
        // damit jedes Huhn, von den dreien die generiert werden, anders positioniert werden.
        this.y = this.y * Math.random() * 5;

    }
}