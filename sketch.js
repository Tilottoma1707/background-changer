var r = 0;
var g = 80;
var b=200;


function setup(){

  createCanvas(600,400);
}


function draw(){
  r=map(mouseX,0,600,0,360);
  g =map(mouseX,50,900,80,100);
  b= map(mouseX,0,1200,200,0);
  background(r,g,b);
  fill("yellow");
  ellipse(mouseX,150,50,50); 
}