class Character extends MoveableObject { // classe Character erbt Eigenschaften von der UeberKlasse MoveableObject 

    width = 200; // die Breite wird diesem Object neu zugewiesen. Also wurde diese zwar von der moveable-object.class.js 
    height = 300; // Classe uebernommen aber ueberschrieben da diese anscheinen nicht passt
    speed = 10;
    y = -180;

    IMAGES_WALKING = [
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
    ];   // ist ein Array, deswegen nur eckige Klammern und kein JSON, wo wir Runde-Klammern haetten.

    IMAGES_JUMPING = [
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-31.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-32.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-33.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-34.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-35.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-36.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-37.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-38.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_DEAD = [
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/5_dead/D-51.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/5_dead/D-52.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/5_dead/D-53.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/5_dead/D-54.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/5_dead/D-55.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/5_dead/D-56.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/5_dead/D-57.png'
    ];

    IMAGES_HURT = [
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/4_hurt/H-41.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/4_hurt/H-42.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/4_hurt/H-43.png'
    ]

    world;
    walking_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/walking.mp3');;

    constructor() { // initialisiert wird automatisch aufgerufen, deswegen konstructor, und dieser legt fest, wie die Klasse aussehen und funktionieren soll
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-21.png'); // mit super() wird von der UeberClasse geerbt und so
        // kann die function loadImage ausgefuehrt und uebernommen werden. In der moveable-object.class.js wurde die function erstellt mit dem Parameter path, welcher hier erstellt wird.
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {

            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.otherDirection = false;
                this.moveRight();
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.otherDirection = true; 
                this.moveLeft();
                this.walking_sound.play();
            }

            if(this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }

            this.world.camera_x = - this.x + 100;
        }, 1000 / 60);

        setInterval(() => {

            if(this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if(this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    // walk animation
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 50);
    }

}