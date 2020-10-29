class Bob{
    constructor(x,y,radius){
        var options ={
            'isStatic':true,
            'restitution':1,
            'friction':0.2,
            'density':1
        
        }
        this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        translate(pos.x, pos.y);
        rotate(angle);
     
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}