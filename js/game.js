let canvas;
let world;
let keyboard = new Keyboard();
let fullScreen = false;
let gameStarted = false;
let loadingScreenMusic = new Audio('./img_pollo_locco/img/audio/loading_screen.mp3');
let isLoadingScreenMusicPlaying = false;
let dKeyPressed = false;

/**
 * Initializes the game by setting up the level and creating a world instance.
 * @function
 * @name init
 */
function init() {
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * Toggles the game screen to fullscreen mode.
 * @function
 * @name toggleFullscreen
 */
function toggleFullscreen() {
    enterFullscreen(document.getElementById('canvas-container'));
    document.getElementById('start-screen').style.width = '100%';
    document.getElementById('start-screen').style.height = '100%';
    document.getElementById('canvas').style.width = '100%';
    document.getElementById('canvas').style.height = '100%';
}

/**
 * Toggles the game screen size between fullscreen and normal size.
 * @function
 * @name toggleScreenSize
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
 * Enters fullscreen mode for the specified HTML element.
 * @function
 * @name enterFullscreen
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
 * @function
 * @name exitFullscreen
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

/**
 * Opens the game instruction panel.
 * @function
 * @name openGameInstruction
 * @param {Event} event - The event object.
 */
function openGameInstruction(event) {
    event.stopPropagation();
    let gameInstruction = document.getElementById('game-instruction');
    gameInstruction.classList.toggle('d-none');
}

/**
 * Closes the game instruction panel.
 * @function
 * @name closeInstruction
 */
function closeInstruction() {
    let gameInstruction = document.getElementById('game-instruction');
    gameInstruction.classList.add('d-none');
}

/**
 * Toggles the sound icon and the background music.
 * @function
 * @name toggleIcon
 */
function toggleIcon() {
    event.stopPropagation();
    changeIcon();
    togglePlay();
}

/**
 * Changes the sound icon based on its current state.
 * @function
 * @name changeIcon
 */
function changeIcon() {
    let musicIcon = document.getElementById('sound-icon').src;
    if (musicIcon.indexOf('speaker-filled-audio.png') != -1) {
        document.getElementById('sound-icon').src = '/El_Pollo_Loco/img_pollo_locco/img/10_background/speaker-mute.png';
    } else {
        document.getElementById('sound-icon').src = '/El_Pollo_Loco/img_pollo_locco/img/10_background/speaker-filled-audio.png';
        isLoadingScreenMusicPlaying = false;
    }
}

/**
 * Toggles the play/pause state of the background music.
 * @function
 * @name togglePlay
 */
function togglePlay() {
    if (isLoadingScreenMusicPlaying) {
        loadingScreenMusic.pause();
        isLoadingScreenMusicPlaying = false;
    } else {
        loadingScreenMusic.play();
        isLoadingScreenMusicPlaying = true;
    }
}

/**
 * Initializes elements of the start screen.
 * @function
 * @name initializeStartScreenElements
 * @returns {Object} - An object containing references to start screen elements.
 */
function initializeStartScreenElements() {
    let startScreenImg = document.getElementById('start-screen');
    let startButton = document.getElementById('start-button');
    let phoneIconsDiv = document.getElementById('phone-icons-div');
    return { startScreenImg, startButton, phoneIconsDiv };
}

/**
 * Closes the start screen and starts the game.
 * @function
 * @name closeStartScreen
 */
function closeStartScreen() {
    let { startScreenImg, startButton, phoneIconsDiv } = initializeStartScreenElements();
    if (window.width >= 1000 && gameStarted == false) {
        phoneIconsDiv.classList.add('d-none');
    } else {
        phoneIconsDiv.classList.remove('d-none');
    }
    stopStartScreenMusic();
    hideHTMLElements(startScreenImg, startButton);
}

/**
 * Hides HTML elements of the start screen after a delay and initializes the game.
 * @function
 * @name hideHTMLElements
 * @param {HTMLElement} startScreenImg - The start screen image element.
 * @param {HTMLElement} startButton - The start button element.
 */
function hideHTMLElements(startScreenImg, startButton) {
    startButton.classList.add('d-none');
    startScreenImg.src = '/El_Pollo_Loco/img_pollo_locco/img/10_background/loading_screen.png';
    init();
    deleteStartScreenImg(startScreenImg);
}

/**
 * Deletes the start screen image after a delay.
 * @function
 * @name deleteStartScreenImg
 * @param {HTMLElement} startScreenImg - The start screen image element.
 */
function deleteStartScreenImg(startScreenImg) {
    setTimeout(function () {
        startScreenImg.classList.add('d-none');
    }, 6000);
}

/**
 * Stops the start screen music.
 * @function
 * @name stopStartScreenMusic
 */
function stopStartScreenMusic() {
    loadingScreenMusic.src = './img_pollo_locco/img/audio/Game-Music.mp3';
    if (isLoadingScreenMusicPlaying) {
        loadingScreenMusic.play();
    }
}

/**
 * Reloads the game to restart it.
 * @function
 * @name restartGame
 */
function restartGame() {
    location.reload();
}