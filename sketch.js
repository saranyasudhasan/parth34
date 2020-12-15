
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var p1,p2,p3,p4,p5,p6;
var c1,c2,c3,c4,c5,c6;

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,200,300,30)
	
	p1 = new Pendulum(530,500)
	p2 = new Pendulum(480,500)
	p3 = new Pendulum(430,500)
	p4 = new Pendulum(380,500)
	p5 = new Pendulum(330,500)
	p6 = new Pendulum(280,500)

	c1 = new Chain(p1.body,{x:530,y:200})
	c2 = new Chain(p2.body,{x:480,y:200})
	c3 = new Chain(p3.body,{x:430,y:200})
	c4 = new Chain(p4.body,{x:380,y:200})
	c5 = new Chain(p5.body,{x:330,y:200})
	c6 = new Chain(p6.body,{x:280,y:200})
	

	Engine.run(engine);
  
}


function draw() {
  background("white");



  ground.display();
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Body.setStatic(p1.body,false)
		Body.applyForce(p1.body,p1.body.position,{x:-50,y:10})
	}
}