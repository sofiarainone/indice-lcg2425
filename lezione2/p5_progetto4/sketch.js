let xsize = 800; 
let ysize = 400; 

function setup() {
  createCanvas(xsize, ysize);
}

function draw() {
  background("white"); 

  let passoX = 160;  
  let passoY = 120; 
  //distanze
  let count = 0; //per fermarlo a 8 volte

  for (let i = 0; i < 4; i++) {  
    for (let j = 0; j < 2; j++) {
      if (count < 8) {  
        let x = 100 + i * passoX;  // spazio a sinistra
        let y = 70 + j * passoY;    

        fill("pink");  
        stroke("black");  
        strokeWeight(0.5);
        ellipse(x, y, 100, 100);  
        
        fill("black");
        ellipse(x - 20, y - 10, 15, 25);  
        ellipse(x + 20, y - 10, 15, 25);  
        
        fill("white");
        ellipse(x - 20, y - 15, 8, 12);  
        ellipse(x + 20, y - 15, 8, 12);  
        
        fill("red");
        ellipse(x, y + 20, 15, 10);  
        
        strokeWeight(0);
        fill("red");
        ellipse(x - 30, y + 5, 15, 10);  
        ellipse(x + 30, y + 5, 15, 10);  
        
        strokeWeight(0.5);
        fill("red");
        ellipse(x - 35, y + 40, 30, 20);  
        ellipse(x + 35, y + 40, 30, 20);  
        
        strokeWeight(0.5);
        fill("pink");
        ellipse(x - 50, y + 10, 30, 20);  
        ellipse(x + 50, y + 10, 30, 20);  

        count++;  // contatore
      }
    }
  }
}
