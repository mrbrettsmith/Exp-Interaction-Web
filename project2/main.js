let canvas;
let ctx;
let pineBiom;
let pineHov = false;
let hardHov = false;
let aspenHov = false;
let prarieHov = false;
let bgColor;

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
ctx = canvas.drawingContext;
// ctx = document.getElementById("canvas").getContext("2d");
colPine = color('rgb(40, 153, 40)');
colHardwood = color('rgb(148, 198, 143)');
colAspen = color('rgb(207, 226, 131)');
colPrarie = color('rgb(242, 242, 102)');
colNuetral = color('rgb(237, 240, 230)');
bgColor = colNuetral;

// mouseover test //
// pineBiom = drawPine();
// pineBiom.mouseOver(pine);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
background(bgColor);  


translate(width/2 - 200, height/2 -200);



bioms(); 
mapOutline();
mapLine();

translate( 200 - width/2,  200 - height/2);

stroke('white');
exteriorLineNorth();
exteriorLineSouth();

noFill();
noStroke();
drawPine();
drawHardwood();
drawAspen();
drawPrarie();



}

function mapOutline() {
// #polygon497

ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.lineWidth = 6.000000;
ctx.miterLimit = 10;
ctx.moveTo(61.000000, 394.500000);
ctx.lineTo(139.550000, 394.500000);
ctx.lineTo(297.900000, 394.500000);
ctx.bezierCurveTo(297.930000, 392.830000, 297.960000, 391.170000, 297.990000, 389.500000);
ctx.lineTo(297.990000, 377.940000);
ctx.lineTo(292.990000, 368.500000);
ctx.lineTo(287.990000, 362.500000);
ctx.lineTo(278.750000, 362.500000);
ctx.lineTo(266.990000, 350.500000);
ctx.lineTo(264.990000, 341.500000);
ctx.lineTo(257.990000, 337.500000);
ctx.lineTo(250.990000, 334.500000);
ctx.lineTo(247.990000, 327.500000);
ctx.lineTo(236.520000, 327.500000);
ctx.lineTo(230.990000, 321.500000);
ctx.lineTo(225.990000, 316.500000);
ctx.lineTo(228.990000, 310.500000);
ctx.lineTo(228.990000, 298.500000);
ctx.lineTo(225.990000, 295.500000);
ctx.lineTo(229.990000, 291.500000);
ctx.lineTo(228.990000, 280.500000);
ctx.lineTo(232.990000, 274.500000);
ctx.lineTo(233.990000, 269.500000);
ctx.lineTo(228.990000, 263.500000);
ctx.lineTo(222.990000, 262.500000);
ctx.lineTo(223.990000, 253.500000);
ctx.lineTo(226.990000, 250.500000);
ctx.lineTo(230.990000, 241.500000);
ctx.lineTo(237.990000, 237.500000);
ctx.lineTo(249.990000, 229.500000);
ctx.lineTo(249.990000, 191.500000);
ctx.lineTo(253.340000, 191.500000);
ctx.lineTo(259.990000, 185.500000);
ctx.lineTo(258.990000, 182.500000);
ctx.lineTo(274.990000, 170.500000);
ctx.lineTo(289.990000, 156.500000);
ctx.lineTo(304.990000, 139.500000);
ctx.lineTo(315.990000, 129.500000);
ctx.lineTo(319.990000, 126.500000);
ctx.lineTo(333.680000, 120.000000);
ctx.lineTo(347.990000, 115.500000);
ctx.lineTo(356.990000, 111.500000);
ctx.lineTo(363.990000, 107.500000);
ctx.lineTo(368.990000, 103.500000);
ctx.lineTo(374.990000, 101.500000);
ctx.lineTo(366.990000, 100.500000);
ctx.lineTo(363.990000, 99.500000);
ctx.lineTo(359.990000, 101.500000);
ctx.lineTo(354.710000, 99.500000);
ctx.lineTo(351.990000, 94.500000);
ctx.lineTo(328.900000, 94.500000);
ctx.lineTo(320.010000, 94.500000);
ctx.lineTo(316.990000, 89.500000);
ctx.lineTo(315.990000, 84.500000);
ctx.lineTo(302.990000, 89.500000);
ctx.lineTo(298.990000, 94.500000);
ctx.lineTo(288.990000, 97.500000);
ctx.lineTo(282.990000, 95.500000);
ctx.lineTo(276.990000, 93.500000);
ctx.lineTo(275.990000, 89.500000);
ctx.lineTo(273.990000, 86.500000);
ctx.lineTo(263.990000, 83.500000);
ctx.lineTo(261.990000, 79.500000);
ctx.lineTo(258.990000, 76.500000);
ctx.lineTo(250.610000, 76.500000);
ctx.lineTo(247.990000, 80.500000);
ctx.lineTo(249.990000, 83.500000);
ctx.lineTo(249.990000, 86.500000);
ctx.lineTo(246.990000, 86.500000);
ctx.lineTo(240.990000, 77.500000);
ctx.lineTo(241.990000, 73.500000);
ctx.lineTo(239.970000, 70.500000);
ctx.lineTo(233.990000, 71.500000);
ctx.lineTo(230.780000, 69.500000);
ctx.lineTo(230.990000, 67.500000);
ctx.lineTo(234.990000, 66.500000);
ctx.lineTo(233.990000, 63.500000);
ctx.lineTo(229.750000, 63.500000);
ctx.lineTo(219.990000, 59.500000);
ctx.lineTo(219.990000, 57.500000);
ctx.lineTo(215.990000, 58.500000);
ctx.lineTo(210.270000, 57.500000);
ctx.lineTo(201.990000, 58.500000);
ctx.lineTo(195.990000, 60.500000);
ctx.lineTo(195.990000, 64.500000);
ctx.lineTo(180.990000, 66.500000);
ctx.lineTo(180.990000, 62.500000);
ctx.lineTo(179.070000, 57.500000);
ctx.lineTo(159.990000, 56.500000);
ctx.lineTo(160.990000, 54.500000);
ctx.lineTo(157.990000, 52.500000);
ctx.lineTo(147.990000, 53.500000);
ctx.lineTo(140.990000, 47.500000);
ctx.lineTo(140.990000, 40.500000);
ctx.lineTo(137.990000, 28.500000);
ctx.lineTo(135.990000, 20.500000);
ctx.lineTo(134.990000, 10.500000);
ctx.lineTo(127.990000, 6.500000);
ctx.lineTo(123.990000, 7.500000);
ctx.lineTo(119.990000, 5.500000);
ctx.lineTo(120.990000, 34.500000);
ctx.lineTo(25.000000, 34.500000);
ctx.lineTo(27.000000, 40.500000);
ctx.lineTo(27.000000, 46.500000);
ctx.lineTo(31.000000, 51.500000);
ctx.lineTo(30.000000, 57.500000);
ctx.lineTo(29.000000, 62.500000);
ctx.lineTo(29.000000, 92.500000);
ctx.lineTo(31.000000, 97.500000);
ctx.lineTo(33.000000, 103.500000);
ctx.lineTo(34.000000, 107.500000);
ctx.lineTo(36.000000, 113.500000);
ctx.lineTo(42.000000, 129.500000);
ctx.lineTo(43.000000, 152.500000);
ctx.lineTo(44.000000, 165.500000);
ctx.lineTo(43.000000, 168.500000);
ctx.lineTo(46.000000, 173.500000);
ctx.lineTo(45.000000, 182.500000);
ctx.lineTo(45.000000, 186.500000);
ctx.lineTo(45.000000, 192.500000);
ctx.lineTo(47.000000, 197.500000);
ctx.lineTo(49.000000, 206.500000);
ctx.lineTo(54.000000, 214.500000);
ctx.lineTo(55.000000, 229.500000);
ctx.lineTo(55.000000, 237.500000);
ctx.lineTo(54.000000, 247.500000);
ctx.lineTo(51.000000, 250.500000);
ctx.lineTo(44.000000, 255.500000);
ctx.lineTo(42.000000, 259.500000);
ctx.lineTo(50.000000, 273.500000);
ctx.lineTo(58.000000, 275.500000);
ctx.lineTo(61.000000, 282.500000);
ctx.lineTo(61.000000, 394.500000);
ctx.closePath();
ctx.stroke();
}

function exteriorLineNorth() {
  y=8;
  ctx.strokeStyle = 'white';
	ctx.lineWidth = 4.000000;
	ctx.miterLimit = 10;
  while(y < height/2 -184) {
    line(0,y,width,y);
    y = y + 12;
  } 
}

function exteriorLineSouth() {
    y=height/2 +206;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 4.000000;
    ctx.miterLimit = 10;
    while(y > 200 && y < height) {
    line(0, y, width, y);
    y = y + 12;
  } 
}

function mapLine(){

  ctx.strokeStyle = 'white';
	ctx.lineWidth = 4.000000;
	ctx.miterLimit = 10;
  
  // #line427
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 238.500000);
	ctx.lineTo(54.900000, 238.500000);
	ctx.stroke();
	
// #line429
	ctx.beginPath();
	ctx.moveTo(54.800000, 226.500000);
	ctx.lineTo(0.000 - width/2, 226.500000);
	ctx.stroke();
	
// #line431
	ctx.beginPath();
	ctx.moveTo(width, 226.500000);
	ctx.lineTo(250.000000, 226.500000);
	ctx.stroke();
	
// #line433
	ctx.beginPath();
	ctx.moveTo(236.250000, 238.500000);
	ctx.lineTo(width, 238.500000);
	ctx.stroke();
	
// #line435
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 214.500000);
	ctx.lineTo(54.000000, 214.500000);
	ctx.stroke();
	
// #line437
	ctx.beginPath();
	ctx.moveTo(48.110000, 202.500000);
	ctx.lineTo(0.000 - width/2, 202.500000);
	ctx.stroke();
	
// #line439
	ctx.beginPath();
	ctx.moveTo(width, 202.500000);
	ctx.lineTo(250.000000, 202.500000);
	ctx.stroke();
	
// #line441
	ctx.beginPath();
	ctx.moveTo(250.000000, 214.500000);
	ctx.lineTo(width, 214.500000);
	ctx.stroke();
	
// #line443
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 190.500000);
	ctx.lineTo(45.000000, 190.500000);
	ctx.stroke();
	
// #line445
	ctx.beginPath();
	ctx.moveTo(45.440000, 178.500000);
	ctx.lineTo(0.000 - width/2, 178.500000);
	ctx.stroke();
	
// #line447
	ctx.beginPath();
	ctx.moveTo(width, 178.500000);
	ctx.lineTo(264.330000, 178.500000);
	ctx.stroke();
	
// #line449
	ctx.beginPath();
	ctx.moveTo(254.460000, 190.500000);
	ctx.lineTo(width, 190.500000);
	ctx.stroke();
	
// #line451
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 166.500000);
	ctx.lineTo(43.670000, 166.500000);
	ctx.stroke();
	
// #line453
	ctx.beginPath();
	ctx.moveTo(43.150000, 154.500000);
	ctx.lineTo(0.000 - width/2, 154.500000);
	ctx.stroke();
	
// #line455
	ctx.beginPath();
	ctx.moveTo(width, 154.500000);
	ctx.lineTo(291.760000, 154.500000);
	ctx.stroke();
	
// #line457
	ctx.beginPath();
	ctx.moveTo(280.000000, 166.500000);
	ctx.lineTo(width, 166.500000);
	ctx.stroke();
	
// #line459
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 142.500000);
	ctx.lineTo(42.570000, 142.500000);
	ctx.stroke();
	
// #line461
	ctx.beginPath();
	ctx.moveTo(42.040000, 130.500000);
	ctx.lineTo(0.000 - width/2, 130.500000);
	ctx.stroke();
	
// #line463
	ctx.beginPath();
	ctx.moveTo(width, 130.500000);
	ctx.lineTo(314.900000, 130.500000);
	ctx.stroke();
	
// #line465
	ctx.beginPath();
	ctx.moveTo(302.350000, 142.500000);
	ctx.lineTo(width, 142.500000);
	ctx.stroke();
	
// #line467
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 118.500000);
	ctx.lineTo(37.880000, 118.500000);
	ctx.stroke();
	
// #line469
	ctx.beginPath();
	ctx.moveTo(33.750000, 106.500000);
	ctx.lineTo(0.000 - width/2, 106.500000);
	ctx.stroke();
	
// #line471
	ctx.beginPath();
	ctx.moveTo(width, 106.500000);
	ctx.lineTo(365.250000, 106.500000);
	ctx.stroke();
	
// #line473
	ctx.beginPath();
	ctx.moveTo(338.460000, 118.500000);
	ctx.lineTo(width, 118.500000);
	ctx.stroke();
	
// #line475
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 94.500000);
	ctx.lineTo(29.800000, 94.500000);
	ctx.stroke();
	
// #line477
	ctx.beginPath();
	ctx.moveTo(29.000000, 82.500000);
	ctx.lineTo(0.000 - width/2, 82.500000);
	ctx.stroke();
	
// #line479
	ctx.beginPath();
	ctx.moveTo(width, 82.500000);
	ctx.lineTo(263.500000, 82.500000);
	ctx.stroke();
	
// #line481
	ctx.beginPath();
	ctx.moveTo(352.000000, 94.500000);
	ctx.lineTo(width, 94.500000);
	ctx.stroke();
	
// #line483
	ctx.beginPath();
	ctx.moveTo(320.020000, 94.500000);
	ctx.lineTo(352.000000, 94.500000);
	ctx.stroke();
	
// #line485
	ctx.beginPath();
	ctx.moveTo(280.000000, 94.500000);
	ctx.lineTo(299.000000, 94.500000);
	ctx.stroke();
	
// #line487
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 70.500000);
	ctx.lineTo(29.000000, 70.500000);
	ctx.stroke();
	
// #line489
	ctx.beginPath();
	ctx.moveTo(29.800000, 58.500000);
	ctx.lineTo(0.000 - width/2, 58.500000);
	ctx.stroke();
	
// #line491
	ctx.beginPath();
	ctx.moveTo(202.000000, 58.500000);
	ctx.lineTo(179.470000, 58.500000);
	ctx.stroke();
	
// #line493
	ctx.beginPath();
	ctx.moveTo(width, 58.500000);
	ctx.lineTo(220.000000, 58.500000);
	ctx.stroke();
	
// #line495
	ctx.beginPath();
	ctx.moveTo(232.400000, 70.500000);
	ctx.lineTo(width, 70.500000);
	ctx.stroke();
	
// #line497
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 46.500000);
	ctx.lineTo(27.000000, 46.500000);
	ctx.stroke();
	
// #line499
	ctx.beginPath();
	ctx.moveTo(25.000000, 34.500000);
	ctx.lineTo(0.000 - width/2, 34.500000);
	ctx.stroke();
	
// #line501
	ctx.beginPath();
	ctx.moveTo(width, 34.500000);
	ctx.lineTo(139.500000, 34.500000);
	ctx.stroke();
	
// #line503
	ctx.beginPath();
	ctx.moveTo(141.000000, 46.500000);
	ctx.lineTo(width, 46.500000);
	ctx.stroke();
	
// #line505
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 22.500000);
	ctx.lineTo(120.590000, 22.500000);
	ctx.stroke();
	
// #line507
	ctx.beginPath();
	ctx.moveTo(136.500000, 22.500000);
	ctx.lineTo(width, 22.500000);
	ctx.stroke();
	
// #line509
	ctx.beginPath();
	ctx.moveTo(width, 262.500000);
	ctx.lineTo(223.000000, 262.500000);
	ctx.stroke();
	
// #line511
	ctx.beginPath();
	ctx.moveTo(233.000000, 274.500000);
	ctx.lineTo(width, 274.500000);
	ctx.stroke();
	
// #line513
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 274.500000);
	ctx.lineTo(54.000000, 274.500000);
	ctx.stroke();
	
// #line515
	ctx.beginPath();
	ctx.moveTo(43.710000, 262.500000);
	ctx.lineTo(0.000 - width/2, 262.500000);
	ctx.stroke();
	
// #line517
	ctx.beginPath();
	ctx.moveTo(width, 286.500000);
	ctx.lineTo(229.550000, 286.500000);
	ctx.stroke();
	
// #line519
	ctx.beginPath();
	ctx.moveTo(229.000000, 298.500000);
	ctx.lineTo(width, 298.500000);
	ctx.stroke();
	
// #line521
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 298.500000);
	ctx.lineTo(61.000000, 298.500000);
	ctx.stroke();
	
// #line523
	ctx.beginPath();
	ctx.moveTo(61.000000, 286.500000);
	ctx.lineTo(0.000 - width/2, 286.500000);
	ctx.stroke();
	
// #line525
	ctx.beginPath();
	ctx.moveTo(227.000000, 250.500000);
	ctx.lineTo(width, 250.500000);
	ctx.stroke();
	
// #line527
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 250.500000);
	ctx.lineTo(51.000000, 250.500000);
	ctx.stroke();
	
// #line529
	ctx.beginPath();
	ctx.moveTo(width, 310.500000);
	ctx.lineTo(229.000000, 310.500000);
	ctx.stroke();
	
// #line531
	ctx.beginPath();
	ctx.moveTo(231.920000, 322.500000);
	ctx.lineTo(width, 322.500000);
	ctx.stroke();
	
// #line533
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 322.500000);
	ctx.lineTo(61.000000, 322.500000);
	ctx.stroke();
	
// #line535
	ctx.beginPath();
	ctx.moveTo(61.000000, 310.500000);
	ctx.lineTo(0.000 - width/2, 310.500000);
	ctx.stroke();
	
// #line537
	ctx.beginPath();
	ctx.moveTo(251.000000, 334.500000);
	ctx.lineTo(250.000000, 334.500000);
	ctx.stroke();
	
// #line539
	ctx.beginPath();
	ctx.moveTo(width, 334.500000);
	ctx.lineTo(251.000000, 334.500000);
	ctx.stroke();
	
// #line541
	ctx.beginPath();
	ctx.moveTo(266.110000, 346.500000);
	ctx.lineTo(width, 346.500000);
	ctx.stroke();
	
// #line543
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 346.500000);
	ctx.lineTo(61.000000, 346.500000);
	ctx.stroke();
	
// #line545
	ctx.beginPath();
	ctx.moveTo(61.000000, 334.500000);
	ctx.lineTo(0.000 - width/2, 334.500000);
	ctx.stroke();
	
// #line547
	ctx.beginPath();
	ctx.moveTo(width, 358.500000);
	ctx.lineTo(274.840000, 358.500000);
	ctx.stroke();
	
// #line549
	ctx.beginPath();
	ctx.moveTo(294.060000, 370.500000);
	ctx.lineTo(width, 370.500000);
	ctx.stroke();
	
// #line551
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 370.500000);
	ctx.lineTo(61.000000, 370.500000);
	ctx.stroke();
	
// #line553
	ctx.beginPath();
	ctx.moveTo(61.000000, 358.500000);
	ctx.lineTo(0.000 - width/2, 358.500000);
	ctx.stroke();
	
// #line555
	ctx.beginPath();
	ctx.moveTo(width, 382.500000);
	ctx.lineTo(298.000000, 382.500000);
	ctx.stroke();
	
// #line557
	ctx.beginPath();
	ctx.moveTo(298.000000, 394.500000);
	ctx.lineTo(width, 394.500000);
	ctx.stroke();
	
// #line559
	ctx.beginPath();
	ctx.moveTo(0.000 - width/2, 394.500000);
	ctx.lineTo(61.000000, 394.500000);
	ctx.stroke();
	
// #line561
	ctx.beginPath();
	ctx.moveTo(61.000000, 382.500000);
	ctx.lineTo(0.000 - width/2, 382.500000);
	ctx.stroke();
	
// #line563
	ctx.beginPath();
	ctx.moveTo(120.170000, 10.500000);
	ctx.lineTo(0.000 - width/2, 10.500000);
	ctx.stroke();
	
// #line565
	ctx.beginPath();
	ctx.moveTo(width, 10.500000);
	ctx.lineTo(135.000000, 10.500000);
	ctx.stroke();


}


// fake Clicking on Biom :( //

function drawPine() {
	if (pineHov === true) {
		fill(colNuetral);
		rect(width * .6 , height *.1, width * .3, height *.5)
 		bgColor = colPine;
  	} else {
		bgColor = colNuetral;
	}
	noFill();
	
 	radius = 200;
 	xPineCenter = width/2 + 30
 	yPineCenter = height/2 - 75
 	var d = dist(xPineCenter, yPineCenter, mouseX, mouseY);
 	ellipse(xPineCenter, yPineCenter, radius)
    if (d < radius/2) {
    	cursor(CROSS);
		//weird, this fill makes my other one worK?
		fill('white');
    	pineHov = true;
 	} else if (d > radius/2) {
    	cursor(ARROW)
    	pineHov = false;
  }
}

function drawHardwood() {
	if (hardHov === true) {
		fill(colNuetral);
		rect(width * .6 , height *.4, width * .3, height *.5)
		bgColor = colHardwood;
	} else {
		bgColor = colNuetral;
	} 
	noFill();

	radius = 125;
	xHardCenter = width/2 + 25;
	yHardCenter = height/2 +150;
	var d = dist(xHardCenter, yHardCenter,mouseX,mouseY);
	ellipse(xHardCenter, yHardCenter, radius)
	  if (d < radius/2) {
	  cursor(CROSS);
	  
	  fill('white');
	  hardHov = true;
	} else if (d > radius/2) {
	  cursor(ARROW)
	  hardHov = false;
	}
  }

function drawAspen() {
	if (aspenHov === true) {
		fill(colNuetral);
		rect(width * .05 , height *.1, width * .3, height *.5)
		bgColor = colAspen;
	} else {
		bgColor = colNuetral;
	}
	noFill();
	
	radius = 40;
	xAspenCenter = width/2 - 115;
	yAspenCenter = height/2 - 130;
	var d = dist(xAspenCenter, yAspenCenter, mouseX, mouseY);
	ellipse(xAspenCenter, yAspenCenter, radius)
	  if (d < radius/2) {
	  cursor(CROSS);
	  //weird, this fill makes my other one worK?
	  fill('white');
	  aspenHov = true;
	} else if (d > radius/2) {
	  cursor(ARROW)
	  aspenHov = false;
	}
  }

function drawPrarie() {
	if (prarieHov === true) {
		fill(colNuetral);
		rect(width * .05, height *.4, width * .3, height *.5)
 		bgColor = colPrarie;
	} else {
		bgColor = colNuetral;
	}
	noFill();
	
	
	radius = 125;
	xPrarieCenter = width/2 - 110;
	yPrarieCenter = height/2 + 120;
	var d = dist(xPrarieCenter, yPrarieCenter, mouseX, mouseY);
	ellipse(xPrarieCenter, yPrarieCenter, radius)
	if (d < radius/2) {
		cursor(CROSS);
		fill('white');
		prarieHov = true;
	} else if (d > radius/2) {
		cursor(ARROW)
		prarieHov = false;
	}
  }



function bioms(){
      	
// Pine Biom
	ctx.beginPath();
	ctx.fillStyle = 'rgb(40, 153, 40)';
	ctx.moveTo(109.560000, 5.400000);
	ctx.bezierCurveTo(105.250000, 19.030000, 104.300000, 42.360000, 104.250000, 58.700000);
	ctx.bezierCurveTo(104.180000, 77.220000, 110.290000, 102.720000, 117.540000, 122.920000);
	ctx.bezierCurveTo(127.090000, 149.520000, 135.910000, 166.230000, 144.640000, 182.720000);
	ctx.bezierCurveTo(151.080000, 194.890000, 156.930000, 205.890000, 166.050000, 220.030000);
	ctx.bezierCurveTo(180.520000, 242.490000, 187.760000, 253.730000, 198.470000, 261.630000);
	ctx.bezierCurveTo(203.070000, 265.020000, 226.910000, 282.610000, 255.970000, 276.920000);
	ctx.bezierCurveTo(285.850000, 271.070000, 302.130000, 244.350000, 306.130000, 237.770000);
	ctx.bezierCurveTo(319.020000, 216.600000, 313.580000, 205.390000, 329.990000, 181.490000);
	ctx.bezierCurveTo(331.600000, 179.150000, 339.700000, 167.530000, 353.850000, 155.800000);
	ctx.bezierCurveTo(382.900000, 131.710000, 401.790000, 136.690000, 418.080000, 114.200000);
	ctx.bezierCurveTo(421.760000, 109.120000, 428.080000, 100.150000, 428.480000, 87.900000);
	ctx.bezierCurveTo(429.120000, 68.060000, 413.870000, 50.070000, 399.120000, 40.800000);
	ctx.bezierCurveTo(370.050000, 22.530000, 350.860000, 43.130000, 298.800000, 29.180000);
	ctx.bezierCurveTo(289.250000, 26.620000, 271.780000, 21.790000, 252.310000, 9.610000);
	ctx.bezierCurveTo(224.030000, -8.100000, 224.620000, -20.620000, 201.540000, -31.380000);
	ctx.bezierCurveTo(195.790000, -34.060000, 166.410000, -47.750000, 135.470000, -34.440000);
	ctx.bezierCurveTo(132.460000, -33.140000, 118.520000, -22.940000, 109.560000, 5.400000);
	ctx.closePath();
	ctx.fill();
	
// Hardwood Biom
	ctx.beginPath();
	ctx.fillStyle = 'rgb(148, 198, 143)';
	ctx.moveTo(242.520000, 291.000000);
	ctx.bezierCurveTo(272.830000, 304.800000, 276.500000, 308.470000, 286.890000, 317.680000);
	ctx.bezierCurveTo(290.040000, 320.470000, 301.340000, 331.390000, 314.090000, 347.280000);
	ctx.bezierCurveTo(324.440000, 360.180000, 338.020000, 391.910000, 333.670000, 412.970000);
	ctx.bezierCurveTo(331.540000, 423.280000, 325.910000, 432.060000, 310.800000, 435.150000);
	ctx.bezierCurveTo(266.380000, 444.250000, 240.000000, 433.550000, 226.670000, 427.230000);
	ctx.bezierCurveTo(212.430000, 420.480000, 198.510000, 407.770000, 192.520000, 400.880000);
	ctx.bezierCurveTo(180.790000, 387.370000, 179.870000, 368.580000, 174.390000, 345.420000);
	ctx.bezierCurveTo(171.510000, 333.270000, 169.260000, 325.660000, 157.240000, 297.640000);
	ctx.bezierCurveTo(153.470000, 288.840000, 135.860000, 257.740000, 125.430000, 233.410000);
	ctx.bezierCurveTo(120.660000, 222.280000, 116.200000, 213.530000, 112.330000, 204.280000);
	ctx.bezierCurveTo(108.920000, 196.140000, 103.350000, 185.460000, 97.290000, 172.240000);
	ctx.bezierCurveTo(94.960000, 167.150000, 91.800000, 157.200000, 93.590000, 147.080000);
	ctx.bezierCurveTo(93.900000, 145.330000, 94.560000, 133.970000, 103.550000, 131.450000);
	ctx.bezierCurveTo(107.860000, 130.240000, 113.700000, 132.260000, 118.980000, 141.050000);
	ctx.bezierCurveTo(123.670000, 148.840000, 128.270000, 160.350000, 137.910000, 182.740000);
	ctx.bezierCurveTo(142.790000, 194.080000, 149.930000, 205.390000, 164.210000, 228.010000);
	ctx.bezierCurveTo(176.120000, 246.870000, 182.080000, 256.310000, 186.840000, 261.040000);
	ctx.bezierCurveTo(191.340000, 265.480000, 199.900000, 271.590000, 242.520000, 291.000000);
	ctx.closePath();
	ctx.fill();
	
// Aspen Biom
	ctx.beginPath();
	ctx.fillStyle = 'rgb(207, 226, 131)';
	ctx.moveTo(104.240000, -14.180000);
	ctx.bezierCurveTo(104.580000, -6.090000, 103.280000, -3.510000, 101.510000, 10.380000);
	ctx.bezierCurveTo(99.810000, 23.720000, 99.430000, 33.790000, 99.120000, 41.760000);
	ctx.bezierCurveTo(98.560000, 56.430000, 99.250000, 63.260000, 100.830000, 75.520000);
	ctx.bezierCurveTo(102.470000, 88.260000, 104.580000, 91.220000, 106.190000, 97.280000);
	ctx.bezierCurveTo(107.430000, 101.950000, 110.440000, 110.200000, 110.440000, 115.930000);
	ctx.bezierCurveTo(110.440000, 123.450000, 106.680000, 128.530000, 101.930000, 129.530000);
	ctx.bezierCurveTo(95.310000, 130.930000, 90.150000, 129.840000, 85.410000, 123.780000);
	ctx.bezierCurveTo(79.340000, 116.030000, 77.650000, 108.980000, 71.180000, 85.340000);
	ctx.bezierCurveTo(69.570000, 79.450000, 64.310000, 66.510000, 61.260000, 58.140000);
	ctx.bezierCurveTo(53.200000, 35.910000, 44.880000, 34.680000, 40.120000, 15.490000);
	ctx.bezierCurveTo(38.550000, 9.160000, 35.810000, -2.520000, 40.120000, -15.890000);
	ctx.bezierCurveTo(41.480000, -20.100000, 47.050000, -37.380000, 63.990000, -43.860000);
	ctx.bezierCurveTo(73.060000, -47.330000, 87.940000, -48.680000, 96.730000, -40.110000);
	ctx.bezierCurveTo(103.410000, -33.590000, 103.820000, -24.060000, 104.240000, -14.180000);
	ctx.closePath();
	ctx.fill();
	
// Prarie 
	ctx.beginPath();
	ctx.fillStyle = 'rgb(242, 242, 102)';
	ctx.moveTo(58.640000, 417.690000);
	ctx.bezierCurveTo(77.330000, 427.420000, 106.250000, 437.140000, 124.390000, 437.140000);
	ctx.bezierCurveTo(138.990000, 437.140000, 150.740000, 432.960000, 161.700000, 424.850000);
	ctx.bezierCurveTo(173.060000, 416.450000, 177.150000, 404.690000, 177.150000, 394.390000);
	ctx.bezierCurveTo(177.150000, 379.600000, 170.990000, 352.960000, 166.540000, 337.380000);
	ctx.bezierCurveTo(160.940000, 317.810000, 155.350000, 309.780000, 146.610000, 291.410000);
	ctx.bezierCurveTo(125.700000, 247.460000, 126.720000, 249.110000, 114.940000, 222.800000);
	ctx.bezierCurveTo(102.430000, 194.850000, 97.390000, 188.420000, 91.040000, 169.510000);
	ctx.bezierCurveTo(87.420000, 158.710000, 86.700000, 154.450000, 82.230000, 139.100000);
	ctx.bezierCurveTo(78.890000, 127.640000, 75.760000, 118.640000, 69.910000, 98.860000);
	ctx.bezierCurveTo(67.110000, 89.380000, 59.850000, 68.290000, 52.370000, 52.520000);
	ctx.bezierCurveTo(42.970000, 32.690000, 21.810000, 10.990000, 15.550000, 5.400000);
	ctx.bezierCurveTo(8.390000, -0.990000, -2.140000, -2.740000, -12.320000, 3.210000);
	ctx.bezierCurveTo(-27.670000, 12.190000, -26.060000, 45.230000, -21.280000, 70.680000);
	ctx.bezierCurveTo(-9.510000, 133.320000, 20.150000, 174.730000, 25.430000, 187.480000);
	ctx.bezierCurveTo(33.860000, 207.820000, 56.610000, 234.030000, 37.800000, 287.260000);
	ctx.bezierCurveTo(26.740000, 318.570000, 24.120000, 322.670000, 22.780000, 340.090000);
	ctx.bezierCurveTo(21.160000, 361.180000, 23.410000, 399.340000, 58.640000, 417.690000);
	ctx.closePath();
	ctx.fill();
}


// Triangle collision Detection //
// found here https://stackoverflow.com/questions/47234052/click-on-the-triangle-project-in-p5-js-allows-clicking-outside-of-triangle-fix //
//
// function collisionDetection(mx,my,x1,y1,x2,y2,x3,y3) {
//   var areaShape = floor(abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1)));
//   var area1 = floor(abs((x1 - mx) * (y2 - my) - (x2 - mx) * (y1 - my)));
//   var area2 = floor(abs((x2 - mx) * (y3 - my) - (x3 - mx) * (y2 - my)));
//   var area3 = floor(abs((x3 - mx) * (y1 - my) - (x1 - mx) * (y3 - my)));
//   console.log("areaSum: " + (area1 + area2 + area3));
//   if (area1 + area2 + area3 <= areaShape) {
//     return true;
//   }
//   return false;
// }
// Triangle to collide //
//
// function drawPine() {
//   // #path51
//   stroke('red');
//   beginShape();
//   noFill();
//   vertex(150, 200);
//   vertex(300, 250);
//   vertex(100, 250);
//   endShape(CLOSE);
// }