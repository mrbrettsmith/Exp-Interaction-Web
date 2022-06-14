
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
let secSpin = 0;
let minSpin = 0;
let hourSpin = 0;


let hAngle = 0;
let mangle = 0;
let sangle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}




function draw() {
    background('white')
    // wavy circle test. !!! This video is great for visualizing sin and cosin waves !!! source: https://www.youtube.com/watch?v=MzhBizCmpi8 // 

    translate(width / 2, height / 2);
    seconds();
    minutes();
    hours();
    clockFace();
    

    // noStroke();

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
    console.log('seconds ', second());
    console.log('spin ', coffee);
    // console.log('second diamiter ', secDiamOut);
}


function seconds() {

        // Pulse diamiter re: time //
    var secDiamOut = sin(sangle) + maxSec * .25;
        maxSec = sin(sangle) + secsDirect;

    var secDiamIn = sin(sangle) + maxSec * .15;
        maxSec = sin(sangle) + secsDirect;
  
    if (second() <= 30)  {
        secsDirect = secsDirect + .2;
    } else if (second() > 30) {
        secsDirect = secsDirect - .2;
    }
        // shape to be pulsed + moved //
    beginShape()
    fill(187, 227, 54, 40)
    for (let s = 0; s <359; s++) {
            // whoa, this is freaky! sin & multiplier adds second sine to wave pattern//
        secSpin = secSpin + sin(s) * 4

            //This is the spin animation. It advances by .004 each cycle - is clockwise + is counter // amount is speed // 
        secSpin = secSpin + .004 + coffee

        var rMin = map(sin(frameCount), -1, 1, 80, 100)
        var rMax = map(sin(frameCount), -1, 1, 100, 120)

            // adding spin is counterclockwase, subtracting is clockwise //
        var r = map(sin(s * 10 + secSpin), -1, 1, rMin + secDiamIn, rMax + secDiamOut)
        var x = r * cos(s)
        var y = r * sin(s)
      
        vertex(x, y)
    }
    endShape(CLOSE);
}

function minutes() {
        // Pulse diamiter re: time //
    var minDiamOut = sin(mangle) + maxMin * .8;
    maxMin = sin(mangle) + minDirect;

    var minDiamIn = sin(mangle) + maxMin * 1;
    maxMin = sin(mangle) + minDirect;

        // Clock Seting //
    if (minute() <= 30)  {
        minDirect = minDirect + .02;
    } else if (minute() > 30) {
        minDirect = minDirect - .02;
    }
        // shape to be pulsed + moved //
    beginShape()
    fill(227, 187, 54, 30)
    for (let m = 0; m <359; m++) {
            // Sin & multiplier adds second sine over wave pattern//
        minSpin = minSpin + sin(m) * 4

            //Spin animation. It advances by .004 each cycle - is clockwise + is counter // amount is speed // 
        minSpin = minSpin + .003 + coffee * .25

            // Define crest & valley depth
        var rMin = map(sin(frameCount), -1, 1, 80, 85)
        var rMax = map(sin(frameCount), -1, 1, 75, 130)

            // adding spin is counterclockwase, subtracting is clockwise //
        var r = map(sin(m * 10 + minSpin), -1, 1, rMin + minDiamIn, rMax + minDiamOut)
        var x = r * cos(m)
        var y = r * sin(m)
      
        vertex(x, y) 
  }
  endShape(CLOSE);
}

function hours() {

    // Pulse diamiter re: time //
    var hourDiamOut = sin(hAngle) + maxSec * .25;
        maxSec = sin(hAngle) + hourDirect;

    var hourDiamIn = sin(hAngle) + maxSec * .15;
        maxSec = sin(hAngle) + hourDirect;

    if (second() <= 30)  {
        hourDirect = hourDirect + .002;
    } else if (second() > 30) {
        hourDirect = hourDirect - .002;
    }
        // shape to be pulsed + moved //
    beginShape()
        fill(255, 140, 0, 30);
        for (let h = 0; h <359; h++) {
                // Sin & multiplier adds second sine to wave pattern//
            hourSpin = hourSpin + sin(h) * 4

                //This is the spin animation. It advances by .004 each cycle - is clockwise + is counter // amount is speed // 
            hourSpin = hourSpin + .004 + coffee * .05

            var rMin = map(sin(frameCount), -1, 1, 80, 100)
            var rMax = map(sin(frameCount), -1, 1, 100, 120)

                // adding spin is counterclockwase, subtracting is clockwise //
            var r = map(sin(h * 10 + hourSpin), -1, 1, rMin + hourDiamIn, rMax + hourDiamOut)
            var x = r * cos(h)
            var y = r * sin(h)
        
            vertex(x, y)
        }   
    endShape(CLOSE);
}

function clockFace() {
    // noStroke();
    fill('black');
    textFont('helvetica');
    textAlign(CENTER);
    textSize(18);
    text('Hello', 0,5);
}

    // add coffee //
function mousePressed() {
    coffee = coffee + .05;
}

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

    
