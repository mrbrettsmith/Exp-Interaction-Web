
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

let coffee = 0;
// ColorChange //
// let hourColor = 255, 140, 0;

// let time = text('\n' + h + m + s)

let spin = 0;
let angle = 0;

let hangle = 0;
let mangle = 0;
let sangle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}

function draw() {
background('white')
// wavy circle test. !!! This video is great for visualizing sin and cosin waves !!! source: https://www.youtube.com/watch?v=MzhBizCmpi8 // 

// to be removed
translate(width / 2, height / 2);
stroke('red');
fill('pink');
strokeWeight(0);

// New Seconds //
// Pulse and overall spin re: time //
var secDiam = sin(angle) + maxSec;
  maxSec = sin(angle) + secsDirect;
    
    if (second() <= 30)  {
        secsDirect = secsDirect + .2;
    } else if (second() > 30) {
        secsDirect = secsDirect - .2;
    }

    beginShape()
   for (let i = 0; i <359; i++) {
        // whoa, this is freaky! sin & multiplier adds second sine to wave pattern//
        spin = spin + sin(i) * 4

        //This is the spin animation. It advances by .004 each cycle - is clockwise + is counter // amount is speed // 
        spin = spin + .004 + coffee

        var rMin = map(sin(frameCount), -1, 1, 90, 100)
        var rMax = map(sin(frameCount), -1, 100, 80, 100)

        // adding spin is counterclockwase, subtracting is clockwise //
        var r = map(sin(i * 10 + spin), -1, 1, rMin + secDiam, rMax + secDiam)
        var x = r * cos(i)
        var y = r * sin(i)
        
        vertex(x, y)
        
    }
    endShape(CLOSE);

    // Coffee Crash //
    if (coffee > 2 ) {
        coffee = coffee -.25;
    } else if(coffee > 1 ) {
        coffee = coffee -.005;
    } else if(coffee > 0 ) {
        coffee = coffee -.0001;
    } else if(coffee < 0){
        coffee + coffee +.0001;
    }

    console.log('spin ', coffee);
    console.log('second diamiter ', secDiam);
// old time based pulse //

    // let hours = hour();
    // let mins = minute();
    // let secs = second();

    // var hourDiam = 100 + sin(angle) * maxHour;
    // var minDiam = 200 + sin(angle) * maxMin;
    // var secDiam = 150 + sin(angle) + maxSec;


    // // having problems making pulse distance change //

    // maxHour = sin(angle) + hourDirect;

    // if (hour() <= 30)  {
    //     hourDirect = hourDirect + .002;
    // } else if (hour() > 30) {
    //     hourDirect = hourDirect - .002;
    // }

    // maxMin = sin(angle) + minDirect;

    // if (minute() <= 30)  {
    //         minDirect = minDirect + .02;
    //     } else if (minute() > 30) {
    //         minDirect = minDirect - .02;
    //     }

    // maxSec = sin(angle) + secsDirect;
    
    // if (second() <= 30)  {
    //     secsDirect = secsDirect + .2;
    // } else if (second() > 30) {
    //     secsDirect = secsDirect - .2;
    // }

   

    // background('white');
    // noFill();
    // textFont('helvetica')
    // textAlign(CENTER)
    // textSize(18);

    // // Seconds//

    
    // fill(187, 227, 54, 40);
    // // strokeWeight(4);
    // ellipse(width/2, height/2, secDiam, secDiam);

    // // Minutes //
    // fill(227, 187, 54, 30);
    // // strokeWeight(4);
    // ellipse(width/2, height/2, minDiam, minDiam);

    // // Hours //
    // fill(255, 140, 0, 30);
    // // strokeWeight(4);
    // ellipse(width/2, height/2, hourDiam *4, hourDiam *4);

    // // Angle determines the rate of pulse //
    // angle = angle + .06;
    

    // hangle = hangle + (hour() * .001);
    // mangle = mangle + (minute() * .001);
    // sangle = sangle + (second () * .001);

    // fill('white')
    // strokeWeight(0);
    // text('' + hour() + minute() + second(), width/2, height/2);

}

function mousePressed() {
    coffee = coffee + .05;
}