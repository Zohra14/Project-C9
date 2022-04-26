
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to LIGHT green when RIGHT_ARROW is pressed
  
  
  background("red");
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("purple");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("pink");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("lightblue");
  }
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("lightgreen");
  }


  
  drawSprites();
}

