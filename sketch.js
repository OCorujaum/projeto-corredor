var corredor, corredorImg;
var caminho, caminhoImg;

function preload(){
  caminhoImg = loadImage("path.png");
  corredorImg = loadAnimation("Runner-1.png","Runner-1.png","Runner-2.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  caminho = createSprite(200,440);
  caminho.addImage(caminhoImg);
  caminho.scale=1.32;

  corredor = createSprite(200,380);
  corredor.addAnimation("corredorAni",corredorImg);
  corredor.scale=0.05;





  

}

function draw() {
  background(0);
  drawSprites();
  if(keyDown(RIGHT_ARROW) && corredor.x==200){
  corredor.x=340;
  }
  if(keyDown(RIGHT_ARROW) && corredor.x==70){
    corredor.x=200
  }
  if(keyDown(LEFT_ARROW) && corredor.x==340){
    corredor.x=200;

  }
  if(keyDown(LEFT_ARROW) && corredor.x==200){
    corredor.x=70;


  }

}
