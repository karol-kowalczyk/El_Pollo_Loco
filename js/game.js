let canvas; // Variable namens 'canvas', die keinem Wert bisher zugeordnet wurde.
let world; // Variable namens 'world', die keinem Wert bisher zugeordnet wurde.
let keyboard = new Keyboard();



/**
 * 
 * Initializes the application by setting up the canvas and creating a world with a character.
 * The details of the character are then logged to the console.
 * 
 */
function init() {
    canvas = document.getElementById('canvas'); // Variablen 'canvas' die id ‘canvas’ hinzugefuegt mit document.getElementById('canvas').
    world = new World(canvas, keyboard); // Der Variablen 'world' wird die Classe World hinzugefuegt, mit dem Parameter canvas (also dem Element Canvas im index.html teil, also der div canvas).


    console.log('My character is', world.character); // in der Console wird der String ('My charactr is') ausgefuehrt und dahinter die Variable world mit den Eigenschaften des jeweiligen characters in der Classe Charactwr
}

window.addEventListener("keydown", (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (event.keyCode == 38) {
        keyboard.UP = true;
    }

    if (event.keyCode == 40) {
        keyboard.DOWN = true;

    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (event.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener("keyup", (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (event.keyCode == 38) {
        keyboard.UP = false;
    }

    if (event.keyCode == 40) {
        keyboard.DOWN = false;

    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (event.keyCode == 68) {
        keyboard.D = false;
    }

});

function fullscreen() {
    let fullscreen = document.getElementById('canvas-container');
    enterFullscreen(fullscreen);
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msReuestFullScreen) {
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
    let icon = document.getElementById('sound-icon').src;

    if (icon.indexOf('speaker-filled-audio.png') !== -1) {
        document.getElementById('sound-icon').src = '/El_Pollo_Loco/img_pollo_locco/img/10_background/speaker-mute.png';
    } else {
        document.getElementById('sound-icon').src = '/El_Pollo_Loco/img_pollo_locco/img/10_background/speaker-filled-audio.png';
    }
}

function togglePlay() {
    let loadingScreenMusic = document.getElementById('loading-screen-music');
    let isPlaying = !loadingScreenMusic.paused;

    if (isPlaying) {
        loadingScreenMusic.pause();
    } else {
        loadingScreenMusic.play();
    }
}

function closeStartScreen() {
    let startScreenImg = document.getElementById('start-screen-img');
    let startButton = document.getElementById('start-button');

    startScreenImg.classList.add('d-none')
    startButton.classList.add('d-none')


    initLevel();
}