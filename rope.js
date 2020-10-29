class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.8,
        
        }
  
        this.pointB = pointB
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    display(){
        var pointA = this.body.bodyA.position
        var pointB = this.pointB
        strokeWeight(2);
        stroke("white");

        
        line(pointA.x,pointA.y,pointB.x,pointB.y)
            
            
        }
    }
    
