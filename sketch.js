var fairy;
var star;
var animation;
var starImg;
var sound, backImg;


function preload(){
  animation = loadAnimation("fairy1.png", "fairy2.png");
   //preload the images her
   starImg = loadImage("star.png");
   sound = loadSound("JoyMusic.mp3");
   backImg = loadImage("starnight.png");
}

function setup() {
  createCanvas(800, 750);
  sound.loop();
  fairy = createSprite(400,385);
  fairy.scale = 0.2;
  fairy.addAnimation("fairy",animation);
 sound.play();

 
  star = createSprite(640,40);
  star.scale = 0.2;
  star.addImage(starImg);
}


function draw() {
  background(backImg);

  if(keyCode === DOWN_ARROW){
    star.velocityY = 2;
  }
  if(star.y > 375){
    star.velocityY = 0;
    sound.stop();
  }
  movement();
  drawSprites();
}
function movement(){
  if(keyCode === LEFT_ARROW){
    fairy.x = fairy.x-2;
  }
  if(keyCode === RIGHT_ARROW){
    fairy.x = fairy.x+2;
  }
}