class MoveableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    energy = 100;
    lastHit = 0;
    lastHeal = 0;
    coin = 0;
    bottle = 0;
    mute = true;
    iconClicked = 0;

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

    //character.isCollidin(chicken);
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    isCollidingItems(item) {
        return this.x + this.width - 90 > item.x &&
            this.y + 30 + this.height - 90 > item.y + 30 &&
            this.x < item.x &&
            this.y + 30 < item.y + 30 + item.height - 90;
    }

    collectCoin() {
        this.coin += 10;
        if (this.coin >= 100) {
            this.coin = 100;
        }

        if (this.coin < 100) {
            this.playCollectCoinSound();
        }
    }

    collectBottle() {
        this.bottle += 10;
        if (this.bottle >= 100) {
            this.bottle = 100;
        }

        if (this.bottle < 100) {
            this.playCollectBottleSound();
        }
    }

    collectHeart() {
        this.energy += 5;
        if (this.energy >= 100) {
            this.energy = 100;
        }

        if (this.energy < 100) {
            this.playCollectHeartSound();
        }
    }

    hit() {
        this.energy -= 5;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    bigHit() {
        this.energy -= 35;
        if (this.energy <= 0) {
            this.energy = 0;
            this.jumpToEndScreen();
        } else {
            this.lastHit = new Date().getTime();
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
        let timepassed = new Date().getTime() - this.lastHit; //  Differenci in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 % 6; => 1, // eine Undendliche Reihe die wir hier haben 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() { // function moveRight fuehrt in der console den String 'Moving right' aus.
        this.x += this.speed;
    }

    moveLeft() {
        // Methode set interval fuehrt eine function aus, was hier nur die Klammern () sind staende davor mal function
        this.x -= this.speed;
        // veraendert die Position der Wolken um 0.1 pixel
        // so laeuft es 60frames per second also 60fps
    }

    jump() {
        this.speedY = 40;
    }

    muteEverySound() {
        this.collectHeartSound.pause();
        this.collectCoinSound.pause();
        this.collectBottleSound.pause();
    }
}