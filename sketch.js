const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world



function setup(){
createCanvas(1200,600);
engine=Engine.create();
world=engine.world;

ground= new Ground(600,600,1200,20);
ball = new Ball(200,200,80,80)
rope = new Rope(ball.body,{x:500,y:50})
box1=new Box (700,100,70,70);
box2=new Box (700,100,70,70);
box3=new Box (700,100,70,70);
box4=new Box (700,100,70,70);
box5=new Box (700,100,70,70);
box6=new Box (700,100,70,70);
}




function draw(){
background(0)
Engine.update(engine)

ground.display();
ball.display();
rope.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();

}

function mouseDragged(){
 Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

