class BackgroundSky extends MoveableObject {

    width = 720;
    height = 1000;

    constructor(imagePath, x, y) { // in der Constructor function haben wir drei parameter imagePath, welche in der world.class.js uebergeben wurde (main Class).
        super().loadImage(imagePath);  // hier wird der pfad von der world weitergegeben, damit dieser gefunden und dann auch im Canvas displayed werden kann.
        this.x = x; // Parameter x welcher ebenfalls in der world.class.js weitergegeben wurde um die Wete 0 zu uebernehmen, damit der background bei den coordinaten oben links 0/0
        this.y = y; // anfaengt und nicht die Werte von der main Classe moveable object uebernimmt.
    }
}