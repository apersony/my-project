let ground;
let player;
var player_img;
var bg_img;




function preload()
{
  player_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  player = createSprite(100,50,30,30);
  player.addImage(player_img);
  player.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  
  player.position.y+=vy;
  drawSprites();
}


