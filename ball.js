class Ball{
constructor(x,y){
    var options = {
        restituition: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
    };
    this.r = 25

    this.body = Bodies.circle(x,y,this.r,options);

    this.image = loadImage("bola 2.png");

    World.add(world, this.body);
}
 shoot(){
    var velocity = p5.Vector.fromAngle()

 }

 display(){
    var angle=this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    image(CENTER);
    this.image(this.image,0,0,this.r,this.r);
    pop();

 }

}
























