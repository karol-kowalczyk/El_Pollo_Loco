class Character extends MoveableObject { // classe Character erbt Eigenschaften von der UeberKlasse MoveableObject 

    width = 200; // die Breite wird diesem Object neu zugewiesen. Also wurde diese zwar von der moveable-object.class.js 
    height = 300; // Classe uebernommen aber ueberschrieben da diese anscheinen nicht passt
    speed = 10;

    IMAGES_WALKING =
        [
            '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
            '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
            '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
            '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
            '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
            '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
        ];   // ist ein Array, deswegen nur eckige Klammern und kein JSON, wo wir Runde-Klammern haetten.

    world;
    walking_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/walking.mp3');;

    constructor() { // initialisiert wird automatisch aufgerufen, deswegen konstructor, und dieser legt fest, wie die Klasse aussehen und funktionieren soll
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-21.png'); // mit super() wird von der UeberClasse geerbt und so
        // kann die function loadImage ausgefuehrt und uebernommen werden. In der moveable-object.class.js wurde die function erstellt mit dem Parameter path, welcher hier erstellt wird.
        this.loadImages(this.IMAGES_WALKING);


        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = - this.x + 100;
        }, 1000 / 60);

        setInterval(() => {

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                // walk animation
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 50);
    }

    jump() {

    }
}