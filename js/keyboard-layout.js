/**
 * Handles keydown events and updates the keyboard object accordingly.
 * @param {KeyboardEvent} event - The keydown event object.
 */
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

    if (event.keyCode == 68 && !dKeyPressed) { 
        keyboard.D = true;
        dKeyPressed = true; 
        setTimeout(() => { dKeyPressed = false; }, 1000);
    }
});

/**
 * Handles keyup events and updates the keyboard object accordingly.
 * @param {KeyboardEvent} event - The keyup event object.
 */
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

/**
 * Sets the state of a specified key in the keyboard object.
 * @param {string} key - The key to set the state for.
 * @param {boolean} state - The state to set for the key.
 */
function setKey(key, state) {
    keyboard[key] = state;
}
