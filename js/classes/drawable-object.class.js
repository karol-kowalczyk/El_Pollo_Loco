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
    win = false;
    lose = false;
    meetEndBoss = false;
    currentImage = 0;
    endgame_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/End_Boss_Music.mp3');
    win_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/game-won.mp3');
    main_music = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/Game-Music.mp3');
    snoring_sound = new Audio('../El_Pollo_Loco/img_pollo_locco/img/audio/Cartoon_Snoring_SOUND_EFFECT.mp3');

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
        const soundIconSrc = this.soundIcon.src;
        if (soundIconSrc.includes('speaker-mute.png')) {
            this.setVolumeAndMute(audioElements, 0.0, true);
        } else if (soundIconSrc.includes('speaker-filled-audio.png')) {
            if (this.win || this.lose) {
                this.pauseAudioElements();
            } else {
                this.setVolumeAndMute(audioElements, 0.5, false);
            }
        }
    }

    /**
     * Sets volume and mute state for audio elements.
     * @param {Array} audioElements Array of audio elements.
     * @param {number} volume Desired volume level.
     * @param {boolean} mute Mute state.
     */
    setVolumeAndMute(audioElements, volume, mute) {
        audioElements.forEach(audio => {
            audio.volume = volume;
        });
        this.mute = mute;
    }

    /**
     * Pauses main music and loading screen music.
     */
    pauseAudioElements() {
        this.main_music.pause();
        loadingScreenMusic.pause(); // Assuming loadingScreenMusic is globally accessible
    }

    /**
     * Checks and toggles the volume periodically.
     */
    checkSound() {
        setInterval(() => {
            this.toggleVolume();
        }, 1000 / 60);

        setTimeout(() => {
            this.snoring_sound.src = '../El_Pollo_Loco/img_pollo_locco/img/audio/nothing.mp3';
        }, 20000)
    }
}
