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
    bossHurtSound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/enemy_hurt_sound.mp3');

    offset = {
        top: 0,
        left: -50,
        right: 40,
        bottom: -20
    };

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
    * Handles a hit on the boss, plays boss hurt sound, and updates boss energy.
    */
    bossHit() {
        this.bossEnergy -= 25;
        if (this.mute == false) {
            this.bossHurtSound.play();
        }
        if (this.bossEnergy <= 0) {
            this.bossEnergy = 0;
        } else {
            this.lastBossHit = new Date().getTime();
        }
    }
}  
