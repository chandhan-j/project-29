class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 15
        }
        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8)
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}