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
  stroke("hotpink")
  strokeWeight(30);
  let x_stars_primordiale = 10;
  let y_stars_primordiale =20
  point (x_stars_primordiale,y_stars_primordiale)
  let passo=1;
  //for (init; test; update){corpo}
  for(let i=0; i<50; i = i+passo){
    strokeWeight (i*3);
    if(i%2==0){
      //corpo di ramo
      stroke ("white");
    } else{
      //altrimenti questo
      stroke ("hotpink");
    }
    point (x_stars_primordiale*i, y_stars_primordiale+i)

  }
  fill("white")
  stroke(0);
  strokeWeight(2);
  textSize(20);
  text("C'era una volta...",200,350);

}
