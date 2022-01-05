let x = 0;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(240,240,255); // 0-255 RGB
  noStroke();
  fill(255,0,0);
  ellipse(x,50,100,100);
  x = x + 1;
  fill(255,255,0);
  rect(300,200,100,100);
}