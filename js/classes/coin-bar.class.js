class CoinBar extends DrawableObject {

    IMAGES_COINBAR = [
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINBAR);
        this.height = 64;
        this.width = 190;
        this.x = 10;
        this.y = 35;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_COINBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage >= 80) {
            return 1;
        } else if (this.percentage >= 60) {
            return 2;
        } else if (this.percentage >= 40) {
            return 3;
        } else if (this.percentage >= 20) {
            return 4;
        } else {
            return 5;
        }
    }
}