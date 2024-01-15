class Endboss extends MoveableObject {
    height = 450;
    width = 450;
    y = 0;
    isVisible = false;
    isEndbossWalking = false;

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

    IMAGES_DEATH = [
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png',
        '../El_Pollo_Loco/img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    win_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/game-won.wav');
    endscreenWin() {
        let img = document.getElementById('start-screen-img');
        img.src = '../El_Pollo_Loco/img_pollo_locco/img/9_intro_outro_screens/game_over/you_won.png';
        img.classList.remove('d-none');
        img.classList.add('opacity');
        // this.win_sound.play();
        let restartBtn = document.getElementById('restart-button');
        restartBtn.classList.remove('d-none');
        // this.muteEndgame();
        // this.background_music.pause();
       

    }

    constructor() {
        super().loadImage(this.IMAGES_LOOKING[0]);
        this.loadImages(this.IMAGES_LOOKING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEATH);
        this.x = 7100;
        this.speed = 0.5;
        setInterval(() => {
            if (this.isEndbossWalking == true) {
                this.animate();
            } else {
                setInterval(() => {
                    if (this.isEndbossDead()) {
                        this.endscreenWin();
                        this.animate_death();
                    }
                }, 10);
            }
        }, 200);

    }

    animate() {
        setInterval(() => {
            this.moveLeft();

        }, 250);



        // not looking good.
        // setInterval(() => {
        //     this.playAnimation(this.IMAGES_LOOKING);

        // }, 100);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 600);
    }

    animate_death() {
        setTimeout(function() {
            // Hier kommt der Code, der nach dem Timeout ausgeführt werden soll
            this.playAnimation(this.IMAGES_DEATH);
        }, 600)
    }
}