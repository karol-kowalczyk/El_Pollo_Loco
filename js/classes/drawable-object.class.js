/**
 * Represents a drawable object.
 * 
 */
class DrawableObject {
    x = 100;
    y = 137;
    width = 100;
    height = 150;
    percentage = 100;
    imageCache = {};
    mute = true;
    currentImage = 0;
    endgame_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/End_Boss_Music.mp3');
    win_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/game-won.mp3');

    /**
     * Loads an image from the given path.
     * @param {string} path - The path to the image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draws the object on the canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Draws a frame around the object based on its type.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    drawFrame(ctx) {
        if (this instanceof Chicken || this instanceof BabyChicken || this instanceof Heart || this instanceof Coins || this instanceof Bottle || this instanceof ThrowableObject || this instanceof Character || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.stroke();
        }
    }

    /**
     * Loads multiple images into the cache.
     * @param {string[]} arr - Array of image paths.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Toggles the volume of multiple audio elements based on the state of the sound icon.
     */
    toggleVolume() {
        const audioElements = [this.main_music];

        if (this.soundIcon.src.includes('speaker-mute.png')) {
            audioElements.forEach(audio => {
                audio.volume = 0.0;
                this.mute = true;
            });
        } else {
            audioElements.forEach(audio => {
                audio.volume = 0.5;
                this.mute = false;
            });
        }
    }

    /**
     * Checks and toggles the volume periodically.
     */
    checkSound() {
        setInterval(() => {
            this.toggleVolume();
        }, 1000 / 60);
    }
}
