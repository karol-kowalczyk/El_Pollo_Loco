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
    initLevel();
    world = new World(canvas, keyboard); // Der Variablen 'world' wird die Classe World hinzugefuegt, mit dem Parameter canvas (also dem Element Canvas im index.html teil, also der div canvas).
    console.log('My character is', world.character); // in der Console wird der String ('My charactr is') ausgefuehrt und dahinter die Variable world mit den Eigenschaften des jeweiligen characters in der Classe Charactwr

    // Rufe die Methode icon_muted() auf der Instanz auf

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

let fullScreen = false;

function toggleScreenSize() {
    fullScreen = !fullScreen; // Umkehrung des Zustands (toggle)
    if (fullScreen) {
        enterFullscreen(document.getElementById('canvas-container')); // Hier können Sie das gewünschte Element übergeben, in diesem Fall das gesamte Dokument
        document.getElementById('start-screen-img').style.width = '100%';
        document.getElementById('start-screen-img').style.height = '100%';
        document.getElementById('canvas').style.width = '100%';
        document.getElementById('canvas').style.height = '100%';
    } else {
        exitFullscreen();
    }
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // für IE11 (entfernen bis 15. Juni 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
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
    let bgMusic = document.getElementById('loading-screen-music');

    setTimeout(function () {
        startScreenImg.classList.add('itemHidden');
        startButton.classList.add('d-none');
        bgMusic.src = '/El_Pollo_Loco/img_pollo_locco/img/audio/nothing.mp3';
        init();
    }, 180);

    setTimeout(function () {
        startScreenImg.classList.remove('itemHidden');
        startScreenImg.classList.add('d-none');
    }, 1500); // 20 Sekunden in Millisekunden umgerechnet
}

function restartGame() {
    location.reload();
}