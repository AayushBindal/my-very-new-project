var wall;
var bullet;
var speed;
var weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(20,height/2,20,10);

  wall = createSprite(1200,200,thickness, height/2);

  bullet.shapeColor = "white";
  wall.shapeColor = (80,80,80);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background("black");
  bullet.velocityX = speed;

  collide();
  drawSprites();
}

function collide(){
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = "red";
    }
    if(damage<10){
      wall.shapeColor = "green";
    }
  }
}