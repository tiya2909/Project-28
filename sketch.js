
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, ground, stone,boy;
var mango1,mango2, mango3, mango4, mango5;


function preload()
{
	boyImg = loadImage("Sprites/boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	tree = new Tree(300,100,400,400);
	
	ground = new Ground(300,400,800,10);

	stone = new Stone(235,420,40,40);

	mango1 = new Mango(600,100);
	mango2 = new Mango(500,150);
	mango3 = new Mango(600,170);
	mango4 = new Mango(750,100);
	mango5 = new Mango(550,100);


	elastic = new Elastic (stone.body,{ x: 235, y: 400});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  image(boyImg,200,300,140,140);
	

  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  //elastic.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  
  drawSprites();
 
}

function mouseDragged(){

    Matter.Body.setPosition(boy, {x:mouseX,y:mouseY});

}

function mouseReleased(){
    elastic.fly()
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position 
	var distance = dist(stoneBodyPosition.x ,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.body.setStatic(lmango.mango,false);

	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body, {x:235,y:420})
		launcherObject.attach(stone.body);
    }

}