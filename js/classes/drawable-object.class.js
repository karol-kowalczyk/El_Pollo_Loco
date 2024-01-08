class DrawableObject {
    x = 100;
    y = 137;
    width = 100;
    height = 150;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Chicken|| this instanceof BabyChicken || this instanceof BabyChickenJumping) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

        if (this instanceof Heart ) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y +30, this.width, this.height -40);
            ctx.stroke();
        }

        if (this instanceof Coins ) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x +90, this.y +90, this.width -180, this.height -180);
            ctx.stroke();
        }


        if (this instanceof Bottle || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x +60, this.y +60, this.width -120, this.height -120);
            ctx.stroke();
        }
 
        if (this instanceof Character ) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + 30, this.y +120, this.width - 60, this.height - 140);
            ctx.stroke();
        }
        
        if (this instanceof Endboss ) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y + 70, this.width - 60, this.height -100);
            ctx.stroke();
        }
    }

    /**
 * 
 * @param {Array} arr - ['img/image1.png', 'img/image1.png', ...] ganz viele Bilder sollen in das array rein 
 */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}