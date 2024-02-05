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

/**
 * Checks the screen orientation.
 * @returns {boolean} True if the screen is in portrait orientation, false otherwise.
 */
function checkScreenOrientation() {
    const portrait = window.matchMedia("(orientation: portrait)").matches;
    return portrait;
}

/**
 * Toggles the visibility of an element based on screen orientation.
 * @param {boolean} portrait - Whether the screen is in portrait orientation.
 * @param {string} id - The ID of the element to toggle.
 */
function toggleElementVisibility(portrait, id) {
    const element = document.getElementById(id);
    if (portrait) {
        element.classList.toggle('d-none', !id.includes('turn-device'));
    } else {
        element.classList.toggle('d-none', id.includes('turn-device'));
    }
}

/**
 * Toggles the visibility of all elements based on screen orientation.
 * @param {boolean} portrait - Whether the screen is in portrait orientation.
 */
function toggleElementsVisibility(portrait) {
    elements.forEach(id => {
        toggleElementVisibility(portrait, id);
    });
}

/**
 * Checks the screen width and adjusts element visibility accordingly.
 */
function checkScreenWidth() {
    const portrait = checkScreenOrientation();
    toggleElementsVisibility(portrait);
}