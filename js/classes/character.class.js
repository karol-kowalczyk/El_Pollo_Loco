class Character extends MoveableObject {

    width = 200;
    height = 300;
    speed = 10;
    speedY = 0.1;
    y = -180;

    IMAGES_WALKING = [
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
    ];

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

    IMAGE_STANDING = ['../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-31.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-31.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-31.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-31.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-31.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-31.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-31.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/3_jump/J-31.png'
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

    IMAGES_SNORING = [
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/1_idle/idle/I-10.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-11.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-12.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-13.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-14.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-15.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-16.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-17.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-18.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-19.png',
        '../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-20.png',
    ]

    world;
    constructor() {
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-21.png'); 
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);

        this.endbossInstance = new Endboss();

        this.lastKeyPressTime = Date.now();
        setInterval(() => {
            this.checkCharacterIdle();
        }, 1000);

        this.isEndbossWalking;
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_SNORING);
        this.applyGravity();
        this.animate();
    }

    animate() {
        let walkingInterval;
        let animationInterval;

        walkingInterval = setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.endbossInstance.x) {
                this.otherDirection = false;
                this.moveRight();
                this.walking_sound.play();
                this.snoring_sound.pause();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.otherDirection = true;
                this.moveLeft();
                this.walking_sound.play();
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }

            if (this.x >= 6400) {
                this.endgame();
                this.world.endbossBar.isVisible = true;
            }
            
            this.world.camera_x = - this.x + 100;

        }, 1000 / 60);

        animationInterval = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(() => {
                    clearInterval(animationInterval);
                    clearInterval(walkingInterval);
                    this.endscreen();
                }, 500);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                {
                    this.isWalking = true;
                    this.playAnimation(this.IMAGES_WALKING);
                }
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else if (!this.isAboveGround() && !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGE_STANDING)
                this.checkCharacterIdle();
            }

        }, 100);
    }

    checkCharacterIdle() {
        const currentTime = Date.now();
        if (!this.isHurt() && !this.isDead() && currentTime - this.lastKeyPressTime >= 2500) {
            this.playAnimation(this.IMAGES_SNORING);
            this.snoring_sound.play();
        }
    }

    moveRight() {
        super.moveRight();
        this.lastKeyPressTime = Date.now();
    }

    moveLeft() {
        super.moveLeft();
        this.lastKeyPressTime = Date.now();
    }

    jump() {
        super.jump();
        this.lastKeyPressTime = Date.now();
    }

    endgame() {
        this.endgame_sound.play();
    }


    endscreen() {
        let img = document.getElementById('start-screen-img');
        img.src = '../El_Pollo_Loco/img_pollo_locco/img/9_intro_outro_screens/game_over/game over.png';
        img.classList.remove('d-none');
        this.playLosingSound();
        let restartBtn = document.getElementById('restart-button');
        restartBtn.classList.remove('d-none');
        this.toStartScreen();
    }

    extractFileNameFromPath(path) {
        let pathParts = path.split('/');
        return pathParts[pathParts.length - 1];
    }
} 
