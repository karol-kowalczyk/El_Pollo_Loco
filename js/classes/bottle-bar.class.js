/**
 * Represents a bottle bar object that extends a drawable object.
 * @extends DrawableObject
 */
class BottleBar extends DrawableObject {
    
    IMAGES_BOTTLEBAR = [
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png'
    ];

    percentage = 0;

    /**
     * Creates an instance of BottleBar.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLEBAR);
        this.height = 64;
        this.width = 190;
        this.x = 15;
        this.y = 90;
        this.setPercentage(0);
    }

    /**
     * Sets the percentage of the bottle bar.
     * @param {number} percentage - The percentage value to set.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_BOTTLEBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Resolves the index of the image based on the current percentage.
     * @returns {number} The index of the image in the IMAGES_BOTTLEBAR array.
     */
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

    /**
     * Gets the current percentage of the bottle bar.
     * @returns {number} The current percentage value.
     */
    getPercentage() {
        return this.percentage;
    }
}
