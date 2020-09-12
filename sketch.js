
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ball1,ball2,ball3,ball4,ball5,roof1,rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(200,500,50);
	ball2 = new Ball(300,500,50);
	ball3 = new Ball(400,500,50);
	ball4 = new Ball(500,500,50);
	ball5 = new Ball(600,500,50);
	roof1 = new Roof(400,150,520,50);
	rope1 = new Rope(ball1,roof1,-190,0);
	rope2 = new Rope(ball2,roof1,-95,0);
    rope3 = new Rope(ball3,roof1,0,0);
	rope4 = new Rope(ball4,roof1,95,0);
	rope5 = new Rope(ball5,roof1,195,0);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1600,
			height: 700,
			wireframe: false
		}
	});

	Engine.run(engine);
	Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-20});
	}
}




