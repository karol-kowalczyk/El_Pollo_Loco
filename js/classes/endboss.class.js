/**
 * Represents an end boss.
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
         * Constructs a new Endboss object.
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
     * Initiates the animation of the end boss.
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
     * Animates the end boss when hurt.
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
     * Animates the end boss when dead.
     */
    animateDead() {
        this.playAnimation(this.IMAGES_DEAD);
    }

    /**
     * Animates the end boss walking.
     */
    animateWalking() {
        this.playAnimation(this.IMAGES_WALKING);
    }

    /**
     * Animates the end boss when dead and stops its movement.
     */
    animateDeadBossChicken() {
        this.playAnimation(this.IMAGES_DEAD);
        this.speed = 0;
    }

    /**
     * Displays the win image and restart button after winning the game.
     */
    endscreenWin() {
        setTimeout(() => {
            this.displayWinImage();
            this.showRestartButton();
            this.toStartScreen();
        }, 1000);
    }

    /**
     * Displays the win image.
     */
    displayWinImage() {
        let img = document.getElementById('start-screen');
        img.src = '../El_Pollo_Loco/img_pollo_locco/img/9_intro_outro_screens/game_over/you_won.png';
        img.classList.remove('d-none');
        img.classList.add('opacity');
    }

    /**
     * Shows the restart button.
     */
    showRestartButton() {
        let restartBtn = document.getElementById('restart-button');
        restartBtn.classList.remove('d-none');
    }
}  
