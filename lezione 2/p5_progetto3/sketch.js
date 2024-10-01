let xsize = 400;
let ysize = 400;
//dimensione massima del mio foglio

function setup() {
  createCanvas(xsize, ysize);
}

function draw() {
  //fare cielo scuro
  background("darkblue");
  //disegnare la luna
  fill( "white");
  stroke("yellow");
  strokeWeight(10);
  circle(350,50,100);
  //prima della forma desiderata cambi i parametri di fill e stroke
  fill("green");
  strokeWeight(0);
  rect(0,200,400,200);
  //l'ordine è molto importante per disegnare

  stroke("black")
  strokeWeight(2)
  fill("white")
  rect (0,130,70,70)
  rect (100,130,70,70)
  rect (200,130,70,70)
  rect (300,130,70,70)

  strokeWeight(2)
  stroke("black")
  fill("red")
  triangle (0,130,70,130,35,60)
  triangle (100,130,170,130,135,60 )
  triangle (200,130,270,130,235,60)
  triangle(300,130,370,130,335,60)
}


