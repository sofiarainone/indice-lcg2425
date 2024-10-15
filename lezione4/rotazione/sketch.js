let angle = 0
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode (DEGREES);

}
function draw() {
  background("pink");
  push()
  strokeWeight(1);
  fill("hotpink");
  rotate(45);
  // translate(mouseX,mouseY);
  // rotate(45);
  rotate(angle*0.1)
  rect(50, 50, 100, 50);
  pop();
  fill("purple");
  rect(0,0,200,30);
  strokeWeight(5);
  point(0,0);
  point(50,50);
  push();
  translate(200,200);
  rotate(angle);
  fill("hotpink");
  circle(0,0,100)
  line(0,-50,0,50);
  pop();
  angle = angle + 3;
}