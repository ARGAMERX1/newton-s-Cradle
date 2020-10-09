
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,line,box; 
var ball2,ball2,ball3,ball4,ball5;



function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

box = new Roof(400,400,350,25);
ball3 = new Ball(350,400);
ball2 = new Ball(275,400);
ball1 = new Ball(250,400);
ball4 = new Ball(400,400);
ball5 = new Ball(450,400);
ball6 = new Ball(500,400);

line = new Line(body.ball1{x:100,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

box.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
ball6.display();

line.display();
  ball1.display();
  drawSprites();
 
}



