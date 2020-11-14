class Rope{
    constructor(bodyA, bodyB,posx,posy){
     this.posx = posx;
     this.posy = posy;
     
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.posx,y:this.posy}
            

            
        
        }
  
   //     this.pointB = pointB
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    display(){
        var pointA = this.Rope.bodyA.position
        var pointB = this.Rope.bodyB.position
        strokeWeight(2);
        stroke("green");

        
        line(pointA.x,pointA.y,pointB.x,pointB.y);
            
            
        }
    }
    
