class Dustbin{
constructor(x,y,width,height){
    var options ={
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png");
}
display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    fill(255,0,255);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
}
}