let canvas;
let world;
let keyboard = new Keyboard();
let fullScreen = false;
let loadingScreenMusic = new Audio('./img_pollo_locco/img/audio/loading_screen.mp3');
let isStartScreenMusicPlaying = false;
let dKeyPressed = false;

/**
 * Initializes the game by calling initLevel and creating a new World object.
 */
function init() {
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * Toggles the fullscreen mode of the game.
 */
function toggleFullscreen() {
    enterFullscreen(document.getElementById('canvas-container'));
    document.getElementById('start-screen').style.width = '100%';
    document.getElementById('start-screen').style.height = '100%';
    document.getElementById('canvas').style.width = '100%';
    document.getElementById('canvas').style.height = '100%';
}

/**
 * Toggles the screen size between fullscreen and normal size.
 */
function toggleScreenSize() {
    fullScreen = !fullScreen;
    if (fullScreen) {
        toggleFullscreen();
    } else {
        exitFullscreen();
    }
}

/**
 * Enters fullscreen mode for the specified element.
 * @param {HTMLElement} element - The HTML element to enter fullscreen mode.
 */
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

/**
 * Exits fullscreen mode.
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

/**
 * Opens the game instructions modal.
 * @param {Event} event - The click event.
 */
function openGameInstruction(event) {
    event.stopPropagation();
    let gameInstruction = document.getElementById('game-instruction');
    gameInstruction.classList.toggle('d-none');
}

/**
 * Closes the game instructions modal.
 */
function closeInstruction() {
    let gameInstruction = document.getElementById('game-instruction');
    gameInstruction.classList.add('d-none');
}

/**
 * Toggles the sound icon and controls the start screen music.
 */
function toggleIcon() {
    event.stopPropagation();
    changeIcon();
    togglePlay();
}

/**
 * Changes the sound icon between mute and unmute.
 */
function changeIcon() {
    let musicIcon = document.getElementById('sound-icon').src;
    if (musicIcon.indexOf('speaker-filled-audio.png') != -1) {
        document.getElementById('sound-icon').src = '/El_Pollo_Loco/img_pollo_locco/img/10_background/speaker-mute.png';
    } else {
        document.getElementById('sound-icon').src = '/El_Pollo_Loco/img_pollo_locco/img/10_background/speaker-filled-audio.png';
        isStartScreenMusicPlaying = false;
    }
}

/**
 * Toggles the play/pause state of the start screen music.
 */
function togglePlay() {
    if (isStartScreenMusicPlaying) {
        loadingScreenMusic.pause();
        isStartScreenMusicPlaying = false;
    } else {
        loadingScreenMusic.play();
        isStartScreenMusicPlaying = true;
    }
}

/**
 * Sets up an interval to play or pause the start screen music based on the isStartScreenMusicPlaying flag.
 */
setInterval(() => {
    if (isStartScreenMusicPlaying) {
        loadingScreenMusic.play();
    } else {
        loadingScreenMusic.pause();
    }
}, 1000 / 60);

/**
 * Initializes the elements of the start screen.
 * @returns {Object} An object containing references to start screen elements.
 */
function initializeStartScreenElements() {
    let startScreenImg = document.getElementById('start-screen');
    let startButton = document.getElementById('start-button');
    let phoneIconsDiv = document.getElementById('phone-icons-div');
    return { startScreenImg, startButton, phoneIconsDiv };
}

/**
 * Closes the start screen by hiding its elements and stopping the start screen music.
 */
function closeStartScreen() {
    let { startScreenImg, startButton, phoneIconsDiv } = initializeStartScreenElements();
    phoneIconsDiv.classList.add('d-none');
    stopStartScreenMusic();
    hideHTMLElements(startScreenImg, startButton);
}

/**
 * Hides specified HTML elements and initializes the game.
 * @param {HTMLElement} startScreenImg - The image element of the start screen.
 * @param {HTMLElement} startButton - The button element of the start screen.
 */
function hideHTMLElements(startScreenImg, startButton) {
    startButton.classList.add('d-none');
    startScreenImg.src = '/El_Pollo_Loco/img_pollo_locco/img/10_background/loading_screen.png';
    init();
    deleteStartScreenImg(startScreenImg);
}

/**
 * Deletes the start screen image element after a delay.
 * @param {HTMLElement} startScreenImg - The image element of the start screen.
 */
function deleteStartScreenImg(startScreenImg) {
    setTimeout(function () {
        startScreenImg.classList.add('d-none');
    }, 6000);
}

/**
 * Stops the start screen music by changing its source to a silent audio file.
 */
function stopStartScreenMusic() {
    loadingScreenMusic.src = './img_pollo_locco/img/audio/nothing.mp3';
}

/**
 * Restarts the game by reloading the page.
 */
function restartGame() {
    location.reload();
}