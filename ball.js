class Ball{
    constructor(x,y){
        var options ={
            isStatic:true,
            restitution :0,
            friction :0,
            density :1.2
        
        }
        this.body = Bodies.circle(x,y,20,options);
        this.width =33;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
     
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
    }
}