window.addEventListener('resize', checkScreenWidth);


function checkScreenWidth() {

    const portrait = window.matchMedia("(orientation: portrait)").matches;
    let playIcons = document.getElementById('canvas-icons-div');
    let startScreen = document.getElementById('start-screen');
    let turnDeviceImg = document.getElementById('turn-device-img');
    let turnDeviceHeadline = document.getElementById('turn-device-headline');
    let phoneIconsDiv = document.getElementById('phone-icons-div');
    let startButton = document.getElementById('start-button');
    let headline = document.getElementById('headline');

    if (portrait) {
        turnDeviceImg.classList.remove('d-none');
        turnDeviceHeadline.classList.add('turn-device-headline');
        turnDeviceHeadline.classList.remove('d-none');
        turnDeviceImg.classList.add('turn-device-img');
        startScreen.classList.add('d-none');
        playIcons.classList.add('d-none');
        phoneIconsDiv.classList.add('d-none');
        startButton.classList.add('d-none');
        headline.classList.add('d-none');
    } else {
        turnDeviceHeadline.classList.remove('turn-device-headline');
        turnDeviceHeadline.classList.add('d-none');
        turnDeviceImg.classList.remove('turn-device-img');
        startScreen.classList.remove('d-none');
        playIcons.classList.remove('d-none');
        phoneIconsDiv.classList.remove('d-none');
        startButton.classList.remove('d-none');
        headline.classList.remove('d-none');
    }
}
