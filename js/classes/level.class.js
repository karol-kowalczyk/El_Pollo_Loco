class Level {
    enemies;
    endboss;
    clouds;
    backgroundObjects;
    hearts;
    bottles;
    coins;
    level_end_x = 7700;

    constructor(enemies, endboss, clouds, hearts, bottles, coins, backgroundObjects) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.hearts = hearts;
        this.bottles = bottles;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
    }
}
