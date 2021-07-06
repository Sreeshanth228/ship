
function preload(){
shipImg1=loadAnimation("ship-1","ship-2","ship-3","ship-4")
spriteName.addImage(Seaimg)
}
//code to reset the background






function setup(){
  createCanvas(400,400);
  if(sea.x < 0){

    sea.x =sea.width/2;
  }
}

function draw() {
  background("blue");
 
}