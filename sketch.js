
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var backGroundImg;
var doll;
function preload(){
  backGroundImg=loadImage("snow3.jpg");
  
}
function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;
 
// ground=new Ground(600,height,800,20);
  doll= new Doll(500,100,10,10);
}

function draw() {
  background(backGroundImg);
  Engine.update(engine);
   text(mouseX+","+mouseY,mouseX,mouseY);
 
  
  
 doll.display();

  drawSprites();
}