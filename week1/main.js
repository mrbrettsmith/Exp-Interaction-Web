
// getting time from device //
var hours;
var mins;
var secs;

// Circle Max Size //
var maxHour;
var maxMin;
var maxSec; 

// Circle Growth Direction //
let hourDirect = 0;
let minDirect = 0;
let secsDirect = 0;

// ColorChange //
// let hourColor = 255, 140, 0;

// let time = text('\n' + h + m + s)

let angle = 0;

let hangle = 0;
let mangle = 0;
let sangle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
  
    
   

}

function draw() {

    let hours = hour();
    let mins = minute();
    let secs = second();

    var hourDiam = 100 + sin(angle) * maxHour;
    var minDiam = 200 + sin(angle) * maxMin;
    var secDiam = 150 + sin(angle) + maxSec;


    // having problems making pulse distance change //

    maxHour = sin(angle) + hourDirect;

    if (hour() <= 30)  {
        hourDirect = hourDirect + .002;
    } else if (hour() > 30) {
        hourDirect = hourDirect - .002;
    }

    maxMin = sin(angle) + minDirect;

    if (minute() <= 30)  {
            minDirect = minDirect + .02;
        } else if (minute() > 30) {
            minDirect = minDirect - .02;
        }

    maxSec = sin(angle) + secsDirect;
    
    if (second() <= 30)  {
        secsDirect = secsDirect + .2;
    } else if (second() > 30) {
        secsDirect = secsDirect - .2;
    }

   

    background('white');
    noFill();
    textFont('helvetica')
    textAlign(CENTER)
    textSize(18);

    // Seconds//

    
    fill(187, 227, 54, 40);
    // strokeWeight(4);
    ellipse(width/2, height/2, secDiam, secDiam);

    // Minutes //
    fill(227, 187, 54, 30);
    // strokeWeight(4);
    ellipse(width/2, height/2, minDiam, minDiam);

    // Hours //
    fill(255, 140, 0, 30);
    // strokeWeight(4);
    ellipse(width/2, height/2, hourDiam *4, hourDiam *4);

    // Angle determines the rate of pulse //
    angle = angle + .06;
    

    hangle = hangle + (hour() * .001);
    mangle = mangle + (minute() * .001);
    sangle = sangle + (second () * .001);

    fill('white')
    strokeWeight(0);
    text('' + hour() + minute() + second(), width/2, height/2);
}