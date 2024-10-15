function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

}
function draw() {
  background(229);
  strokeWeight(1);
  fill("hotpink");
  translate(mouseX,mouseY);
  rect(50, 50, 100, 50);
  fill("purple");
  rect(0,0,200,30);
  strokeWeight(5);
  point(0,0);
  point(50,50);
  
}