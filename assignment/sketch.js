function setup() {
  createCanvas(400, 400);
  noFill(); 
  background(220); 
  
  let margin = 50; 
  let size = 50; 

  let squares = [];

  // Crea 30 quadrati
  for (let i = 0; i < 30; i++) {
    let x = random(margin, width - margin - size); // Posizione orizzontale con margine
    let y = random(margin, height - margin - size); // Posizione verticale con margine
    let colorChoice = random(['red', 'black']); // Colore casuale tra rosso e nero

    squares.push({ x, y, size, color: colorChoice });
  }

  // Disegna i quadrati
  for (let square of squares) {
    stroke(square.color);

    // Disegna i bordi superiori e inferiori
    strokeWeight(2); // Spessore standard
    line(square.x, square.y, square.x + square.size, square.y); // Bordo superiore
    line(square.x, square.y + square.size, square.x + square.size, square.y + square.size); // Bordo inferiore

    // Disegna i bordi sinistro e destro
    strokeWeight(4); // Spessore maggiore per i bordi verticali
    line(square.x, square.y, square.x, square.y + square.size); // Bordo sinistro
    line(square.x + square.size, square.y, square.x + square.size, square.y + square.size); // Bordo destro
  }

  for (let square of squares) {
    if (square.color === 'black') {
      stroke(square.color);
      strokeWeight(2); // Spessore standard
      line(square.x, square.y, square.x + square.size, square.y); // Bordo superiore
      line(square.x, square.y + square.size, square.x + square.size, square.y + square.size); // Bordo inferiore
      strokeWeight(4); // Spessore maggiore per i bordi verticali
      line(square.x, square.y, square.x, square.y + square.size); // Bordo sinistro
      line(square.x + square.size, square.y, square.x + square.size, square.y + square.size); // Bordo destro
    }
  }
}