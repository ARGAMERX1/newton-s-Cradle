
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball,line,box; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Ball(400,400,50,50);
box = new Roof(400,100,100,10);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


  
  drawSprites();
  ball.display();
}



