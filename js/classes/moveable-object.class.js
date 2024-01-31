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
    }

    collectHeartSound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/pick_heart.mp3');
    collectCoinSound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/super-mario-coin-sound.mp3');
    collectBottleSound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/pick_bottle.mp3');

    playCollectCoinSound() {
        this.collectCoinSound.play();
    }

    playCollectBottleSound() {
        this.collectBottleSound.play();
    }

    playCollectHeartSound() {
        this.collectHeartSound.play();
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 120;
        }
    }

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    isCollidingItems(item) {
        return this.x + this.width - 90 > item.x &&
            this.y + 30 + this.height - 90 > item.y + 30 &&
            this.x < item.x &&
            this.y + 30 < item.y + 30 + item.height - 90;
    }

    isCollidingThrownItems(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height;
    }

    collectCoin() {
        this.coin += 20;
        if (this.coin >= 100) {
            this.coin = 100;
        }

        if (this.coin < 100) {
            this.playCollectCoinSound();
        }
    }

    collectBottle() {
        this.bottle += 20;
        if (this.bottle >= 100) {
            this.bottle = 100;
        }
        if (this.bottle < 100) {
            this.playCollectBottleSound();
        }
    }

    throwBottles() {
        this.bottle -= 20;
        if (this.bottle <= 0) {
            this.bottle = 0;
        }
    }

    collectHeart() {
        this.energy += 20;
        if (this.energy >= 100) {
            this.energy = 100;
        }

        if (this.energy < 100) {
            this.playCollectHeartSound();
        }
    }

    hit() {
        this.energy -= 10;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    bigHit() {
        this.energy -= 20;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    bossHit() {
        this.bossEnergy -= 25;
        if (this.bossEnergy <= 0) { 
            this.bossEnergy = 0;
        } else {
            this.lastBossHit = new Date().getTime();
        }
    }

    contactWithLifeItem() {
        this.energy += 20;
        if (this.energy >= 100) {
            this.energy = 100;
        } else {
            this.lastHeal = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }

    isEndbossDead() {
        return this.bossEnergy == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

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

    muteEverySound() {
        this.collectHeartSound.pause();
        this.collectCoinSound.pause();
        this.collectBottleSound.pause();
        this.background_music.pause();
    }
}