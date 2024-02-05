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
    isEndbossWalking = false;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: -100
    };

    constructor() {
        super();
        this.enemyJumped = false;
        this.jumpTimeout = null;
        this.checkSound();
    }

    win_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/game-won.wav');
    collectCoinSound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/super-mario-coin-sound.mp3');
    collectBottleSound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/pick_bottle.mp3');
    hurtSound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/main_character_hurt.mp3');
    walking_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/walking.mp3');
    snoring_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/Cartoon_Snoring_SOUND_EFFECT.mp3');
    endgame_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/End_Boss_Music.mp3');
    lost_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/lost_game.mp3');
    bossHurtSound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/enemy_hurt_sound.mp3');

    /**
     * Toggles the volume of various audio elements in the game.
     * If the sound is currently muted, it unmutes it and sets the volume to 0.5 for all audio elements.
     * If the sound is currently unmuted, it mutes it by setting the volume to 0.0 for all audio elements.
     */
    toggleVolume() {
        const soundIcon = document.getElementById('sound-icon');
        const audioElements = [this.walking_sound, this.snoring_sound, this.endgame_sound, this.lost_sound, this.collectCoinSound,
        this.collectBottleSound, this.hurtSound, this.bossHurtSound];

        if (soundIcon.src.includes('speaker-mute.png')) {
            audioElements.forEach(audio => {
                audio.volume = 0.0;
            });
        } else {
            audioElements.forEach(audio => {
                audio.volume = 0.5;
            });
        }
    }

    /**
     * Controls the playing of the start screen music based on the provided boolean value.
     * If the boolean value is true, the start screen music is played; otherwise, it is paused.
     * @param {boolean} isStartScreenMusicPlaying - Indicates whether the start screen music should be playing.
     */
    startScreenMusicPlaying(isStartScreenMusicPlaying) {
        let backgroundMusicInterval = setInterval(() => {
            if (isStartScreenMusicPlaying) {
                loadingScreenMusic.play();
            } else {
                loadingScreenMusic.pause();
            }

        }, 1000 / 60);
    }

    /**
     * Plays the losing sound effect by pausing the endgame sound and playing the lost sound.
     */
    playLosingSound() {
        this.endgame_sound.pause();
        this.lost_sound.play();
    }


    /**
     * Periodically toggles the volume of various audio elements in the game.
     * This function is called repeatedly at an interval of approximately 60 times per second (60 FPS).
     * It internally calls the toggleVolume method to control the volume state.
     */
    checkSound() {
        setInterval(() => {
            this.toggleVolume();
        }, 1000 / 60);
    }

    /**
     * Plays the sound effect for collecting coins.
     * This function triggers the playing of the collect coin sound effect.
     */
    playCollectCoinSound() {
        this.collectCoinSound.play();
    }

    /**
     * Plays the sound effect for collecting bottles.
     * This function triggers the playing of the collect bottle sound effect.
     */
    playCollectBottleSound() {
        this.collectBottleSound.play();
    }

    /**
     * Applies gravity to the object, causing it to fall downwards.
     * Gravity is simulated by decrementing the vertical position (y-coordinate) of the object and adjusting its vertical speed accordingly.
     * This function is called repeatedly at an interval of approximately 25 times per second (25 FPS).
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
     * Determines whether the object is above the ground level.
     * If the object is an instance of ThrowableObject, it's always considered above the ground.
     * Otherwise, it checks whether the object's vertical position (y-coordinate) is less than 120 pixels.
     * @returns {boolean} - True if the object is above the ground, false otherwise.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 120;
        }
    }

    /**
     * Determines whether this object is colliding with another movable object.
     * Collision detection is based on the positions and dimensions of the objects along with their offsets.
     * @param {MovableObject} mo - The movable object to check for collision with.
     * @returns {boolean} - True if a collision is detected, false otherwise.
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * Determines whether this object is colliding with an item.
     * Collision detection is based on the positions and dimensions of the objects with fixed offsets.
     * @param {Item} item - The item to check for collision with.
     * @returns {boolean} - True if a collision is detected, false otherwise.
     */
    isCollidingItems(item) {
        return this.x + this.width - 90 > item.x &&
            this.y + 30 + this.height - 90 > item.y + 30 &&
            this.x < item.x &&
            this.y + 30 < item.y + 30 + item.height - 90;
    }

    /**
     * Determines whether this object is colliding with a thrown item.
     * Collision detection is based on the positions and dimensions of the objects.
     * @param {ThrowableObject} mo - The thrown item to check for collision with.
     * @returns {boolean} - True if a collision is detected, false otherwise.
     */
    isCollidingThrownItems(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height;
    }

    /**
     * Increases the coin count by 20 and checks if it reaches the maximum value.
     * If the coin count is less than 100, it triggers the collection sound effect.
     */
    collectCoin() {
        this.coin += 20;
        if (this.coin >= 100) {
            this.coin = 100;
        }

        if (this.coin < 100) {
            this.playCollectCoinSound();
        }
    }

    /**
     * Increases the bottle count by 20 and checks if it reaches the maximum value.
     * If the bottle count is less than 100, it triggers the collection sound effect.
     */
    collectBottle() {
        this.bottle += 20;
        if (this.bottle >= 100) {
            this.bottle = 100;
        }
        if (this.bottle < 100) {
            this.playCollectBottleSound();
        }
    }

    /**
     * Decreases the bottle count by 20 and ensures it doesn't fall below zero.
     */
    throwBottles() {
        this.bottle -= 20;
        if (this.bottle <= 0) {
            this.bottle = 0;
        }
    }

    /**
     * Increases the energy level by 20 and checks if it reaches the maximum value.
     * If the energy level is less than 100, it doesn't trigger any additional action.
     */
    collectHeart() {
        this.energy += 20;
        if (this.energy >= 100) {
            this.energy = 100;
        }
    }

    /**
     * Decreases the energy level by 10, plays a hurt sound effect, and updates the last hit timestamp.
     * If the energy level drops to or below zero, it pauses the hurt sound and resets the energy to zero.
     */
    hit() {
        this.energy -= 10;
        this.hurtSound.play();
        if (this.energy <= 0) {
            this.hurtSound.pause();
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Decreases the energy level by 20, plays a hurt sound effect, and updates the last hit timestamp.
     * If the energy level drops to or below zero, it pauses the hurt sound and resets the energy to zero.
     */
    bigHit() {
        this.energy -= 20;
        this.hurtSound.play();
        if (this.energy <= 0) {
            this.hurtSound.pause();
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Decreases the boss's energy level by 25 and plays a boss hurt sound effect.
     * If the boss's energy level drops to or below zero, it sets the energy to zero.
     * Otherwise, it updates the last boss hit timestamp.
     */
    bossHit() {
        this.bossEnergy -= 25;
        this.bossHurtSound.play();
        if (this.bossEnergy <= 0) {
            this.bossEnergy = 0;
        } else {
            this.lastBossHit = new Date().getTime();
        }
    }

    /**
     * Increases the energy level by 20 and checks if it reaches the maximum value.
     * If the energy level is less than 100, it updates the last heal timestamp.
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
     * Checks if the player character was recently hit (within the last 0.5 seconds).
     * @returns {boolean} - True if the character was recently hit, false otherwise.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.5;
    }

    /**
     * Checks if the player character is dead (energy level equals zero).
     * @returns {boolean} - True if the character is dead, false otherwise.
     */
    isDead() {
        return this.energy === 0;
    }

    /**
     * Checks if the end boss is dead (boss energy level equals zero).
     * @returns {boolean} - True if the end boss is dead, false otherwise.
     */
    isEndbossDead() {
        return this.bossEnergy === 0;
    }

    /**
     * Plays the next frame of animation from the provided array of images.
     * @param {string[]} images - Array of image paths representing the animation frames.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Moves the character to the right by its speed value.
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Moves the character to the left by its speed value.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Makes the character jump if it hasn't already jumped.
     * Adjusts the character's vertical position, speed, and acceleration for the jump.
     * Sets a timeout to reset the enemyJumped flag after 800 milliseconds.
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
     * Reloads the page after a delay of 4000 milliseconds, effectively navigating to the start screen.
     */
    toStartScreen() {
        setTimeout(() => {
            location.reload();
        }, 4000)
    }
}