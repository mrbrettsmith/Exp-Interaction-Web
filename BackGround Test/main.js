let bubbleBackground = [];

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 5; i++) {
  bubbleBackground[i] = new Blob(random(100,600),random(100,600),random(50,300))
  }
}

function draw() {
  background(220);
  for (let i = 0; i < 5; i++) {
  bubbleBackground[i].move();
  bubbleBackground[i].show();
  }
}

class Blob {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xspeed = 4;
    this.yspeed = -3;

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
	
        fill('red');
        circle(this.x , this.y, this.r * 2);
        drawingContext.filter = 'none';
	
    } 
  
  
  
}