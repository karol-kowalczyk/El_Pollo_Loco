/**
 * Represents the game world.
 */
class World {
    /**
     * Creates an instance of World.
     * @param {HTMLCanvasElement} canvas - The canvas element.
     * @param {Keyboard} keyboard - The keyboard input handler.
     */
    constructor(canvas, keyboard) {
        this.character = new Character();
        this.level = level1;
        this.enemies = level1.enemies;
        this.clouds = level1.clouds;
        this.coins = level1.coins;
        this.hearts = level1.hearts;
        this.bottles = level1.bottles;
        this.endboss = level1.endboss[0];
        this.backgroundObjects = level1.backgroundObjects;
        this.canvas;
        this.ctx;
        this.keybard;
        this.camera_x = 0;
        this.statusBar = new StatusBar();
        this.coinBar = new CoinBar();
        this.bottleBar = new BottleBar();
        this.endbossBar = new EndbossStatusBar();
        this.throwableObjects = [];
        this.bigEndBoss = new Endboss();
        this.chicken = new Chicken();

        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * Runs the game loops.
     */
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

    /**
     * Checks for thrown object collisions.
     */
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

    /**
     * Checks collisions with thrown objects.
     * @param {ThrowableObject} bottle - The thrown object.
     */
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

    /**
     * Checks collisions with endboss.
     */
    checkCollisionsWithEndboss() {
        this.level.endboss.forEach((boss) => {
            if (this.character.isColliding(boss)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    /**
     * Checks collisions with enemies.
     */
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

    /**
     * Checks for collecting hearts.
     */
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
    
    /**
     * Checks for collecting coins.
     */
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
    
    /**
     * Checks for collecting bottles.
     */
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
    
    /**
     * Checks for collecting items.
     */
    checkCollectItems() {
        this.checkCollectHearts();
        this.checkCollectCoins();
        this.checkCollectBottles();
    }

    /**
     * Sets the world for the character.
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Draws background objects.
     */
    drawBackgroundObjects() {
        this.addObjectsToMap(this.level.backgroundObjects);
    }
    
    /**
     * Draws clouds.
     */
    drawClouds() {
        this.addObjectsToMap(this.level.clouds);
    }
    
    /**
     * Draws enemies.
     */
    drawEnemies() {
        this.addObjectsToMap(this.level.enemies);
    }
    
    /**
     * Draws coins.
     */
    drawCoins() {
        this.addObjectsToMap(this.level.coins);
    }
    
    /**
     * Draws bottles.
     */
    drawBottles() {
        this.addObjectsToMap(this.level.bottles);
    }
    
    /**
     * Draws hearts.
     */
    drawHearts() {
        this.addObjectsToMap(this.level.hearts);
    }
    
    /**
     * Draws the end boss.
     */
    drawEndboss() {
        this.addToMap(this.endboss);
    }
    
    /**
     * Draws the status bar.
     */
    drawStatusBar() {
        this.addToMap(this.statusBar);
    }
    
    /**
     * Draws the end boss bar.
     */
    drawEndbossBar() {
        if (this.endbossBar.isVisible == true) {
            this.endboss.isEndbossWalking = true;
            this.addToMap(this.endbossBar);
        }
    }
    
    /**
     * Draws the coin bar.
     */
    drawCoinBar() {
        this.addToMap(this.coinBar);
    }
    
    /**
     * Draws the bottle bar.
     */
    drawBottleBar() {
        this.addToMap(this.bottleBar);
    }
    
    /**
     * Draws the character.
     */
    drawCharacter() {
        this.addToMap(this.character);
    }
    
    /**
     * Draws throwable objects.
     */
    drawThrowableObjects() {
        this.addObjectsToMap(this.throwableObjects);
    }
    
    /**
     * Draws the game.
     */
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

    /**
     * Adds objects to the map.
     * @param {Object[]} objects - The objects to be added.
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * Adds an object to the map.
     * @param {Object} mo - The object to be added.
     */
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

    /**
     * Flips the image.
     * @param {Object} mo - The object whose image is to be flipped.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Flips the image back.
     * @param {Object} mo - The object whose image is to be flipped back.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}