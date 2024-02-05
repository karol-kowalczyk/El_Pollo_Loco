window.addEventListener('resize', checkScreenWidth);

const elements = [
    'turn-device-img',
    'turn-device-headline',
    'start-screen',
    'canvas-icons-div',
    'phone-icons-div',
    'start-button',
    'headline'
];

function checkScreenOrientation() {
    const portrait = window.matchMedia("(orientation: portrait)").matches;
    return portrait;
}

function toggleElementVisibility(portrait, id) {
    const element = document.getElementById(id);
    if (portrait) {
        element.classList.toggle('d-none', !id.includes('turn-device'));
    } else {
        element.classList.toggle('d-none', id.includes('turn-device'));
    }
}

function toggleElementsVisibility(portrait) {
    elements.forEach(id => {
        toggleElementVisibility(portrait, id);
    });
}

function checkScreenWidth() {
    const portrait = checkScreenOrientation();
    toggleElementsVisibility(portrait);
}
