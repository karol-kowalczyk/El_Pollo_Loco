class BabyChicken extends MoveableObject {

    width = 80;
    height = 50;
    y = 360;
    isAnimating = true;

    IMAGES_WALKING = [
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGES_DEATH = [
        '../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
    ]

    constructor() {
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEATH);


        this.x = 3000 + Math.random() * 6000; // hier wird die variable x, also die Position im Graphen auf der x-achse neu zugeteilt, und mit einem random wert erstellt
        // damit jedes Huhn, von den dreien die generiert werden, anders positioniert werden.
        this.speed = 10 + Math.random() * 2;


        this.animate();
    }

    animate() {

        setInterval(() => {

            if (this.isAnimating) {
                this.playAnimation(this.IMAGES_WALKING);
                this.moveLeft();
            } else {
                this.removeFromMap();
            }

        }, 1000);
    }

    removeFromMap() {
        // Animation stoppen
        // `this.x` nach 3 Sekunden setzen
        setTimeout(() => {
            this.x = -1000;
        }, 900);

        // `this.playAnimation(this.IMAGES_DEATH)` nach weiteren 3 Sekunden ausführen
        setTimeout(() => {
            this.playAnimation(this.IMAGES_DEATH);
        }, 400); // 3000 Millisekunden Verzögerung isekunden Verzögerung für this.playAnimation(this.IMAGES_DEATH)

        // Hit- und isHurt-Funktionen deaktivieren
        // this.hit = function() { return false; }; // Leere Funktion
        // this.isHurt = function() { return false; }; // Immer false zurückgeben
    }

}