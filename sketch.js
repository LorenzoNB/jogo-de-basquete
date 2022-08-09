const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;
var player,ball,cesta;
var playerImg, ballImg, fundoImg;
var engine, world;
var angle;
var score=0;
var canvas;
function preload(){
 playerImg=loadImage("jogador.jpg");
 ballImg=loadImage("bola.jpg");
 fundoImg=loadImage("quadra.jpg");

  
}

function setup(){
  canvas=createCanvas(windowWidth,windowHeight);

  
 

}

function draw() {
  
  background(189);
  image(fundoImg,0,0,width,height);
   
  image(playerImg,40,50,100-width,100-height);

        drawSprites();
        
}
