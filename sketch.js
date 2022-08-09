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
 playerImg=loadImage("pngegg.png");
 ballImg=loadImage("bola 2.png");
 fundoImg=loadImage("quadra.jpg");

  
}

function setup(){
  canvas=createCanvas(windowWidth,windowHeight);

  ball= new Ball(1000,925);
 

}

function draw() {
  
  background(189);
  image(fundoImg,0,0,width,height);
   
  image(playerImg,1000,925,1600-width,500-height);
  ball.display();
        drawSprites();
        
}
