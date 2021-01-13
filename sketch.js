
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    var bobDiameter=20;
	roofObject=new roof(200,350,120,20)
   bobObject1=new bob(160,500,bobDiameter,"red");
   bobObject2=new bob(185,500,bobDiameter,"black");
   bobObject3=new bob(210,500,bobDiameter,"blue");
   bobObject4=new bob(235,500,bobDiameter,"orange");
   bobObject5=new bob(260,500,bobDiameter,"green");
   rope1=new rope(bobObject1.body,roofObject.body,bobDiameter*1.5,0,"red")
   rope2=new rope(bobObject2.body,roofObject.body,bobDiameter*1,0,"black")
   rope3=new rope(bobObject3.body,roofObject.body,bobDiameter*0.5,0,"blue")
   rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*0,0,"orange")
   rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*-1,0,"green")	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}

function keyPressed(){

 if(keyCode===UP_ARROW){

  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:200,y:-200});
 }


}

