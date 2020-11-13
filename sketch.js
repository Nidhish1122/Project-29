const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var box11 , box12 , box13 , box14 , box15 , box21 , box22 , box23 , box31 ;
var ball;
var slingshot;
var gamemode;

function setup() 
{
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

  ground = new Ground( 550 , 300 , 200 , 20 );

  box11 = new Box( 460 , 270, 40 , 40 );
  box12 = new Box( 500 , 270, 40 , 40 );
  box13 = new Box( 540 , 270, 40 , 40 );
  box14 = new Box( 580 , 270, 40 , 40 );
  box15 = new Box( 620 , 270, 40 , 40 );
  box21 = new Box( 500 , 230, 40 , 40 );
  box22 = new Box( 540 , 230, 40 , 40 );
  box23 = new Box( 580 , 230, 40 , 40 );
  box31 = new Box( 540 , 270, 40 , 40 );

  ball = new Box( 150 , 150 , 30 , 30 );

  slingshot = new SlingShot( ball.body , {x:150,y:150} );

  gamemode = "unlaunched";
}

function draw() 
{
  Engine.update(engine);
  background(0,0,0);  
  display();
}

function display()
{
  ground.display("red");
  box11.display("blue");
  box12.display("blue");
  box13.display("blue");
  box14.display("blue");
  box15.display("blue");
  box21.display("blue");
  box22.display("blue");
  box23.display("blue");
  box31.display("blue");
  ball.display( "yellow" );
  slingshot.display();
}

function mouseDragged()
{
  if( gamemode==="unlaunched" )
  {
    Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}
function mouseReleased()
{
  slingshot.fly();
  gamemode = "launched";
}
function keyPressed()
{
  if( keyCode===32 )
  {
    slingshot.attach( ball.body );
    gamemode = "unlaunched";
  }
}