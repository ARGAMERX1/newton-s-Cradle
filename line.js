class Line{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
  
    
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   
    
    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
    
            
            
        }
    }
    
