/**
 * Represents the main character in the game.
 * @extends MoveableObject
 */
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

    /**
     * Initializes the main character in the game.
     * Loads initial images, sets up intervals for animation and character controls,
     * applies gravity, and starts animation.
     */
    constructor() {
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.endbossInstance = new Endboss();
        this.lastKeyPressTime = Date.now();
        setInterval(() => {
            this.checkCharacterIdle();
        }, 1000);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_SNORING);
        this.applyGravity();
        this.animate();
    }

    /**
     * Initiates animation loops for character movement and animations.
     */
    animate() {
        let walkingInterval;
        let animationInterval;

        const startWalkingInterval = () => {
            walkingInterval = setInterval(() => {
                this.handleWalking();
                this.handleJumping();
                this.handleEndgame();
                this.handleCamera();
            }, 1000 / 60);
        };

        const startAnimationInterval = () => {
            animationInterval = setInterval(() => {
                this.handleAnimations();
            }, 100);
        };

        startWalkingInterval();
        startAnimationInterval();
    }

    /**
     * Handles character movement based on user input.
     */
    handleWalking() {
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
    }

    /**
     * Handles character jumping based on user input.
     */
    handleJumping() {
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
        }
    }

    /**
     * Handles endgame conditions for the character.
     */
    handleEndgame() {
        if (this.x >= 6400) {
            this.endgame();
            this.world.endbossBar.isVisible = true;
        }
    }

    /**
     * Handles camera movement based on character position.
     */
    handleCamera() {
        this.world.camera_x = - this.x + 100;
    }

    /**
     * Handles character animations based on current state.
     */
    handleAnimations() {
        if (this.isDead()) {
            this.handleDeadAnimation();
        } else if (this.isHurt()) {
            this.handleHurtAnimation();
        } else if (this.isWalkingCondition()) {
            this.handleWalkingAnimation();
        } else if (this.isAboveGround()) {
            this.handleJumpingAnimation();
        } else {
            this.handleStandingAnimation();
        }
    }

    handleDeadAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
            clearInterval(this.animationInterval);
            clearInterval(this.walkingInterval);
            this.endscreen();
        }, 500);
    }

    /**
     * Handles the animation when the character is dead.
     * Plays the death animation and triggers endscreen after a delay.
     */
    handleDeadAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
            clearInterval(this.animationInterval);
            clearInterval(this.walkingInterval);
            this.endscreen();
        }, 500);
    }

    /**
     * Handles the animation when the character is hurt.
     * Plays the hurt animation.
     */
    handleHurtAnimation() {
        this.playAnimation(this.IMAGES_HURT);
    }

    /**
     * Handles the animation when the character is walking.
     * Plays the walking animation.
     */
    handleWalkingAnimation() {
        this.isWalking = true;
        this.playAnimation(this.IMAGES_WALKING);
    }

    /**
     * Handles the animation when the character is jumping.
     * Plays the jumping animation.
     */
    handleJumpingAnimation() {
        this.playAnimation(this.IMAGES_JUMPING);
    }

    /**
     * Handles the animation when the character is standing idle.
     * Plays the standing animation and checks for character idleness.
     */
    handleStandingAnimation() {
        this.playAnimation(this.IMAGE_STANDING);
        this.checkCharacterIdle();
    }

    /**
     * Checks if the character is currently walking.
     * @returns {boolean} True if the character is walking, otherwise false.
     */
    isWalkingCondition() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
    }

    /**
     * Checks the character's idleness and plays snoring animation if idle.
     */
    checkCharacterIdle() {
        const currentTime = Date.now();
        if (!this.isHurt() && !this.isDead() && currentTime - this.lastKeyPressTime >= 2500) {
            this.playAnimation(this.IMAGES_SNORING);
            this.snoring_sound.play();
        }
    }

    /**
     * Overrides the moveRight method to update the last key press time.
     */
    moveRight() {
        super.moveRight();
        this.lastKeyPressTime = Date.now();
    }

    /**
     * Overrides the moveLeft method to update the last key press time.
     */
    moveLeft() {
        super.moveLeft();
        this.lastKeyPressTime = Date.now();
    }

    /**
     * Overrides the jump method to update the last key press time.
     */
    jump() {
        super.jump();
        this.lastKeyPressTime = Date.now();
    }

    /**
     * Plays the endgame sound effect.
     */
    endgame() {
        this.endgame_sound.play();
    }

    /**
     * Sets up the endscreen with appropriate images and sounds.
     */
    endscreen() {
        let img = document.getElementById('start-screen');
        let restartBtn = document.getElementById('restart-button');
        img.src = '../El_Pollo_Loco/img_pollo_locco/img/9_intro_outro_screens/game_over/game over.png';

        this.addDisplayNone(img, restartBtn);
        this.playLosingSound();
        this.toStartScreen();
    }

    /**
     * Adds the 'd-none' class to hide elements.
     * @param {HTMLElement} img - The image element.
     * @param {HTMLElement} restartBtn - The restart button element.
     */
    addDisplayNone(img, restartBtn) {
        img.classList.remove('d-none');
        restartBtn.classList.remove('d-none');
    }

    /**
     * Extracts the file name from a given path.
     * @param {string} path - The file path.
     * @returns {string} The extracted file name.
     */
    extractFileNameFromPath(path) {
        let pathParts = path.split('/');
        return pathParts[pathParts.length - 1];
    }
} 
