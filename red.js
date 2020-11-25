class Red {

    constructor(x,y,width,height){

        var options = {
            isStatic: true, 
        }

        this.body = Matter.Bodies.rectangle(x,y,width,height,options);
        this.body.x = x;
        this.body.y = y;
        this.body.width = width;
        this.body.height = height;
    }


    display(){

        var pos = this.body.position

        rectMode(CENTER);
        strokeWeight(0);
        fill("red");
        rect(pos.x, pos.y, this.body.width, this.body.height)

    }
}