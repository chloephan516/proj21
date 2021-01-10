
var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  
  //randomizing components
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  //creating the wall
  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor = color(80,80,80);

  //creating the bullet
  bullet = createSprite(200,200,50,20);
  bullet.shapeColor = color("white");
  bullet.velocityX = speed;
}

function draw() {
  background(0);  

  //detecting the collision and changing the color of the wall respectibly
  if (hasCollided(bullet,wall)){
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;

    if (damage > 10){
      wall.shapeColor = color(255,0,0);
    }

    if (damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();

  text("damage: " + damage, 10,15);
}


function hasCollided(lbullet, lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
return false;
}