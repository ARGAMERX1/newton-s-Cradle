class Bob{
    constructor(x,y,radius){
        var options ={
            'isStatic':true,
            'restitution':0.1,
            'friction':0.1,
            'density':2
        
        }
        
      this.radius = radius;
       this.x = x;
       this.y = y;
       this.body = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
 push();
        fill("blue");
        translate(pos.x, pos.y);
        rotate(angle);
     
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
  pop();
    }
}