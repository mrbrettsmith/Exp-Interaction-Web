let bubbleBackground = [];
// const bubbleColors = ["#4f5bdb", "#66cdaa", "#00a4b2"];
const bubbleColors = ['rgba(148, 198, 143, .25)', 'rgba(229, 78, 252,.25)','rgba(253, 255, 148,.25)']


let bc;

function setup() {
  createCanvas(800, 800);
//   randomCol = random(bubbleColors);
//   randomCol = floor(randomCol);
//     rbc = bubbleColors[randomCol]



  for (let i = 0; i < 5; i++) {
    
  bubbleBackground[i] = new Blob( 
  random(1, 255),
  random(1, 255),
  random(1, 255)
  
  )
  }
}

function draw() {

  background(220);
  for (let i = 0; i < 5; i++) {
    
    fill('yellow') 
  bubbleBackground[i].move();
  bubbleBackground[i].show();
  }
  
  rect(300, 300, 100, 100)
  
}

class Blob {
  constructor( rd, bl, gr) {
    this.x = random(100,600);
    this.y = random(100,600);
    this.r = random(50,300);
    this.xspeed = random(-1, 3);
    this.yspeed = random(-3, 1);
    this.bubCol = random(bubbleColors);
    this.red = rd;
    this.blue = bl;
    this.green = gr;
    // this.bc = rbc
  }
  
  move() {
		if (this.x > height || this.x < 0) {
			this.xspeed = this.xspeed * -1;
		}
		if (this.y > height || this.y < 0) {
			this.yspeed = this.yspeed * -1;
		}
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
  }
  
  show() {
		drawingContext.filter = 'blur(100px)';
    //    fill(this.red, this.blue, this.green);
        noStroke();
        fill(this.bubCol);
        circle(this.x , this.y, this.r * 2);
        drawingContext.filter = 'none';
    } 
}