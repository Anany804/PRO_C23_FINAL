var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1 = new Box(350, height- 35 - 25, 10, 50);
	box2 = new Box(450, height - 35 - 25, 10, 50);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  text("Press down arrow to take out the package and then press up arrow to release", 200, 100);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
box1.display();
box2.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) 
  {
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false});
	World.add(world, packageBody);
  }

  if (keyCode === LEFT_ARROW)
  {
	helicopterSprite.x = helicopterSprite.x - 5;
  }

  if (keyCode === RIGHT_ARROW)
  {
	helicopterSprite.x = helicopterSprite.x + 5;
  }
}