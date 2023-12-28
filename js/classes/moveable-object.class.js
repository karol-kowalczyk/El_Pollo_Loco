class MoveableObject {
    x = 10;
    y = 137;
    img;
    width= 100;
    height= 150;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {

    }
}