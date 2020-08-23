class Box{ constructor(x, y, width, height) 
  { 
  var options = { 
    friction : 1.0,
    density: 0.001
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width; this.height = height; 
  World.add(world, this.body); 
} 
  display(){ 
    var angle = this.body.angle; 
    var pos= this.body.position; 
    strokeWeight(0.8);
    fill("brown");
    push(); 
    translate(pos.x, pos.y); 
    rotate(angle); 
    rectMode(CENTER);
    rect(0,0,this.width, this.height); 
    pop(); 
    } 
  }