const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_img, polygonBody;

function preload() {
  polygon_img = loadImage("red_octagon.png")
}

function setup() {
  createCanvas(1000,600);
  engine= Engine.create();
  world = engine.world;

  ground = new Ground(500,580,1000,40);
  stand = new Ground(500, 450, 300, 20);

  box1 = new BaseClass(375, 415, 50, 50);
  box2 = new BaseClass(425, 415, 50, 50);
  box3 = new BaseClass(475, 415, 50, 50);
  box4 = new BaseClass(525, 415, 50, 50);
  box5 = new BaseClass(575, 415, 50, 50);
  box6 = new BaseClass(625, 415, 50, 50);

  box7 = new BaseClass(400, 365, 50, 50);
  box8 = new BaseClass(450, 365, 50, 50);
  box9 = new BaseClass(500, 365, 50, 50);
  box10 = new BaseClass(550, 365, 50, 50);
  box11 = new BaseClass(600, 365, 50, 50);

  box12 = new BaseClass(425, 315, 50, 50);
  box13 = new BaseClass(475, 315, 50, 50);
  box14 = new BaseClass(525, 315, 50, 50);
  box15 = new BaseClass(575, 315, 50, 50);

  box16 = new BaseClass(450, 265, 50, 50);
  box17 = new BaseClass(500, 265, 50, 50);
  box18 = new BaseClass(550, 265, 50, 50);

  box19 = new BaseClass(475, 215, 50, 50);
  box20 = new BaseClass(525, 215, 50, 50);

  box21 = new BaseClass(500, 165, 50, 50);

  imageMode(CENTER);
  polygonBody = Bodies.circle(50, 200, 20);
  World.add(world, polygonBody);

  sling = new SlingShot(polygonBody,{x:100, y:200});
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
  box14.display()
  box15.display();

  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();

  sling.display();

  image(polygon_img, polygonBody.position.x, polygonBody.position.y, 40, 40);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygonBody.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}