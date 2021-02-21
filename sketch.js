
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperImage,dustbinImage,groundObject,dustbinObject
var world;

function preload(){
	dustbinImage=loadImage("dustbingreen.png");
	paperImage=loadImage("paper.png");

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustibin=new Dustbin(720,390,100,10);
	paper=new Paper(100,300,10);
	ground=Bodies.rectangle(width/2,400,width,10)
	dustbin.addImage(dustbinImage);
	paperImage.addImage(paperImage)

	{
		isStatic:true
	};

	world.add(world,ground);

	groundObject=new ground(width/2,670,width,20);
	dustbinObject=new dustbin(1200,650);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObject.display();

}

function keyPressed(){
	if(keyCode === up_Arrow){
		Matter.Body.applyForce(paper.body,paper.body.position,)
	
			

		};
	}
