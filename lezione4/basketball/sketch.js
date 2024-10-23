let angle = 5
function setup() {
  createCanvas(400, 400);
  angleMode (DEGREES);

}
function draw() {
  background(220);
  // drawRotateBasketBall(angle);
  drawRotateBasketBall(200, 200, 100, angle)
  drawBasketBall(100, 100, 50)
  angle += 0.7;
  }

  function drawRotateBasketBall(xCenter, yCenter, dBall, angle){
    push();
    translate(xCenter,yCenter);
    rotate(angle);
    drawBasketBall(0, 0, dBall);
    pop();
  }
  
  function drawBasketBall(xCenter, yCenter, dBall){
    fill("hotpink");
    stroke(0);
    strokeWeight(3);
    circle(xCenter, yCenter,dBall)
    line(-50+xCenter,yCenter,50+xCenter,yCenter);
    line(0+xCenter,-50+yCenter,0+xCenter,50+yCenter);
    line(-35+xCenter,-35+yCenter,35+xCenter,35+yCenter);
    line(-35+xCenter,35+yCenter,35+xCenter,-35+yCenter);
  }