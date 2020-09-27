const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;

function setup() {
  var canvas = createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  polygon = new Polygon(50,200,-20);
  sling = new SlingShot(polygon.body,{x: 150, y: 200});

  ground = new Ground(500, 580, 1000, 40);
  stand = new Ground(500,450,300,20);

  box1 = new Box(375, 415, 50, 50);
  box2 = new Box(425, 415, 50, 50);
  box3 = new Box(475, 415, 50, 50);
  box4 = new Box(525, 415, 50, 50);
  box5 = new Box(575, 415, 50, 50);
  box6 = new Box(625, 415, 50, 50);

  box7 = new Box(400, 365, 50, 50);
  box8 = new Box(450, 365, 50, 50);
  box9 = new Box(500, 365, 50, 50);
  box10 = new Box(550, 365, 50, 50);
  box11 = new Box(600, 365, 50, 50);

  box12 = new Box(425, 315, 50, 50);
  box13 = new Box(475, 315, 50, 50);
  box14 = new Box(525, 315, 50, 50);
  box15 = new Box(575, 315, 50, 50);

  box16 = new Box(450, 265, 50, 50);
  box17 = new Box(500, 265, 50, 50);
  box18 = new Box(550, 265, 50, 50);

  box19 = new Box(475, 215, 50, 50);
  box20 = new Box(525, 215, 50, 50);

  box21 = new Box(500, 165, 50, 50);

  if(box1.body.speed >= 4){
    box1.remove();
    score++;
  }
  if(box2.body.speed >= 4){
    box2.remove();
    score++;
  }
  if(box3.body.speed >= 4){
    box3.remove();
    score = score + 1;
  }
  if(box4.body.speed >= 4){
    box4.remove();
    score = score + 1;
  }
  if(box5.body.speed >= 4){
    box5.remove();
    score = score + 1;
  }
  if(box6.body.speed >= 4){
    box6.remove();
    score = score + 1;
  }
  if(box7.body.speed >= 4){
    box7.remove();
    score = score + 1;
  }
  if(box8.body.speed >= 4){
    box8.remove();
    score = score + 1;
  }
  if(box9.body.speed >= 4){
    box9.remove();
    score = score + 1;
  }
  if(box10.body.speed >= 4){
    box10.remove();
    score = score + 1;
  }
  if(box11.body.speed >= 4){
    box11.remove();
    score = score + 1;
  }
  if(box12.body.speed >= 4){
    box12.remove();
    score = score + 1;
  }
  if(box13.body.speed >= 4){
    box13.remove();
    score = score + 1;
  }
  if(box14.body.speed >= 4){
    box14.remove();
    score = score + 1;
  }
  if(box15.body.speed >= 4){
    box15.remove();
    score = score + 1;
  }
  if(box16.body.speed >= 4){
    box16.remove();
    score = score + 1;
  }
  if(box17.body.speed >= 4){
    box17.remove();
    score = score + 1;
  }
  if(box18.body.speed >= 4){
    box18.remove();
    score = score + 1;
  }
  if(box19.body.speed >= 4){
    box19.remove();
    score = score + 1;
  }
  if(box20.body.speed >= 4){
    box20.remove();
    score = score + 1;
  }
  if(box21.body.speed >= 4){
    box21.remove();
    score = score + 1;
  }
}

function draw() {
  background(0); 
  Engine.update(engine);
  
  ground.display();
  stand.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();
  
  textSize(30);
  fill("white");
  text("SCORE: "+score, 750, 40);
 
  polygon.display();
  sling.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(polygon.body);
  }
}