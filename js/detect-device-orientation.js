/**
 * Event listener for the window resize event, which calls the checkScreenWidth function.
 * @function
 * @name windowResizeListener
 */
window.addEventListener('resize', checkScreenWidth);

const elements = [
    'turn-device-img',
    'turn-device-headline',
    // 'start-screen',
    'canvas-icons-div',
    'phone-icons-div',
    // 'start-button',
    'headline',
    'canvas'
];

/**
 * Checks the screen orientation and returns true if it's portrait mode, false otherwise.
 * @function
 * @name checkScreenOrientation
 * @returns {boolean} - True if the screen orientation is portrait, false otherwise.
 */
function checkScreenOrientation() {
    const portrait = window.matchMedia("(orientation: portrait)").matches;
    return portrait;
}

/**
 * Toggles the visibility of an element based on screen orientation.
 * @function
 * @name toggleElementVisibility
 * @param {boolean} portrait - Whether the screen orientation is portrait.
 * @param {string} id - The ID of the element to toggle visibility for.
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
 * Toggles the visibility of multiple elements based on screen orientation.
 * @function
 * @name toggleElementsVisibility
 * @param {boolean} portrait - Whether the screen orientation is portrait.
 */
function toggleElementsVisibility(portrait) {
    elements.forEach(id => {
        toggleElementVisibility(portrait, id);
    });
}

/**
 * Checks the screen width and toggles the visibility of elements accordingly.
 * @function
 * @name checkScreenWidth
 */
function checkScreenWidth() {
    const portrait = checkScreenOrientation();
    toggleElementsVisibility(portrait);
}
