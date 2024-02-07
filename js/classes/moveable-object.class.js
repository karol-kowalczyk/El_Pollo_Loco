/**
 * Represents a movable object in the game.
 * @extends DrawableObject
 */
class MoveableObject extends DrawableObject {
    speed = 2.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    energy = 100;
    bossEnergy = 100;
    lastHit = 0;
    lastBossHit = 0;
    lastHeal = 0;
    coin = 0;
    mute = true;
    iconClicked = 0;
    bottle = 0;
    hitVar = false;
    isEndbossWalking = false;
    win = false;
    main_music = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/Game-Music.mp3');
    world;
    soundIcon = document.getElementById('sound-icon');

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    /**
     * Constructs a new MoveableObject.
     */
    constructor() {
        super();
        this.enemyJumped = false;
        this.jumpTimeout = null;
        this.checkSound();
    }

    /**
     * Toggles the volume of multiple audio elements based on the state of the sound icon.
     */
    toggleVolume() {
        
        const audioElements = [this.main_music];

        if (this.soundIcon.src.includes('speaker-mute.png')) {
            audioElements.forEach(audio => {
                audio.volume = 0.0;
                this.mute = true;
            });
        } else {
            audioElements.forEach(audio => {
                audio.volume = 0.5;
                this.mute = false;
            });
        }
    }

    /**
     * Checks and toggles the volume periodically.
     */
    checkSound() {
        setInterval(() => {
            this.toggleVolume();
        }, 1000 / 60);
    }

    /**
     * Applies gravity to the character's vertical position.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Checks if the character is above the ground.
     * @returns {boolean} - Returns true if the character is above the ground, false otherwise.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 120;
        }
    }

    /**
     * Checks if the character is colliding with another movable object.
     * @param {MovableObject} mo - The movable object to check for collision.
     * @returns {boolean} - Returns true if there is a collision, false otherwise.
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * Checks if the character is colliding with an item.
     * @param {Item} item - The item to check for collision.
     * @returns {boolean} - Returns true if there is a collision, false otherwise.
     */
    isCollidingItems(item) {
        return this.x + this.width - 90 > item.x &&
            this.y + 30 + this.height - 90 > item.y + 30 &&
            this.x < item.x &&
            this.y + 30 < item.y + 30 + item.height - 90;
    }

    /**
     * Checks if the character is colliding with a thrown item.
     * @param {ThrownItem} mo - The thrown item to check for collision.
     * @returns {boolean} - Returns true if there is a collision, false otherwise.
     */
    isCollidingThrownItems(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height;
    }

    /**
     * Collects coins, plays collect coin sound, and updates the coin count.
     */
    collectCoin() {
        this.coin += 20;
        if (this.coin >= 100) {
            this.coin = 100;
        }
    }

    /**
     * Collects bottles, plays collect bottle sound, and updates the bottle count.
     */
    collectBottle() {
        this.bottle += 20;
        if (this.bottle >= 100) {
            this.bottle = 100;
        }
    }

    /**
     * Throws bottles, decreases bottle count, and ensures the bottle count does not go below zero.
     */
    throwBottles() {
        this.bottle -= 20;
        if (this.bottle <= 0) {
            this.bottle = 0;
        }
    }

    /**
     * Collects hearts, updates energy, and ensures energy does not exceed 100.
     */
    collectHeart() {
        this.energy += 20;
        if (this.energy >= 100) {
            this.energy = 100;
        }
    }

    /**
     * Handles contact with a life item, updates energy, and ensures energy does not exceed 100.
     */
    contactWithLifeItem() {
        this.energy += 20;
        if (this.energy >= 100) {
            this.energy = 100;
        } else {
            this.lastHeal = new Date().getTime();
        }
    }

    /**
     * Checks if the character is currently hurt based on the time elapsed since the last hit.
     * @returns {boolean} - Returns true if the character is currently hurt, false otherwise.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.5;
    }

    /**
     * Checks if the character is dead (energy is zero).
     * @returns {boolean} - Returns true if the character is dead, false otherwise.
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Checks if the end boss is dead (boss energy is zero).
     * @returns {boolean} - Returns true if the end boss is dead, false otherwise.
     */
    isEndbossDead() {
        return this.bossEnergy == 0;
    }

    /**
     * Plays animation by updating the character's image.
     * @param {string[]} images - Array of image paths for animation.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Moves the character to the right.
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Moves the character to the left.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Makes the character jump.
     */
    jump() {
        if (!this.enemyJumped) {
            this.speedY = 30;
            this.y = 120;
            this.acceleration = 2.5;
            this.enemyJumped = true;
            this.jumpTimeout = setTimeout(() => {
                this.enemyJumped = false;
            }, 800);
        }
    }

    /**
    * Makes the main character disappear by setting its x-coordinate to a value far off-screen.
    */
    mainCharacterDisappear() {
        world.character.x = -1000;
    }

    /**
    * Displays the win image and restart button after winning the game.
    */
    endscreenWin() {
        this.soundIcon.src = '../El_Pollo_Loco/img_pollo_locco/img/10_background/speaker-mute.png';
        setTimeout(() => {
            this.displayWinImage();
            this.showRestartButton();
            this.toStartScreen();
            loadingScreenMusic.pause();
            this.mainCharacterDisappear();
        }, 500);
    }

    /**
     * Displays the win image.
     */
    displayWinImage() {
        let img = document.getElementById('start-screen');
        img.src = '../El_Pollo_Loco/img_pollo_locco/img/9_intro_outro_screens/game_over/you_won.png';
        img.classList.remove('d-none');
    }

    /**
     * Shows the restart button.
     */
    showRestartButton() {
        let restartBtn = document.getElementById('restart-button');
        restartBtn.classList.remove('d-none');
    }

    /**
    * Redirects to the start screen after a delay.
    */
    toStartScreen() {
        setTimeout(() => {
            location.reload();
        }, 10000)
    }

    /**
    * Initiates end screen display.
    */
    endscreen() {
        let img = document.getElementById('start-screen');
        let restartBtn = document.getElementById('restart-button');
        this.mute = true;
        img.src = '../El_Pollo_Loco/img_pollo_locco/img/9_intro_outro_screens/game_over/game over.png';
        this.mainCharacterDisappear();
        this.addDisplayNone(img, restartBtn);
        this.playLosingSound();
        this.toStartScreen();
    }

    /**
     * Plays the losing sound by pausing the endgame sound and playing the losing sound.
     */
    playLosingSound() {
        loadingScreenMusic.pause();
        this.endgame_sound.pause();
        this.losing_sound.play();
    }
}