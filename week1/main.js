// !!! This video is great for visualizing sin and cosin waves !!! source: https://www.youtube.com/watch?v=MzhBizCmpi8 // 

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

// sin and cos specifics //
let hAngle = 0;
let mangle = 0;
let sangle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}




function draw() {
    let dawn = color(250, 252, 237);
    let dusk = color(55, 58, 105 );
    let timePct = map(hour(), 0, 24, 0, 100);
    let mousePct = map(mouseX, 1, 800, 0, 100);
    let early = lerpColor(dawn, dusk, mousePct);

    // if (timePct < 25) {
    //     background(dawn);
    // } else if(timePct < 71) {
    //     background(dusk);
    // }
   
    
    background(early)
    translate(width / 2, height / 2);
    seconds();
    minutes();
    hours();
    clockFace();
    colorMode(RGB);

    // Lerp Tester //
    
    // let morning = lerpColor
    // let afternoon = lerpColor
    // let late = lerpColor(c1, c2, amt)

    

    // Sun Cycle //

 



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
    noStroke();
    
    console.log('seconds ', second());
    console.log('spin ', coffee);
    console.log('time Percent', timePct);
    console.log('mouse x', mouseX);
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

        var rMin = map(sin(frameCount), -1, 1, 80, 110)
        var rMax = map(sin(frameCount), -1, 1, 90, 120)

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
        minDirect = minDirect + (width * .000009);
    } else if (minute() > 30) {
        minDirect = minDirect - (width * .000009);
    }
        // shape to be pulsed + moved //
    beginShape()
    fill(227, 187, 54, 30)
    for (let m = 0; m <359; m++) {
            // Sin & multiplier adds second sine over wave pattern//
        minSpin = minSpin + sin(m) * 4

            //Spin animation. It advances by .004 each cycle - is clockwise + is counter // amount is speed // 
        minSpin = minSpin + .002 + coffee * .25

            // Define crest & valley depth
        var rMin = map(sin(frameCount), -1, 1, 130, 155)
        var rMax = map(sin(frameCount), -1, 1, 180, 180)

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
            hourSpin = hourSpin + sin(h) * 3

                //This is the spin animation. It advances by X each cycle - is clockwise + is counter // amount is speed // 
            hourSpin = hourSpin + .0004 + coffee * .05

            var rMin = map(sin(frameCount), -1, 1, 220, 265)
            var rMax = map(sin(frameCount), -1, 1, 255, 280)

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
    fill('grey');
    textFont('helvetica');
    textAlign(CENTER);
    textSize(14);
    text('Sip Coffee', 0, -9)
    text(hour() + ' : ' + minute() + ' : ' + second() , 0,9);
}

    // add coffee //
function mousePressed() {
    coffee = coffee + .05;
}

