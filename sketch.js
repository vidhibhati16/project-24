
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paper1;
var ground1;



function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(600, height, 1200, 20);
	paper1 = new paper(100, 650);


	
}


function draw() {
  background(0);

  Engine.Update(engine);
  
  ground1.display();
  paper1.display();
  
 
}



