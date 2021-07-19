const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.8
	}

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
    ball = Bodies.circle(320,200,20,ball_options);
	World.add(world,ball);

	ball2 = Bodies.circle(360,200,20,ball_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(400,200,20,ball_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(440,200,20,ball_options);
	World.add(world,ball4);
	
	ball5 = Bodies.circle(480,200,20,ball_options);
	World.add(world,ball5);
	

	con = Matter.Constraint.create({
		pointA:{x:320,y:100},
		bodyB:ball,
		length:100,
		stiffness:0.1
	});
	World.add(world,con);

	con2 = Matter.Constraint.create({
		pointA:{x:360,y:100},
		bodyB:ball2,
		length:100,
		stiffness:0.1
	});
	World.add(world,con2);

	con3 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball3,
		length:100,
		stiffness:0.1
	});
	World.add(world,con3);

	con4 = Matter.Constraint.create({
		pointA:{x:440,y:100},
		bodyB:ball4,
		length:100,
		stiffness:0.1
	});
	World.add(world,con4);

	con5 = Matter.Constraint.create({
		pointA:{x:480,y:100},
		bodyB:ball5,
		length:100,
		stiffness:0.1
	});
	World.add(world,con5);
	

}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
ellipse(ball.position.x,ball.position.y,20);
ellipse(ball2.position.x,ball2.position.y,20);
ellipse(ball3.position.x,ball3.position.y,20);
ellipse(ball4.position.x,ball4.position.y,20);
ellipse(ball5.position.x,ball5.position.y,20);

push();
strokeWeight(2);
stroke(255);
line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);



pop();


}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode===RIGHT_ARROW)
  {
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
}