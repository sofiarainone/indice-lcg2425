let button;
let elem;
let dice = 1;

function setup() {
  elem= createElement ("h2", "Keep rolling");
  elem.position(0,0);
  createCanvas(400, 400);
  button = createButton("roll the dice");
  button.position(200,200);
  button.mousePressed(rollDice);

}

function draw() {
  background("hotpink");
  stroke("white");
  strokeWeight(2);
  fill("white");
  textSize(30);
  text("Dice value "+ dice, 5 ,300);


}

function rollDice(){
  dice = random(1,6);
  dice = ceil(dice);

}