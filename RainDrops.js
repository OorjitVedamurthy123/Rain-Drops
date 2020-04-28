class Rain {
    
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y ,50,50, options);
      this.width = 5;
      this.height = 30;
      
      
      World.add(world, this.body);
    }
   display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill("blue");
      rect(40, 40, this.width, this.height);
      pop();

    }
  };