class DrawableObject{
    img;
    imageCash = [];
    x = -20;
    y;
    width = 250;
    height = 250;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    
    drawFrame(ctx){
        if(this instanceof Character || this instanceof GreenSlime || this instanceof BlueSlime){
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width,this.height);
        ctx.stroke();
    }}

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCash[path] = img;
        });
        
    }
}