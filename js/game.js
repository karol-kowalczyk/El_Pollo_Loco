let canvas;
let world;
let keyboard = new Keyboard();
let fullScreen = false;
let loadingScreenMusic = new Audio('./img_pollo_locco/img/audio/loading_screen.mp3');
let isStartScreenMusicPlaying = false;
let dKeyPressed = false;

/**
 * 
 * Initializes the application by setting up the canvas and creating a world with a character.
 * The details of the character are then logged to the console.
 * 
 */

function init() {
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function toggleScreenSize() {
    fullScreen = !fullScreen;
    if (fullScreen) {
        enterFullscreen(document.getElementById('canvas-container'));
        document.getElementById('start-screen').style.width = '100%';
        document.getElementById('start-screen').style.height = '100%';
        document.getElementById('canvas').style.width = '100%';
        document.getElementById('canvas').style.height = '100%';
    } else {
        exitFullscreen();
    }
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

function openGameInstruction(event) {
    event.stopPropagation();
    let gameInstruction = document.getElementById('game-instruction');
    gameInstruction.classList.toggle('d-none');
}

function closeInstruction() {
    let gameInstruction = document.getElementById('game-instruction');
    gameInstruction.classList.add('d-none');
}

function toggleIcon() {
    event.stopPropagation();
    changeIcon();
    togglePlay();
}

function changeIcon() {
    let musicIcon = document.getElementById('sound-icon').src;
    if (musicIcon.indexOf('speaker-filled-audio.png') != -1) {
        document.getElementById('sound-icon').src = '/El_Pollo_Loco/img_pollo_locco/img/10_background/speaker-mute.png';
    } else {
        document.getElementById('sound-icon').src = '/El_Pollo_Loco/img_pollo_locco/img/10_background/speaker-filled-audio.png';
        isStartScreenMusicPlaying = false;
    }
}

function togglePlay() {
    if (isStartScreenMusicPlaying) {
        loadingScreenMusic.pause();
        isStartScreenMusicPlaying = false;
    } else {
        loadingScreenMusic.play();
        isStartScreenMusicPlaying = true;
    }
}

setInterval(() => {
    if (isStartScreenMusicPlaying) {
        loadingScreenMusic.play();
    } else {
        loadingScreenMusic.pause();
    }
}, 1000 / 60);

function closeStartScreen() {
    let startScreenImg = document.getElementById('start-screen');
    let startButton = document.getElementById('start-button');
    stopStartScreenMusic();
    hideHTMLElements(startScreenImg, startButton);
    let phoneIconsDiv = document.getElementById('phone-icons-div');
    phoneIconsDiv.classList.add('d-none');
}

function hideHTMLElements(startScreenImg, startButton) {
    startButton.classList.add('d-none');
    startScreenImg.src = '/El_Pollo_Loco/img_pollo_locco/img/10_background/loading_screen.png';
    init();
    setTimeout(function () {
        startScreenImg.classList.add('d-none');
    }, 6000);
}

function stopStartScreenMusic() {
    loadingScreenMusic.src = './img_pollo_locco/img/audio/nothing.mp3';
}

function restartGame() {
    location.reload();
}