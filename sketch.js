
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paper1;
//create a variable for the dustbin
var ground1;



function setup() {
	var canvas = createCanvas(800, 700);
	//rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(600, height, 1200, 20);
	paper1 = new paper(100, 650);

	//create a dustbin
	
	//Engine.run(engine);

	
}


function draw() {
  background(0);

  Engine.Update(engine);
  
  ground1.display();
  paper1.display();
	
//display the dustbin object
  
 
}

//make a function keyPressed() [see hint no. 4]


