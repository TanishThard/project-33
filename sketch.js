const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

var ground;

var particle ;
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score=0;
var turn=0;
var gameState="start";

function setup() {
  createCanvas(800,800);
 
	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);
 

  for(var k = 0;k<=width;k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 75;j<=width;j=j+50){
    plinkos.push(new Plinkos(j,75));
  }

  for(var j = 50;j<=width-10;j=j+50){
    plinkos.push(new Plinkos(j,175));
  }

  for(var j = 75;j<=width;j=j+50){
    plinkos.push(new Plinkos(j,275));
  }

  for(var j = 50;j<=width-10;j=j+50){
    plinkos.push(new Plinkos(j,375));
  }


 
  
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  textSize(30);
  text("Score:"+score,20,40);
  fill("white");
  textSize(30);
  text("500",5,550);
  text("500",85,550);
  text("500",165,550);
  text("500",245,550);
  text("100",325,550);
  text("100",405,550);
  text("100",485,550);
  text("200",565,550);
  text("200",645,550);
  text("200",725,550);
  
  Engine.update(engine);

  ground.display();
  if(gameState==="end"){
    textSize(100);
    text("GameOver",150,250);
  }
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(turn>=5)
        gameState="end"
      }
      else if(particle.body.position.x>301&&particle.body.position.x<600){
        score=score+100;
        particle=null;
        if(turn>=5)
        gameState="end"


      }
      else if(particle.body.position.x>601&&particle.body.position.x<900){
        score=score+200;
        particle=null;
        if(turn>=5)
        gameState="end"
      }
    }
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }


  

  
}
function mousePressed(){
  if(gameState!=="end"){
    turn++;
    particle=new Particle(mouseX,10,10,10);
  }

}



