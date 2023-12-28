class Character extends MoveableObject { // classe Character erbt Eigenschaften von der UeberKlasse MoveableObject 

    width = 200; // die Breite wird diesem Object neu zugewiesen. Also wurde diese zwar von der moveable-object.class.js 
    height = 300; // Classe uebernommen aber ueberschrieben da diese anscheinen nicht passt

    constructor() { // initialisiert wird automatisch aufgerufen, deswegen konstructor, und dieser legt fest, wie die Klasse aussehen und funktionieren soll
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/2_character_pepe/2_walk/W-21.png'); // mit super() wird von der UeberClasse geerbt und so
        // kann die function loadImage ausgefuehrt und uebernommen werden. In der moveable-object.class.js wurde die function erstellt mit dem Parameter path, welcher hier erstellt wird.
    }


    jump() {

    }
}