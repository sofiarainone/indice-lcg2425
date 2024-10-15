let canvasXMax=800, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
let slider;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  // minumo, massimo, default, step
  slider = createSlider(0,255,0,1);
  slider.position(0,canvasYMax-60);
  slider.size(200);
}
function draw() {
  background("navy");
  //moon
  frameRate(5);
  colorMode(RGB);
  fill('hotpink');
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(moonXpos, 50, 100)
  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(moonXpos+50, 50,100);

// //metodo aggiornamento 1
//   moonXpos= moonXpos+1;
// //per far muovere la luna 
// //se la luna esce dai bordi ricominciamo il processo
// if(moonXpos>canvasXMax){//usciamo dal foglio
//   moonXpos=moonXpos-200;
//   moonXpos=0;
// }

//metodo aggiornamento 2
//aggiunge 1 per ogni frame disegnato
moonXpos=frameCount*5 % canvasXMax;//operatore che da il resto della divisione intera
//1 % 400 = 0, resto 1 
//2 % 400 = 0, resto 2


  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 100, house_width=100;
  for(let numero_case=0; numero_case<3; numero_case++){
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
    fill("slider.value");
    let roof_height=80;
    triangle(x_casa, y-house_height , x_casa+house_width, y-house_height, x_casa+(house_width/2), y-house_height-roof_height);
    x_casa += house_width+30;
  }
  x_casa=0;
//rollover= agiamo se passiamo sopra
// if passiamo sopra facciamo cose 
let left_corner = y-house_height;
let sliderValue = slider.value();
if((mouseX> x_casa)&&(mouseX < x_casa + house_width)&&(mouseY > left_corner)&&(mouseY < left_corner+house_height))
{
  fill(sliderValue);
  rect(x_casa, y-house_height , house_width, house_height);
} else{
  fill("sliderValue");
  rect(x_casa, y-house_height , house_width, house_height);

}

//stelle random
//numerostelle = numerostelle+1
//numero+=1
//numero++1
let xStar=0;
let yStar= 0;
for(let numerostelle=0; numerostelle< 5; numerostelle++){
  stroke(random(150,255),random(50,150),random(100,200));
  strokeWeight(random(0,50));
  point(xStar,yStar);
  xStar= random(0,canvasXMax);
  yStar= random(0,canvasYMax/2);//il /2 non fa andare sotto le stelle
}

//blocca animazione
// if (frameCount == 50){
//   noLoop();
// }
  
  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  text(`${frameCount}`, 5, 50);
}