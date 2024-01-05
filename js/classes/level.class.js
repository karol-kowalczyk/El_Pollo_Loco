class Level {
    enemies;
    clouds;
    backgroundObjects;
    hearts;
    bottles;
    coins;
    level_end_x = 7700;

    constructor(enemies, clouds, backgroundObjects, hearts, bottles, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.hearts = hearts;
        this.bottles = bottles;
        this.coins = coins;
    }
}