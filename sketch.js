
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;

var beyblade1, beyblade2,beyblade3,beyblade4;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

  ground = Bodies.rectangle(0,400,400,20,ground_options);
  World.add(world,ground); 
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  beyblade1 = new Ground(50,370,50,30);
  beyblade2 = new Ground(150,370,50,30);
  beyblade3 = new Ground(250,370,50,30);
  beyblade4 = new Ground(350,370,50,30);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  beyblade1.show();
  beyblade2.show();
  beyblade3.show();
  beyblade4.show();

 
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,750,20);
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  