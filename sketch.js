
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint=Matter.Constraint
const Body = Matter.Body;
var ground;
var ball1,ball2,ball3,ball4,ball5;
var sling,sling1,sling2,sling3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=createSprite(400,200,300,20);
	ground.shapeColor ="red"
	World.add(world, ground);

	ball1 = new Bob(380,500,20,20);
	ball2 = new Bob(400,500,20,20);
	ball3 = new Bob(420,500,20,20);
	ball4 = new Bob(440,500,20,20);
	ball5 = new Bob(460,500,20,20);

	sling = new Rope(ball1.body,{x:270, y:200});
	sling1 = new Rope(ball2.body,{x:330, y:200});
	sling2= new Rope(ball3.body,{x:390, y:200});
	sling3 = new Rope(ball4.body,{x:450, y:200});
	sling4 = new Rope(ball5.body,{x:510, y:200});
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  sling.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  drawSprites();
 
}

function keyPressed() {
    if(keyCode === 32){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-105,y:100});
		
	}
	if(keyCode === 39){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:55,y:-50});
	  }
	
  }

 