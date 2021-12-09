let tokage = -200

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(150); 
  
//trampoline
  noStroke();
  fill("black");
    rect(385, (windowHeight/2) + 200, 10, 100);
    rect(450, (windowHeight/2) + 200, 10, 110);
    rect(500, (windowHeight/2) + 200, 10, 90);
    rect(552, (windowHeight/2) + 200, 10, 100);

  fill("DimGrey");
    rect(373, (windowHeight/2) + 190, 200, 10);
    ellipse(windowWidth/2, (windowHeight/2) + 200, 200, 20);
  
  strokeWeight(10);
  stroke(0);
    ellipse(windowWidth/2, (windowHeight/2) + 187, 190, 20);

//had classmate help with variable//
let sinValue = sin(radians(frameCount*5))*100; 
  strokeWeight(1);
  noStroke();
  translate (windowWidth/ 2, windowHeight/ 2+sinValue);
    tokageLizard();
}

function tokageLizard(x, y){
//scales
  noStroke();
  fill("SkyBlue");
    circle(-45, -30, 30);
    circle(-51, -6, 30);
    circle(-53, 18, 30);
    circle(-54, 41, 30);

//lizard body
  fill("PowderBlue");
    circle(0, 0, 100);
    ellipse(5, 41, 80, 75)
    bezier (0, 74, -30, 75, -55, -95, -55, 75);
  fill("LightYellow"); 
    ellipse(11, 47, 44, 60);
  
//arms/legs
  movingLimbs();
  
//lizard face
  fill("grey");
    ellipse(-4, -5, 7, 5);
    ellipse(30, -5, 7, 5);
  stroke("grey");
  noFill();
    arc(0, 0, 25, 10, radians(0), radians(90));
    arc(25, 0, 25, 10, radians(90), radians(180));
  stroke("pink");
    line(-13, 3, -17, 0);
    line(-13, 1, -17, -2);
    line(-13, -1, -17, -4);
    line(41, 0, 37, 3);
    line(41, -2, 37, 1);
    line(41, -4, 37, -1);
}

function movingLimbs(){
//got help from classmate on translate/map code//
//arms/legs
  fill("PowderBlue");
push();  
  translate(-1,25);
  sinValue= sin(radians(frameCount * 20));
  m=map(sinValue, -1, 1, 0, 0.6);
  rotate(m);
  ellipse(0, 5, 29, 15);
pop();

push();  
  translate(30,35);
  sinValue= -sin(radians(frameCount * 20));
  m=map(sinValue, 1, -1, 0, 0.6);
  rotate(m);
    ellipse(-1.5, -5, 29, 15);
pop();

noStroke();
    ellipse(-5, 73, 20, 35);
    ellipse(25, 73, 20, 35);
}