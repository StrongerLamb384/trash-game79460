class Paper{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction: 0.5,
            density: 1.2,
        }
        this.body = Bodies.circle(x,y,35,options);
        World.add(world,this.body);
        this.image = loadImage("paper.png");
        this.radius = 35;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
//rotate(this.body.angle);
       //ellipseMode(RADIUS);
        //ellipse(0,0,this.radius);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}