/**
 * Represents a character in the game.
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

    jump_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/jump-pepe.mp3');
    hurtSound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/main_character_hurt.mp3');
    walking_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/walking.mp3');
    losing_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/lost_game.mp3');

    world;

    /**
     * Represents a character in the game.
     * @constructor
     */
    constructor() {
        /**
         * Loads initial images and sets up character.
         */
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.endbossInstance = new Endboss();
        this.lastKeyPressTime = Date.now();
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_SNORING);
        this.checkCharacterIdle();
        this.applyGravity();
        this.animate();
    }

    /**
   * Animates the character's movements and actions.
   */
    animate() {
        setInterval(() => {
            this.handleEndgame();
            this.handleAnimations();
        }, 100);

        setInterval(() => {
            this.handleWalking();
            this.handleJumping();
            this.handleCamera();
        }, 1000 / 60);
    }

    /**
     * Stops a running interval.
     * @param {number} intervalId - The ID of the interval to stop.
     * @returns {void}
     */
    stopInterval(intervalId) {
        clearInterval(intervalId);
    }

    /**
     * Handles character walking behavior.
     * @returns {void}
     */
    handleWalking() {
        if (this.world.keyboard.RIGHT && this.x < this.endbossInstance.x) {
            this.walkingRight();
        }

        if (this.world.keyboard.LEFT && this.x > 0) {
            this.walkingLeft();
        }
    }

    /**
     * Plays walking sound, if main character is walking/=.
     */
    walkingSound() {
        this.walking_sound.play();
    }

    /**
     * Moves the character to the left and triggers associated actions.
     * @returns {void}
     */
    walkingLeft() {
        this.otherDirection = true;
        this.moveLeft();
        if (!this.mute) {
            this.walkingSound();
        }
        if (this.mute) {
            this.snoring_sound.pause();
        }
    }

    /**
     * Moves the character to the right and triggers associated actions.
     * @returns {void}
     */
    walkingRight() {
        this.otherDirection = false;
        this.moveRight();
        if (!this.mute && !this.lose) {
            this.walkingSound();
        }
        if (this.mute) {
            this.snoring_sound.pause();
        }
    }

    /**
     * Handles character jumping behavior.
     */
    handleJumping() {
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
        }
    }

    /**
     * Handles endgame condition.
     */
    handleEndgame() {
        if (this.x >= 6400) {
            this.meetEndBoss = true;
            this.world.endbossBar.isVisible = true;
        }
        if (this.meetEndBoss) {
            if (this.mute == false && !this.lose) {
                if (this.won == false) {
                    this.endgame_sound.play();
                    loadingScreenMusic.pause();
                } else {
                    this.snoring_sound.pause();
                }

            } else {
                this.endgame_sound.pause();
                this.main_music.src = '../El_Pollo_Loco/img_pollo_locco/img/audio/nothing.mp3';
            }
        }
        else {
            this.endgame_sound.pause();
            this.main_music.src = '../El_Pollo_Loco/img_pollo_locco/img/audio/nothing.mp3';
        }
    }

    /**
     * Handles camera movement.
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

    /**
     * Handles dead animation state.
     */
    handleDeadAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
            clearInterval(this.animationInterval);
            clearInterval(this.walkingInterval);
            this.endscreen();
        }, 1500);
    }

    /**
     * Handles hurt animation state.
     */
    handleHurtAnimation() {
        this.playAnimation(this.IMAGES_HURT);
    }

    /**
     * Handles walking animation state.
     */
    handleWalkingAnimation() {
        this.isWalking = true;
        this.playAnimation(this.IMAGES_WALKING);
    }

    /**
     * Handles jumping animation state.
     */
    handleJumpingAnimation() {
        this.playAnimation(this.IMAGES_JUMPING);
    }

    /**
     * Handles standing animation state.
     */
    handleStandingAnimation() {
        this.playAnimation(this.IMAGE_STANDING);
        this.checkCharacterIdle();
    }

    /**
     * Checks if character is in walking condition.
     * @returns {boolean} Whether the character is walking.
     */
    isWalkingCondition() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
    }

    /**
     * Checks if character is idle and plays snoring animation.
     */
    checkCharacterIdle() {
        const currentTime = Date.now();
        if (!this.isHurt() && !this.isDead() && currentTime - 3000 - this.lastKeyPressTime >= 2500) {
            this.playAnimation(this.IMAGES_SNORING);
            if (this.mute == false && !this.lose) {
                this.snoring_sound.play();
                setTimeout(() => {
                    this.snoring_sound.src = '../El_Pollo_Loco/img_pollo_locco/img/audio/nothing.mp3';
                }, 20000)
            } 
        }
    }

    /**
     * Moves character right and updates last key press time.
     */
    moveRight() {
        super.moveRight();
        this.lastKeyPressTime = Date.now();
    }

    /**
     * Moves character left and updates last key press time.
     */
    moveLeft() {
        super.moveLeft();
        this.lastKeyPressTime = Date.now();
    }

    /**
     * Displays specified elements by removing 'd-none' class.
     * @param {Element} img - The image element to display.
     * @param {Element} restartBtn - The restart button element to display.
     */
    addDisplayNone(img, restartBtn) {
        img.classList.remove('d-none');
        restartBtn.classList.remove('d-none');
    }

    /**
     * Extracts file name from a given path.
     * @param {string} path - The file path.
     * @returns {string} The extracted file name.
     */
    extractFileNameFromPath(path) {
        let pathParts = path.split('/');
        return pathParts[pathParts.length - 1];
    }

    /**
    * Handles the character being hit, plays hurt sound, and updates energy.
    */
    hit() {
        this.energy -= 10;
        this.hitVar = true;
        this.checkLasthit();
        setTimeout(() => {
            this.hitVar = false;
        }, 1200)
    }

    /**
     * Checks if the character has been hit recently and updates last hit time.
     * If character's energy is depleted, stops hurt sound and sets energy to 0.
     * @returns {void}
     */
    checkLasthit() {
        if (this.mute == false && !this.lose) {
            this.hurtSound.play();
        }
        if (this.energy <= 0) {
            if (this.mute === false) {
                this.hurtSound.pause();
            }
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
    * Makes character jump and updates last key press time. Plays jump sound, if boolean is false;
    */
    jump() {
        if (this.hitVar == false) {
            super.jump();
            this.lastKeyPressTime = Date.now();

            if (this.mute == false && this.lose == false) {
                this.jump_sound.play();
            }
        }
    }

    /**
    * Handles a big hit, plays hurt sound, and updates energy.
    */
    bigHit() {
        this.energy -= 20;
        if (this.mute == false) {
            this.hurtSound.play();
        }
        if (this.energy <= 0) {
            this.hurtSound.pause();
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
} 
