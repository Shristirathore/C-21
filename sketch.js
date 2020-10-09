var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect=createSprite(200,300,50,90);
  rect2=createSprite(500,400,50,90);
  rect3=createSprite(70,290,50,90);
  rect4=createSprite(100,600,50,90);
  rect.shapeColor = "green";
  rect.debug = true;
  rect2.shapeColor = "green";
  rect2.debug = true;
  rect3.shapeColor = "green";
  rect3.debug = true; 
  rect4.shapeColor = "green";
  rect4.debug = true;
  
}

function draw() {
  background(0,0,0);  
  rect.x = World.mouseX;
  rect.y = World.mouseY;

 if( isTouching(rect,rect2) ){
  rect.shapeColor = "red";
  rect2.shapeColor = "red";
 
 }
 else if (isTouching(rect,rect3)){
  rect.shapeColor = "red";
 // rect2.shapeColor = "green";
  rect3.shapeColor = "red";
 }
 else{
  rect.shapeColor = "green";
  rect2.shapeColor = "green";
  rect3.shapeColor = "green";

 }
  
  drawSprites();
}










