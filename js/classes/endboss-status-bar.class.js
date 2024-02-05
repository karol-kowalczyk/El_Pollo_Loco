/**
 * Represents a status bar for the end boss.
 * @extends DrawableObject
 */
class EndbossStatusBar extends DrawableObject {

    endboss = new Endboss();
    IMAGES = [
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue0.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue20.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue60.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue80.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue100.png',
    ];

    percentage = 100;
    isVisible = false;

    /**
         * Constructs a new EndbossStatusBar object.
         */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.height = 64;
        this.width = 190;
        this.x = 500;
        this.y = 0;
        this.setPercentage(100);
    }

    /**
     * Sets the percentage of the status bar.
     * @param {number} percentage - The percentage value to set.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Resolves the index of the image based on the current percentage.
     * @returns {number} - The index of the image.
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            this.endboss.endscreenWin();
            return 0;
        }
    }
}