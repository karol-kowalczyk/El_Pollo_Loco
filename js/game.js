let canvas; // Variable namens 'canvas', die keinem Wert bisher zugeordnet wurde.
let world; // Variable namens 'world', die keinem Wert bisher zugeordnet wurde.



/**
 * 
 * Initializes the application by setting up the canvas and creating a world with a character.
 * The details of the character are then logged to the console.
 * 
 */
function init() {
    canvas = document.getElementById('canvas'); // Variablen 'canvas' die id ‘canvas’ hinzugefuegt mit document.getElementById('canvas').
    world = new World(canvas); // Der Variablen 'world' wird die Classe World hinzugefuegt, mit dem Parameter canvas (also dem Element Canvas im index.html teil, also der div canvas).


    console.log('My character is', world.character); // in der Console wird der String ('My charactr is') ausgefuehrt und dahinter die Variable world mit den Eigenschaften des jeweiligen characters in der Classe Charactwr
}