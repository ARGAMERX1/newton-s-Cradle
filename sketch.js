
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var world,engine;
var ball1; 
var ball2,ball2,ball3,ball4,ball5;
var line1,line2,line3,line4,line5;
var roof;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Bob(200,500,30);
	ball2 = new Bob(250,500,30);
	ball3 = new Bob(300,500,30);
	ball4 = new Bob(350,500,30);
	ball5 = new Bob(400,500,30);
	roof = new Roof(300,200,300,40);
	line1 = new Rope(ball1.body,{x:200, y:200});
	line2 = new Rope(ball2.body,{x:250, y:200});
	line3 = new Rope(ball3.body,{x:300, y:200});
	line4 = new Rope(ball4.body,{x:350, y:200});
	line5 = new Rope(ball5.body,{x:400, y:200});
		


	Engine.run(engine);
  
}


function draw() {
	background(0);


	


	roof.display();


ball1.display();
ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();



	line1.display();
line2.display();
line3.display();
line4.display();
line5.display();

 
}
 function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body, ball1.body.position, { x: -200, y: -200 })
	}
} 


