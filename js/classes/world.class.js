/**
 * Represents the game world.
 */
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
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    endbossBar = new EndbossStatusBar();
    throwableObjects = [];
    bigEndBoss = new Endboss();
    chicken = new Chicken();

    /**
     * Creates an instance of World.
     * @param {HTMLCanvasElement} canvas - The canvas element.
     * @param {Object} keyboard - The keyboard input handler.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * Runs the game loop with intervals for checking collisions and other game logic.
     */
    run() {
        /**
         * Interval for checking collisions with enemies.
         * @type {number}
         */
        setInterval(() => {
            this.checkCollisionsWithEnemys();
        }, 1000/60);

        /**
         * Interval for checking item collection.
         * @type {number}
         */
        setInterval(() => {
            this.checkCollectItems();
        }, 10);

        /**
         * Interval for checking collisions with end boss.
         * @type {number}
         */
        setInterval(() => {
            this.checkCollisionsWithEndboss();
        }, 500);

        /**
         * Interval for checking thrown objects.
         * @type {number}
         */
        setInterval(() => {
            this.checkThrowObjects();
        }, 180);
    }

    /**
     * Checks if the character can throw objects and handles the throwing process.
     */
    checkThrowObjects() {
        /**
         * Current length of the bottle bar.
         * @type {number}
         */
        let currentBottleLength = this.bottleBar.getPercentage();

        /**
         * Checks if the 'D' key is pressed and if there are enough bottles to throw.
         */
        if (this.keyboard.D && currentBottleLength > 0) {
            /**
             * Creates a new throwable object (bottle).
             * @type {ThrowableObject}
             */
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 20);

            this.throwableObjects.push(bottle);
            this.character.throwBottles();
            this.bottleBar.setPercentage(currentBottleLength - 20);

            /**
             * Interval for checking the bottle's collision and position.
             * @type {number}
             */
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
     * Checks collision of thrown objects with enemies and end boss.
     * @param {ThrowableObject} bottle - The thrown object (bottle).
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
     * Checks collisions between the character and the end boss.
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
     * Checks collisions with enemies and performs corresponding actions.
     */
    checkCollisionsWithEnemys() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.handleCollision(enemy);
            }
        });
    }

    /**
     * Handles the collision based on the state of the character.
     * @param {Enemy} enemy - The enemy collided with.
     */
    handleCollision(enemy) {
        if (this.character.y >= 110) {
            this.handleHurtCollision();
        } else {
            this.handleNormalCollision(enemy);
        }
    }

    /**
     * Handles the collision when it results in damage.
     */
    handleHurtCollision() {
        this.hurt = true;
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        this.setHurtTimeout();
    }

    /**
     * Handles the collision when it does not result in damage.
     * @param {Enemy} enemy - The enemy collided with.
     */
    handleNormalCollision(enemy) {
        this.hurt = false;
        enemy.removeFromMap();
        this.character.jump();
        this.setHurtTimeout();
    }

    /**
     * Sets the timer for resetting the hurt flag after a certain time.
     */
    setHurtTimeout() {
        setTimeout(() => {
            this.hurt = false;
        }, 5000);
    }

    /**
     * Checks collision between the character and hearts, collects hearts, and updates the status bar accordingly.
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
     * Checks collision between the character and coins, collects coins, and updates the coin bar accordingly.
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
     * Checks collision between the character and bottles, collects bottles, and updates the bottle bar accordingly.
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
     * Checks for the collection of hearts, coins, and bottles.
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
     * Draws the status bar if it is visible.
     */
    drawStatusBar() {
        this.addToMap(this.statusBar);
    }

    /**
     * Draws the end boss bar if it is visible.
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
     * Draws all game elements on the canvas.
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
     * Adds multiple objects to the map.
     * @param {Array} objects - An array of objects to be added to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * Adds a single object to the map.
     * @param {Object} mo - The object to be added to the map.
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
     * Flips the image horizontally.
     * @param {Object} mo - The object whose image is to be flipped.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Restores the image back to its original state after flipping.
     * @param {Object} mo - The object whose image was flipped.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
