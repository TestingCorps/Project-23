var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
var box1b,box2b,box3b;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	
	box1=createSprite(width/2+100,height-85,20,100);
	box2=createSprite(width/2-100,height-85,20,100);
	box3=createSprite(width/2,height-45,200,20);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1b = Bodies.rectangle(width/2+100,height-110,20,100, {isStatic:true} );
	box2b = Bodies.rectangle(width/2-100,height-110,20,100, {isStatic:true} );
	box3b = Bodies.rectangle(width/2,height-70,200,20, {isStatic:true} );
	World.add(world, box1b);
	World.add(world, box2b);
	World.add(world, box3b);
	Engine.run(engine);
}


function draw() {
  	rectMode(CENTER);
  	background(0);
  	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y;
	drawSprites();
	fill('red');
	stroke('red');
	rect(box3.x,box3.y,200,20);
	rect(box2.x,box2.y,20,100);
	rect(box1.x,box1.y,20,100);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}



