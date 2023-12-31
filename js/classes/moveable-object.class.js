class MoveableObject extends DrawableObject { 
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    energy = 100;
    lastHit = 0;

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

    hit() {
        this.energy -= 5;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
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
}