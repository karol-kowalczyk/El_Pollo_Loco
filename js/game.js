let canvas;
let world;
let keyboard = new Keyboard();
let fullScreen = false;
let loadingScreenMusic = new Audio('./img_pollo_locco/img/audio/loading_screen.mp3');
let isMusicPlaying = false;


/**
 * 
 * Initializes the application by setting up the canvas and creating a world with a character.
 * The details of the character are then logged to the console.
 * 
 */
function init() {
    canvas = document.getElementById('canvas');
    initLevel();
    world = new World(canvas, keyboard);
    console.log('My character is', world.character);
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

function setKey(key, state) {
    keyboard[key] = state;
}



function toggleScreenSize() {
    fullScreen = !fullScreen;
    if (fullScreen) {
        enterFullscreen(document.getElementById('canvas-container'));
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
        isMusicPlaying = false;
    }
}
let intervalID; // Globale Variable, um das Intervall zu speichern

function togglePlay() {
    if (isMusicPlaying) {
        loadingScreenMusic.pause();
        isMusicPlaying = false;
    } else {
        loadingScreenMusic.play();
        isMusicPlaying = true;
    }
}

// In der init()-Funktion oder einem ähnlichen Anfangspunkt
setInterval(() => {
    if (isMusicPlaying) {
        loadingScreenMusic.play();
    } else {
        loadingScreenMusic.pause();
    }
}, 1000 / 60);

function stopMusic() {
    loadingScreenMusic.pause(); // Musik pausieren
    isMusicPlaying = false;
}

function closeStartScreen() {
    let startScreenImg = document.getElementById('start-screen-img');
    let startButton = document.getElementById('start-button');
    let bgMusic = document.getElementById('loading-screen-music');
    stopMusic();

    setTimeout(function () {
        startScreenImg.classList.add('itemHidden');
        startButton.classList.add('d-none');
        
        init();
    }, 180);

    setTimeout(function () {
        startScreenImg.classList.remove('itemHidden');
        startScreenImg.classList.add('d-none');
    }, 1500);
}



function restartGame() {
    location.reload();
}