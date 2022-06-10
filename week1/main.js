// let h = hour();
// let m = minute();
// let s = second();

// let time = text('\n' + h + m + s)

let angle = 0;

let hangle = 0;
let mangle = 0;
let sangle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {

let hr = map(sin(hangle), -1,1, .5, hour() * 2);
let mr = map(sin(mangle), -1,1, .5, minute() *2);
let sr = map(sin(sangle), -1,1, .5, second() *2);
background('grey');
noFill();
textFont('helvetica')
textAlign(CENTER)
textSize(18);


stroke('yellow');
strokeWeight(4);
ellipse(width/2, height/2, sr *3, sr *3);

stroke('green');
strokeWeight(4);
ellipse(width/2, height/2, mr *3, mr *3);

stroke('pink');
strokeWeight(4);
ellipse(width/2, height/2, hr *4, hr *4);

// angle = angle + .1;

hangle = hangle + (hour() * .001);
mangle = mangle + (minute() * .001);
sangle = sangle + (second () * .001);

fill('white')
strokeWeight(0);
text('' + hour() + minute() + second(), width/2, height/2);
}