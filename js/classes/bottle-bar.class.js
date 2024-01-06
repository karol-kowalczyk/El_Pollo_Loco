class BottleBar extends DrawableObject {

    IMAGES_BOTTLEBAR = [
    
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',    
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',    
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',    
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',   
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',     
        '../El_Pollo_Loco/img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png'   
    ]

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLEBAR);
        this.height = 64;
        this.width = 190;
        this.x = 15;
        this.y = 90;
        this.setPercentage(0);
    }

    // hier nochmal schauen, ob alles so auch passt und ob alles richtig ist

    // setPercentage(50)
    setPercentage(percentage) {
        this.percentage = percentage; // => 0 und 5 ermitteln
        let path = this.IMAGES_BOTTLEBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage > 80) {
            return 1;
        } else if (this.percentage > 60) {
            return 2;
        } else if (this.percentage > 40) {
            return 3;
        } else if (this.percentage > 20) {
            return 4;
        } else {
            return 5;
        }
    }
}