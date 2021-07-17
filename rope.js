class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA=pointA

		con = Matter.Constraint.create({
			pointA:{x:400,y:90},
			bodyB:ball,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		  });
	
		World.add(world,con);

		push();
	strokeWeight(2)
	stroke(255)
	line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
	pop()

	}
	
    

}
