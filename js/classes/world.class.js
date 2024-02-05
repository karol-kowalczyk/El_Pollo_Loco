class World {
    character = new Character();
    level = level1;
    enemies = level1.enemies;
    clouds = level1.clouds;
    coins = level1.coins;
    hearts = level1.hearts;
    bottles = level1.bottles;
    endboss = level1.endboss[0];
    backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx;
    keybard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    endbossBar = new EndbossStatusBar();
    throwableObjects = [];
    bigEndBoss = new Endboss();
    chicken = new Chicken();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    run() {
        setInterval(() => {
            this.checkCollisionsWithEnemys();
        }, 300);

        setInterval(() => {
            this.checkCollectItems();
        }, 10);

        setInterval(() => {
            this.checkCollisionsWithEndboss();
        }, 500);

        setInterval(() => {
            this.checkThrowObjects();
        }, 180);
    }

    checkThrowObjects() {
        let currentBottleLength = this.bottleBar.getPercentage();
        if (this.keyboard.D && currentBottleLength > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 20);
            this.throwableObjects.push(bottle);
            this.character.throwBottles();
            this.bottleBar.setPercentage(currentBottleLength - 20);
            let intervalId = setInterval(() => {
                if (bottle.y >= 280) {
                    bottle.splashedBottle();
                    clearInterval(intervalId);
                }
                this.checkThrownObjectCollision(bottle);
            }, 1000);
        }
    }

    checkThrownObjectCollision(bottle) {
        this.level.endboss.forEach((boss) => {
            if (bottle.isCollidingThrownItems(boss)) {
                this.bigEndBoss.bossHit();
                this.endboss.isEndbossHurt = true;
                this.endbossBar.setPercentage(this.bigEndBoss.bossEnergy);
            }
        });
    
        this.level.enemies.forEach((enemy) => {
            if (bottle.isCollidingThrownItems(enemy)) {
                enemy.removeFromMap();
                bottle.splashedBottle();
            }
        });
    }

    checkCollisionsWithEndboss() {
        this.level.endboss.forEach((boss) => {
            if (this.character.isColliding(boss)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionsWithEnemys() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.y >= 120) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
            else if (this.character.isColliding(enemy)) {
                enemy.removeFromMap();
                this.character.jump();
            }
        });
    }

    checkCollectHearts() {
        this.level.hearts.forEach((heart) => {
            if (this.character.isCollidingItems(heart)) {
                this.character.collectHeart();
                this.statusBar.setPercentage(this.character.energy);
                if (heart instanceof Heart) {
                    if (this.character.energy < 100)
                        heart.removeFromMap();
                }
            }
        });
    }
    
    checkCollectCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isCollidingItems(coin)) {
                this.character.collectCoin();
                this.coinBar.setPercentage(this.character.coin);
                if (coin instanceof Coins) {
                    if (this.character.coin < 100)
                        coin.removeFromMap();
                }
            }
        });
    }
    
    checkCollectBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isCollidingItems(bottle)) {
                this.character.collectBottle();
                this.bottleBar.setPercentage(this.character.bottle);
                if (bottle instanceof Bottle) {
                    if (this.character.bottle < 100)
                        bottle.removeFromMap();
                }
            }
        });
    }
    
    checkCollectItems() {
        this.checkCollectHearts();
        this.checkCollectCoins();
        this.checkCollectBottles();
    }

    setWorld() {
        this.character.world = this;
    }

    drawBackgroundObjects() {
        this.addObjectsToMap(this.level.backgroundObjects);
    }
    
    drawClouds() {
        this.addObjectsToMap(this.level.clouds);
    }
    
    drawEnemies() {
        this.addObjectsToMap(this.level.enemies);
    }
    
    drawCoins() {
        this.addObjectsToMap(this.level.coins);
    }
    
    drawBottles() {
        this.addObjectsToMap(this.level.bottles);
    }
    
    drawHearts() {
        this.addObjectsToMap(this.level.hearts);
    }
    
    drawEndboss() {
        this.addToMap(this.endboss);
    }
    
    drawStatusBar() {
        this.addToMap(this.statusBar);
    }
    
    drawEndbossBar() {
        if (this.endbossBar.isVisible == true) {
            this.endboss.isEndbossWalking = true;
            this.addToMap(this.endbossBar);
        }
    }
    
    drawCoinBar() {
        this.addToMap(this.coinBar);
    }
    
    drawBottleBar() {
        this.addToMap(this.bottleBar);
    }
    
    drawCharacter() {
        this.addToMap(this.character);
    }
    
    drawThrowableObjects() {
        this.addObjectsToMap(this.throwableObjects);
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawBackgroundObjects();
        this.drawClouds();
        this.drawEnemies();
        this.drawCoins();
        this.drawBottles();
        this.drawHearts();
        this.drawEndboss();
        this.ctx.translate(-this.camera_x, 0);
        this.drawStatusBar();
        this.drawEndbossBar();
        this.drawCoinBar();
        this.drawBottleBar();
        this.ctx.translate(this.camera_x, 0);
        this.drawCharacter();
        this.drawThrowableObjects();
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
