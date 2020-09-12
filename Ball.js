class Ball{
    constructor(x,y,radius) {
      var options = {
        restitution: 0.3,
        density: 1.2,
        isStatic: true
      }
      this.x= x;
      this.y= y;
      this.radius= radius;
      this.body = Bodies.circle(this.x,this.y,this.radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("pink");
      ellipseMode(RADIUS);
      ellipse(this.x,this.y,this.radius,this.radius);
    }
  }