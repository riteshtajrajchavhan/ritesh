
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(400, 650, 1200, 10);
	groundSprite.shapeColor=color(255)

	ground = Bodies.rectangle(400, 650, 1200, 10 , {isStatic:true} );
	World.add(world, ground);

	wall2 = createSprite(600,630,200,10 );
	wall2.shapeColor=color("red")

	wall1 = createSprite(500,585,10,100 );
	wall1.shapeColor=color("red")

	wall3 = createSprite(700,585,10,100 );
	wall3.shapeColor=color("red");

	wall3 = Bodies.rectangle(700,585,10,100, {isStatic:true} );
	World.add(world, wall2);

	wall1 = Bodies.rectangle(500,585,10,100, {isStatic:true} );
	World.add(world, wall2);

	wall2 = Bodies.rectangle(600,600,200,10, {isStatic:true} );
	World.add(world, wall2);

	var ball_options ={
		
		restitution:0.3,
		friction:0.5,
		density:1.2
    }
	
    ball = Bodies.circle(40,500,20, ball_options);
    World.add(world,ball);
	
	

}


function draw() {
  background(0);
  Engine.update(engine);
 drawSprites();
 ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);



}



function keyPressed() {
	if (keyCode === UP_ARROW) {
	  
	   
	   Matter.Body.applyForce(ball,10,{x:60,y:-60});
		
		
	 }
   }