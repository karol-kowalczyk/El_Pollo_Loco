/**
 * Represents the status bar for the end boss in the game.
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
     * Constructs an instance of the EndbossStatusBar class.
     * Loads images, sets initial dimensions and position, and initializes the percentage.
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
     * Sets the percentage of the end boss's health and updates the image accordingly.
     * @param {number} percentage - The percentage of the end boss's health.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Resolves the index of the image in the IMAGES array based on the current health percentage.
     * @returns {number} - The index of the image in the IMAGES array.
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
