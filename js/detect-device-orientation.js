/**
 * Event listener for the window resize event, which calls the checkScreenWidth function.
 * @function
 * @name windowResizeListener
 */
window.addEventListener('resize', checkScreenWidth);

const elements = [
    'turn-device-img',
    'turn-device-headline',
    'start-screen',
    'canvas-icons-div',
    'phone-icons-div',
    'start-button',
    'headline',
    'canvas'
];

const phoneBtns = 'phone-icons-div';

/**
 * Checks the screen orientation and returns "portrait" if it's portrait mode, "landscape" otherwise.
 * @function
 * @name checkScreenOrientation
 * @returns {string} - "portrait" if the screen orientation is portrait, "landscape" otherwise.
 */
function checkScreenOrientation() {
    return window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape";
}

/**
 * Toggles the visibility of an element based on screen orientation and screen width.
 * @function
 * @name toggleElementVisibility
 * @param {string} orientation - The screen orientation ("portrait" or "landscape").
 * @param {string} id - The ID of the element to toggle visibility for.
 */
function toggleElementVisibility(orientation, id) {
    const element = document.getElementById(id);
    if (orientation == "portrait") {
        element.classList.toggle('d-none', !id.includes('turn-device'));
    } else {
        element.classList.toggle('d-none', id.includes('turn-device'));
    }

    if (id === phoneBtns) {
        if (orientation == "landscape") {
            if (window.innerWidth >= 900) {
                element.classList.add('d-none');
            } else {
                element.classList.remove('d-none');
            }
        } else {
            element.classList.add('d-none');
        }
    }
}

/**
 * Toggles the visibility of multiple elements based on screen orientation.
 * @function
 * @name toggleElementsVisibility
 * @param {string} orientation - The screen orientation ("portrait" or "landscape").
 */
function toggleElementsVisibility(orientation) {
    elements.forEach(id => {
        toggleElementVisibility(orientation, id);
    });
}

/**
 * Checks the screen width and toggles the visibility of elements accordingly.
 * @function
 * @name checkScreenWidth
 */
function checkScreenWidth() {
    const orientation = checkScreenOrientation();
    toggleElementsVisibility(orientation);
}