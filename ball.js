class Ball{
    constructor(x,y,radius){
        var options ={
            isStatic:true,
            restitution :0,
            friction :0,
            density :1.2
        
        }
        this.body = Bodies.circle(x,y,20,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
     
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}