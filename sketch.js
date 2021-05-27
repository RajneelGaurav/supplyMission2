var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
    //boxcentre = createSprite(350,650,200,20);
	// boxcentre.shapeColor="red";
	// boxleft = createSprite(250,600,20,100);
	// boxleft.shapeColor="red";
	// boxright = createSprite(450,600,20,100);
	// boxright.shapeColor="red";
     boxCenter=new box(350,650,200,20);
	 boxLeft=new box(250,610,20,100);
	 boxRight=new box(450,610,20,100);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	

	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution:0.75,density:2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  boxCenter.display();
  boxLeft.display();
  boxRight.display();
  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) 
 {
    Matter.Body.setStatic(packageBody,false);
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
 


 }
}
