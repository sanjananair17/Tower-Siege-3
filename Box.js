class Box{ 
  constructor(x, y, width, height) { 
  var options = { 
    friction : 1.0,
    density: 0.001
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width; this.height = height; 
  World.add(world, this.body); 
  this.Visiblity = 255;
} 
  display(){ 
    if(this.body.speed < 4){
      var angle = this.body.angle; 
      var pos= this.body.position; 
      strokeWeight(0.8);
      fill("green");
      push(); 
      translate(pos.x, pos.y); 
      rotate(angle); 
      rectMode(CENTER);
      rect(0,0,this.width, this.height); 
      pop(); 
    } else {
        this.remove();
    }
  }
  remove(){
    World.remove(world,this.body);
  }
}