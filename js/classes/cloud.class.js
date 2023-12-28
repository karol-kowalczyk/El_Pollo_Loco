class Cloud extends MoveableObject {
    y = 50;
    width = 500;
    height = 200;


    constructor() { // constructor wird sofort aufgerufen
        super().loadImage('../El_Pollo_Loco/img_pollo_locco/img/5_background/layers/4_clouds/full.png');

        this.x = Math.random() * 500;
        this.animate();
    }

    animate() { // jedes mal wenn sich die seite neu laed (spater wenn sich die Objekte bewegen), wird die Position der Wolke veraendert.
        setInterval( () => { // Methode set interval fuehrt eine function aus, was hier nur die Klammern () sind staende davor mal function
            this.x -= 0.15; // veraendert die Position der Wolken um 0.1 pixel
        }, 1000/60); // so laeuft es 60frames per second also 60fps
        
    }
}