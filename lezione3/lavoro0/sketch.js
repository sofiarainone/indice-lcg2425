function setup () {
  noLoop();
  createCanvas (windowWidth, windowHeight);
}
  function draw() {
  background('#3c3b4c');

  fill("lightblue")
  noStroke();
  let altezza = 25;
  let gutter = 5;

//10 larghezza rettangolo e 5 distanza
  let columns= windowWidth/(10 + 5);
  // altezza/ altezza rettangolo + spazio verticale
  let rows = windowHeight/(altezza + gutter);

  for(let i=0; i < columns; i++) {
    for(let j=0; j<rows; j++){
      let yPos = j * (altezza+gutter) + random(-2.5, 2.5)
      let xPos = i * 15 + random(-2.5, 2.5)
      rect(xPos,yPos,10,altezza);
    }
  }
}