var movingRect;
var fixedRect;
var gameObj1;


function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(200, 200, 50, 80);
  movingRect.shapeColor="green";
  movingRect.velocityY=-5;
  fixedRect=createSprite(400, 200, 80, 30);
  fixedRect.shapeColor="green";
  fixedRect.velocityY=+5;

  gameObj1 = createSprite(100, 200, 40, 50);
  gameObj1.shapeColor="blue";
  gameObj1.velocityY = -3;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

bounceOff(movingRect, gameObj1);

if(isTouching(movingRect, gameObj1)){
  movingRect.shapeColor = "red";
  gameObj1.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  gameObj1.shapeColor = "green";
}
  drawSprites();
}

