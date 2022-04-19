//namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background("white");

}

