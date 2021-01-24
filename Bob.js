class Bob{
    constructor (x,y,color) {
      var options={
        restitution:1,
        friction:0,
        frictionAir:0.0,
        slop:1,
        inertia:Infinity
      }
      this.body = Bodies.circle(x,y,40,options);
      this.x = x;
      this.y = y;
      this.color = color;
      World.add(world ,this.body);
    }
  
     
   display(){
   
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke("white");
    fill(this.color);
    circle(0,0,80,80);
    pop();
    
   }
  }
   