/**
 * Represents an end boss character in the game.
 * @extends MoveableObject
 */

class Endboss extends MoveableObject {
    height = 450;
    width = 450;
    y = 0;
    isEndbossHurt = false;
    hitCount = -1;
    intervalRef;

    IMAGES_LOOKING = [
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_WALKING = [
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G2.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G3.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_DEAD = [
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    IMAGES_BOSS_HURT = [
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G21.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G22.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    /**
     * Constructs an instance of the EndbossChicken class.
     * Loads initial images and sets initial properties such as position and speed.
     * Initiates the animation loop for the end boss.
     */
    constructor() {
        super().loadImage(this.IMAGES_LOOKING[0]);
        this.loadImages(this.IMAGES_LOOKING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_BOSS_HURT);
        this.x = 7100;
        this.speed = 1.5;
        this.animate();
    }

    /**
     * Initiates the animation loop for the end boss.
     * Checks the state of the boss (walking, hurt, dead) and plays the appropriate animation.
     */
    animate() {
        this.intervalRef = setInterval(() => {
            if (this.isEndbossWalking == true) {
                this.moveLeft();
                if (this.isEndbossHurt == true) {
                    this.animateHurt();
                } else if (this.isEndbossWalking == false) {
                    this.animateDead();
                } else {
                    this.animateWalking();
                }
            }
        }, 125)
    }

    /**
     * Plays the animation for the end boss being hurt.
     * Updates the animation, hit count, and speed.
     * Sets a timeout to reset the hurt state and triggers the dead animation if hit count exceeds 12.
     */
    animateHurt() {
        this.playAnimation(this.IMAGES_BOSS_HURT);
        this.hitCount = this.hitCount + 0.5;
        this.speed += 1;
        setTimeout(() => {
            this.isEndbossHurt = false;
            if (this.hitCount >= 12) {
                clearInterval(this.intervalRef);
                this.animateDeadBossChicken();
            }
        }, 800);
    }

    /**
     * Plays the animation for the end boss being dead.
     */
    animateDead() {
        this.playAnimation(this.IMAGES_DEAD);
    }

    /**
     * Plays the animation for the end boss walking.
     */
    animateWalking() {
        this.playAnimation(this.IMAGES_WALKING);
    }

    /**
     * Plays the animation for the end boss being dead as a boss chicken.
     * Resets the speed to 0.
     */
    animateDeadBossChicken() {
        this.playAnimation(this.IMAGES_DEAD);
        this.speed = 0;
    }

    /**
     * Displays the win image on the end screen after a delay of 1000 milliseconds.
     * Shows the restart button and navigates to the start screen.
     */
    endscreenWin() {
        setTimeout(() => {
            this.displayWinImage();
            this.showRestartButton();
            this.toStartScreen();
        }, 1000);
    }

    /**
     * Displays the win image on the end screen.
     */
    displayWinImage() {
        let img = document.getElementById('start-screen');
        img.src = '../El_Pollo_Loco/img_pollo_locco/img/9_intro_outro_screens/game_over/you_won.png';
        img.classList.remove('d-none');
        img.classList.add('opacity');
    }

    /**
     * Shows the restart button on the end screen.
     */
    showRestartButton() {
        let restartBtn = document.getElementById('restart-button');
        restartBtn.classList.remove('d-none');
    }
}  
