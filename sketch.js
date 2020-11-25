var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var red1, red2, red3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
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

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	/*
	red1 = new Red(400, 550, 200, 20);
	red2 = new Red(295, 520, 20, 100);
	red3 = new Red(505, 520, 20, 100);
  */

  red1 = createSprite(390, 535, 200, 50);
  red2 = createSprite(285, 510, 50, 100);
  red3 = createSprite(495, 510, 50, 100);


 
	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
/*
  red1.display();
  red2.display();
  red3.display();
 */
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody, false);
  }
}
