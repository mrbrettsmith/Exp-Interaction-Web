// !!! This video is great for visualizing sin and cosin waves !!! source: https://www.youtube.com/watch?v=MzhBizCmpi8 // 

// Circle Max Size //
var maxHour;
var maxMin;
var maxSec; 

// Circle Growth Direction //
let hourDirect = 0;
let minDirect = 0;
let secsDirect = 0;

// Coffee Function /
let coffee = 0;
let clickDist;
let clickRad = 50;


// ColorChange //
let hourColor;
let timePct;
let mousePct;

// let time = text('\n' + h + m + s)
let secSpin = 0;
let minSpin = 0;
let hourSpin = 0;

// sin and cos specifics //
let hAngle = 0;
let mangle = 0;
let sangle = 0;

// function preload() {
//     coffeeMug = loadImage('assets/cafe.gif')
// }

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}

function draw() {
    night = color(25, 28, 74, 80)
    dawn = color(250, 252, 237, 80);
    midday = color(251, 255, 219, 80)
    sunset = color(255, 140, 69, 80)
    dusk = color(55, 58, 105, 80);
    
    translate(width / 2, height / 2);
    colorMode(RGB);
    timeColor();
    background(hourColor);
    seconds();
    minutes();
    hours();
    mouseHover();
    clockFace();
   
    //Cursor Change not woring //
// if (mouseX >= (width / 2) - 50 && mouseX <= (width / 2) + 50) {
//     image(coffeeMug, mouseX, mouseY)
// }


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

    // Console Monitor //
    // console.log('seconds ', second());
    // console.log('hour ', hour());
    // console.log('spin ', coffee);
    // console.log('time Percent', timePct);
    // console.log('mouse x', mouseX);
    // console.log( "Mouse Pct",  mousePct);
    
    // console.log('second diamiter ', secDiamOut);
}


    // new sky try - https://stackoverflow.com/questions/60196138/lerp-background-colour-based-on-time-of-day //

function timeColor() { 
    
    if (hour() > 0 && hour() <= 5) {
        hourColor =  lerpHour(night, dawn, 0, 5);
    }
    if (hour() > 5 && hour() <= 6) {
        hourColor = dawn;
    }
    if (hour() > 6 && hour() <= 11) {
        hourColor = lerpHour(dawn, midday, 6, 11);
    }
    if (hour() > 11 && hour() <= 13) {
        hourColor = midday;
    }
    if (hour() > 13 && hour() <= 18) {
        hourColor =  lerpHour(midday, sunset, 13, 18);
    }
    if (hour() > 18 && hour() <= 19) {
        hourColor = sunset;
    }
    if (hour() > 19 && hour() <= 20) {
        hourColor = lerpHour(sunset, dusk, 19, 20);
    }
    if (hour() > 20 && hour() <= 21) {
        hourColor = dusk;
    }
    if (hour() > 21 && hour() <= 23) {
        hourColor =  lerpHour(dusk, night, 21, 23);
    }
    if(hour() > 23 && hour() <= 0) {
        hourColor = night;
    }



    // Lerp test with Mouse //
    // if (mouseX >= 0 && mouseX <= width/2) {
    //     hourColor =  lerpHour(dusk, dawn, 0, width/2);
    // }
    //  if(mouseX > width/2 && mouseX <= width) {
    //     hourColor = lerpHour(dawn, dusk, width/2, width);
    // }


}

function lerpHour(from, to, startTime, endTime) {

    // Lerp Test with Mouse - Must be bianary out? //
    // const mousePct = map(mouseX, 0, width, 0, 1);
    // return lerpColor(color(from), color(to), mousePct);
    
    const timePct = map(hour(), 0, 60, 0, 1);
    return lerpColor(color(from), color(to), timePct);

}

function seconds() {

        // Pulse diamiter re: time //
        // could add 'if' to make grow over an hour???//
    var secDiamOut = sin(sangle) + maxSec * .15;
        maxSec = sin(sangle) + secsDirect;

    var secDiamIn = sin(sangle) + maxSec * .10;
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

        var rMin = map(sin(frameCount), -1, 1, 80, 85)
        var rMax = map(sin(frameCount), -1, 1, 95, 90)

            // adding spin is counterclockwase, subtracting is clockwise //
        var r = map(sin(s * 10 + secSpin), -1, 1, rMin + secDiamIn, rMax + secDiamOut) + coffee;
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
        var rMin = map(sin(frameCount), -1, 1, 130, 145)
        var rMax = map(sin(frameCount), -1, 1, 180, 170)

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

        minute() >= 0 && minute() <= 30
        // Clock Seting //
    if (hour() >= 0 && hour() < 12)  {
        hourDirect = hourDirect + (width * .000009);
    } else if (hour() >= 12 && hour() <= 24) {
        hourDirect = hourDirect - (width * .000009);
    }
        // shape to be pulsed + moved //
    beginShape()
        fill(255, 140, 0, 30);
        for (let h = 0; h <359; h++) {
                // Sin & multiplier adds second sine to wave pattern//
            hourSpin = hourSpin + sin(h) * 3

                //This is the spin animation. It advances by X each cycle - is clockwise + is counter // amount is speed // 
            hourSpin = hourSpin + .0004 + coffee * .05

            var rMin = map(sin(frameCount), -1, 1, 240, 255)
            var rMax = map(sin(frameCount), -1, 1, 250, 245)

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
    fill('smoke');
    if (hour() >= 6 && hour() <=17) {
        fill('black');
    }
    textFont('helvetica');
    textAlign(LEFT);
    textSize(14);
    text('Sip Coffee', -30, 8)
    text('This representation of circadian rhythm changes with the local time.',-(width * .46), -(height * .40) -18)
    text(hour() + ' : ' + minute() + ' : ' + second() ,-(width * .46), -(height * .40));
    text('Increase your pep with some coffee.',-(width * .46), 8)
}

function mouseHover() {

    let clickDist = dist(mouseX, mouseY, width/2, height/2)

    if (clickDist < clickRad) {
        cursor('assets/cafe8.png', 5,5)
    } else  if (clickDist > clickRad) {
        cursor(CROSS)
    }
    
}

    // add coffee //
function mousePressed() {
    if (mouseX >= (width / 2) - 100 && mouseX <= (width / 2) + 100 &&
    mouseY >= (height / 2) - 100 && mouseY <= (height / 2) + 100
    ) {
    coffee = coffee + .05;
    }
}

