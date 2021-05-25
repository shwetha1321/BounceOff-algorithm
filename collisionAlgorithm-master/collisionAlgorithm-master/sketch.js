var fixedRect, movingRect;
var obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200,600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1=createSprite(100,100,50,50)
  obj2=createSprite(200,100,50,50)
  obj3=createSprite(300,100,50,50)
  obj4=createSprite(200,300,50,50)

  //obj3.setCollider("square")
  
  movingRect.velocityY = -3;
  obj4.velocityY = 3;
}

function draw() {
  background(0,0,0);  
  fixedRect.x = World.mouseX;
  fixedRect.y = World.mouseY;
  
  drawSprites();
  if(isTouching(fixedRect,obj1)){
    fixedRect.shapeColor = "red";
    obj1.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    obj1.shapeColor = "green";
  }

  bounceOff(movingRect,obj4);

}

