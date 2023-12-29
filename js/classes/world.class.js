class World {

    character = new Character();
    level = level1;
    // Variable namens 'character' hat den Wert 'new Charater()', welche die Erstelleung eines neuen Objects von der Classe Character iniziert.
    enemies = level1.enemies; // Variable namens 'enemies' hat den Wert eines arrays. In diesem Array sind drei Werte erstmal drinnen. Jedes von denen heisst 'new Chicken()', 
    // was den Wert von dem Object new.Chicken hat. bei der Ausfuehrung der Variable enemies, wird jedes mal, drei neue Objekte mit der Klasse new Chicken() erstellt.

    clouds = level1.clouds; // Variable clouds hat ebenfalls ein array, wo jedoch nur eine Classe drinnen ist, was demnach bedeutet, dass nur ein Objekt generiert wird, beim Aufruf der Variablen.


    backgroundObjects = level1.backgroundObjects; // variable namens backgroundobjects, wo jeweils in einem array, bereits drei classen verfuegbar sind, und jeweils ein path zum Bild als variable weitergegeben wurde und 

    // backgroundSky = [ // variable backgroundSky, welcher eigentlich auch haette in dem Object backgroundObject hineingekonnt, jedoch wollte ich es auslagern, da der Himmel nicht so sehr in die 
    //     new BackgroundSky('../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/air.png', 0, 0), // Landschaften reinpasst. Ist Ebenfalls im Array.
    //     new BackgroundSky('../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/air.png', 0, 720) // Landschaften reinpasst. Ist Ebenfalls im Array.
    // ];
    canvas; // eine neue Variable namens 'canvas'. Eine hatten wir bereits in der game.js. Kein Plan was dies bedeutet
    ctx; // eine Variable namen ctx;, welche in Objektorientierter Programmierung fuer "Canvas Rendering Context" steht. Ist ein Objekt welch Methoden und Eigentschaften bereitstellt um
    // Grafiken auf einem HTML Canvas Element (die schwarze box in der index.html) zu zeischnen und zu manipulieren. i.d.R wird ctx; mit canvas verwendet um 2D grafiken auf einer Web zu erstellen.
    keybard;
    camera_x = 0;
    statusBar = new StatusBar();

    constructor(canvas, keyboard) { // constructor functionen um Instanzen in einer Klasse zu erstellen. Hier werden die Instanzen von ctx gestllt fuer die 2d Grafik und canvas wird = canvas gestellt.
        this.ctx = canvas.getContext('2d'); // this. wird auf die obrige Variable ctx zugegriffen. Ohne das this. wuerde eine neue Variable namens ctx innerhalb der function generiert werden.
        this.canvas = canvas; // this. wird die Variable canvas von oben hergeleitet und der variable canvas aus dem Parameter in der function uebergeben. 
        //Der Wert wird von canvas von oben aus dem Paramter nach canvas unten rechts weitergeleitet bis zu this.canvas nach unten links weitergegeben.
        this.keyboard = keyboard;
        this.draw(); // function draw wird ausgefuehrt. this. steht da vor, weil wir keine neue  function schreiben sondern auf eine function in der Classe zugreifen, welche bereits generiert ist.
        this.setWorld();
        this.checkCollisions();
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy)) {
                    this.character.hit();
                }
            });
        }, 200);
    }

    setWorld() {
        this.character.world = this;
    }

    draw() { // function draw() ohne Parameter fuehrt weitere functionen aus.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) // .clearRect function loescht den die Animation, welche davor generiert wurde. this.greift auf das ctx zu. Ctx heisst ja
        // das damit im Canvas etwas gezeichnet bzw was entfernt, also einfluss drauf genommen wird. 
        // Mit der Methode .clearRect() loeschen wir die Animation davor. Die Parameter loeschen alles was dacor drinne war.

        this.ctx.translate(this.camera_x, 0);


        this.addObjectsToMap(this.level.backgroundObjects);  
        this.addToMap(this.character);
        this.addToMap(this.statusBar);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        
        

        this.ctx.translate(-this.camera_x, 0);


        let self = this; // hier wird das schluesselwort this in eine variable gepackt, da die methode requestAnimationFrame, dieses so nimmt erkennt. Ist ein Trick um den Bug zu entgehen.
        requestAnimationFrame(function () { // Methode requestAnimationFrame() stellt so viele bilder pro sekunde dar, wie die Grafikkarte des ausshaelt. In der Methode ist eine Function
            self.draw(); // die die function draw(), wo die methode drin ist die ganze Zeit ausfuehrt, ohne Pause.
        });
    }

    addObjectsToMap(objects) { // function addObjectsToMap hat den Parameter objects, welche von den Aufrufen der functionen (ab Zeile 37 uebernommen wird.) Hier haben wir eine forEach
        objects.forEach(o => { // Schleife, die solange die Variablen von Parameter durchgeht, bis jede einzelne durchiteriert wurde.
            this.addToMap(o); // diese fuehrt dann bei jedem Durchgang die function addToMap aus und uebergibt den Parameter von der jeweiligen Variablen weiter.
        });
    }

    addToMap(mo) { // function addToMap fuegt die jeweiligen Objekte in das Canvas mithilfe von ctx hinzu. Dabei hilft die Mehthode drawImage() weiter.
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        
        mo.drawFrame(this.ctx);

        

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}