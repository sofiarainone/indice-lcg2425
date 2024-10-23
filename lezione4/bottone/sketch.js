let button;
let elem;
let dice = 1;
let numbers = [1, 2, 5, 79];
let colors = ["red", "pink","blue", "orange", "yellow", "green",];


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
  let color= colors[dice-1];
  fill(color);
  textSize(30);
  text("Dice value "+ dice, 5 ,300);


}

function rollDice(){
  dice = random(1,6);
  dice = ceil(dice);

}