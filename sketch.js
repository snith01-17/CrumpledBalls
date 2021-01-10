
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	paper1 = new Paper2(100,100,30);
	dustbin1 = new Dustbin(938,200,20,85);
	dustbin2 = new Dustbin(1062,200,20,85);
  dustbin3 = new Dustbin(1000,200,195,20);
  
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1200,
      height: 700,
      wireframes: false
    }
  });

  Render.run(render);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  
  ground.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-100})

   }

}

