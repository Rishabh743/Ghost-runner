var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  tower = createSprite(windowWidth/2,windowHeight);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  tower.scale=1.5
  ghost=createSprite(tower.x, windowHeight/2)
  ghost.addImage("ghost",ghostImg)
  ghost.scale=0.5
  ghost.velocityY=2
 climbersGroup=new Group()
 doorsGroup=new Group()
spookySound.loop()
}

function draw() {
  
  if (gameState=="play"){
    if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("space")){
      ghost.y-=5
        }
        if(keyDown("right_arrow")&&ghost.x<(tower.width/2+tower.x)){
          ghost.x+=5
          
            }
            if(keyDown("left_arrow")&&ghost.x>(tower.x-tower.width/2)){
//console.log(tower.width/2-tower.x)       
       ghost.x-=5
 
                }
SpawnObstacles()
if(ghost.y>windowHeight||ghost.collide(climbersGroup)){
gameState="end"
console.log(ghost.y)
tower.velocityY=0


}
drawSprites()
 if(gameState=="end"){
  tower.destroy()
  background("black")
  fill("yellow")
  textSize(30)
 text("GAME OVER", windowWidth/2, windowHeight/2)
  } 
  
  }
}
function SpawnObstacles(){
  if(frameCount%100==0){
var door=createSprite(Math.round(random(tower.x+tower.width/2,tower.x-tower.width/2)))
door.addImage("door",doorImg)
door.velocityY=5
var climber=createSprite(door.x,door.y+50)
climber.addImage("climber",climberImg)
climber.velocityY=5
climbersGroup.add(climber)
climber.lifetime=500
door.lifetime=500
  }
}
