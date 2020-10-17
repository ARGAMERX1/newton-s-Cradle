class Line{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
  
        this.pointB = pointB
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    attach(body){
        this.body.bodyA = body;
    }   
    fly(){
        this.body.bodyA = null;
    }
    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
    
            
            
        }
    }
    
