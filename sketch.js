const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  polygon = new Polygon(50,200,20);
  sling = new SlingShot(polygon.body,{x: 100, y: 200});

  ground = new Ground(500, 580, 1000, 40);
  stand = new Ground(500,450,300,20);

  /*box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);

  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);

  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);

  box16 = new Box(390,155,30,40);*/

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

  sling.display(); 
  polygon.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  sling.fly();
}