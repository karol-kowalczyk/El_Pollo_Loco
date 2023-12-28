class MoveableObject { // classe namens 'MoveableObject'.
    x = 10; // variable x mit dem Wert 10, welcher allgemein gelten soll und auf welche sich die function addToMap() mit den Parametern in der Datei world.class.js bezogen wurde.
    y = 137; // x und y sind hier die Positionen im Canvas im Coordinaten -system, wo der punkt 0/0 oben links sich befindet.
    img; // variable img ohne Wert.
    width= 100; // Breite des Objekts
    height= 150; // hohe des Objekts - PS. pixxel also px werden autmoatisch dazugegeben.
    imageCache = []; // leeres Array, wo die Bilder drin gespeichert werden.

    loadImage(path) { // function loadImage mit dem parameter path
        this.img = new Image(); // hier wird sich mit this. auf die zuvor leere variable img bezogen und damit wurde ein in Javascript vordefinierte Klasse new Image() zugeordnet.
        this.img.src = path; // hier wird die source um das Bild anzuzeigen, dem Parameter path zugeordnet, welche auch als Parameter oben angegeben ist.
    }


    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image1.png', ...] ganz viele Bilder sollen in das array rein 
     */
    loadImages(arr) {
        let img = new Image();
        img.src = 
    } 

    moveRight() { // function moveRight fuehrt in der console den String 'Moving right' aus.
        console.log('Moving right');
    }

    moveLeft() { // diese function macht erstmal noch nichts

    }
}