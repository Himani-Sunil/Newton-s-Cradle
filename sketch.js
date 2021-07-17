const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
//var rope1
//var rope2
//var rope3
//var rope4



function setup() {
	createCanvas(800, 600);
	//rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution:0.1
   
	 }
	var ball2_options={
		
		restitution:0.1
   
	 }
	 var ball3_options={
		
		restitution:0.1
   
	 }
	 var ball4_options={
		
		restitution:0.1
   
	 }
	 var ball5_options={
		
		restitution:0.1
   
	 }
	 ball = Bodies.circle(200,50,10,ball_options);
	 World.add(world,ball);
   
	 ball2 = Bodies.circle(200,50,10,ball2_options);
	 World.add(world,ball2)

	 ball3= Bodies.circle(200,50,10,ball3_options)
	 World.add(world,ball3)

	 ball4= Bodies.circle(200,50,30,ball4_options)
	 World.add(world,ball4)

	 ball5= Bodies.circle(400,200,30,ball5_options)
	 World.add(world,ball5)

	 con = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:230,
		stiffness:0.1
	  });

	World.add(world,con);

	con2 = Matter.Constraint.create({
		pointA:{x:350,y:100},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:230,
		stiffness:0.1
	  });

	World.add(world,con2);

	con3 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:230,
		stiffness:0.1
	  });

	World.add(world,con3);

	con4 = Matter.Constraint.create({
		pointA:{x:450,y:100},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:230,
		stiffness:0.1
	  });

	World.add(world,con4);

	con5 = Matter.Constraint.create({
		pointA:{x:500,y:100},
		bodyB:ball5,
		pointB:{x:0,y:0},
		length:230,
		stiffness:0.1
	  });

	World.add(world,con5);

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,250,20,roof_options);
    World.add(world,roof);

	rectMode(CENTER);
//	ellipseMode(RADIUS);

//	Engine.run(engine);
	
  
}

function draw() {
 // rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,50)
 ellipse(ball2.position.x,ball2.position.y,50)
  ellipse(ball3.position.x,ball3.position.y,50)
  ellipse(ball4.position.x,ball4.position.y,50)
  ellipse(ball5.position.x,ball5.position.y,50)

  rect(roof.position.x,roof.position.y,250,20);

  //call display() to show ropes here
  push();
  strokeWeight(2)
  stroke(255)
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
  pop()

  push();
  strokeWeight(2)
  stroke(255)
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y)
  pop()

  push();
  strokeWeight(2)
  stroke(255)
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y)
  pop()

  push();
  strokeWeight(2)
  stroke(255)
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y)
  pop()

  push();
  strokeWeight(2)
  stroke(255)
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y)
  pop()
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==LEFT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.02,y:0});
    }
}
