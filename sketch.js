let rectangles = [];
const xPosList = [400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900,3000,3100,3200,3300,3400,3500,3600,3700,3800,3900,4000,4100,4200,4300,4400] 
const yPosList = [200, 290, 380, 470, 560, 650, 740,830,920,1010,1100]
let value = 0

function setup() {
 createCanvas(windowWidth, windowHeight);
 //instantiate the class
 for(let i=0; i < 40; i++){
   rectangles[i] = new Rect(350 , 200 , 50, 90);
 }
 frameRate(2)
}

function draw() {
 background(0);
 //create a grid of rectangles 90x50
 for(let x = 0; x < windowWidth; x += 50)  
  { for(let y = 200; y < 1200; y+=90) {
 stroke(255);
 strokeWeight(1,5);
 noFill();
 rect(x, y, 50, 90);
 }
 }

//write under the rectangle a quote
 let myText = "click to make it shine";
 textFont("Red Hat Display");
 textAlign(CENTER);
 textStyle(NORMAL);
 textSize(45);
 fill(300);
 text(myText, width/2, windowHeight-200);

 for(let i = 0; i < rectangles.length; i++){
   rectangles[i].show();
   rectangles[i].updatePosition();
 }
} 

//change the brightness with the click of the mouse
function mousePressed() {
   if (value === 0) {
     value = 50;
   } else {
     value = 0;
   }
 }

//create a class
class Rect {
 constructor(posX, posY, rectwidth, rectheigth) {
   this.x = posX;
   this.y = posY;
   this.width = rectwidth;
   this.height = rectheigth;
 }
 updatePosition() {
   this.x = random(xPosList); 
   this.y = random(yPosList);
 }
 show() {
   push();
   drawingContext.shadowBlur = value;
   drawingContext.shadowColor = color(255, 255, 255);
   strokeWeight(1);
   rect(this.x, this.y, this.width, this.height);
   pop();
 }
}

//make the background responsive
function windowResized() {
 resizeCanvas(windowWidth,windowHeight);
}
