function setup() {
  createCanvas(400, 400);
}

function draw() {
  //fare cielo scuro
  background("darkblue");
  //disegnare la luna
  fill( "yellow");
  stroke("white");
  strokeWeight(10);
  circle(300,75,100);
  //prima della forma desiderata cambi i parametri di fill e stroke
  fill("green");
  stroke ("darkgreen")
  strokeWeight(5);
  rect(0,200,400,200);
  //l'ordine è molto importante per disegnare
  fill("white")
  stroke(0);
  strokeWeight(2);
  textSize(20);
  text("C'era una volta...",200,350);

}
