
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var rooftop;
var Object1,Object2,Object3,object4,object5;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
  rooftop=new roof(350,200,380,40);
	 Object1=new Circle(220,400);
	 Object2=new Circle(280,400);
	 Object3=new Circle(340,400);
	 object4=new Circle(400,400);
	 object5=new Circle(460,400);
     
  chain1=new rope(Object1.body,{x:380,y:195})

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine)
  //rectMode(CENTER);
  rooftop.display();
  Object1.display();
  Object2.display();
  Object3.display();
  object4.display();
  object5.display();
  chain1.display();
 
  //drawSprites();
}

