// these are the variables you can use as inputs to your algorithms
// console.log(fxhash); // the 64 chars hex number fed to your algorithm
const keysToIt = pb.hash;

const numRegex = /\d/g;
const wordRegex = /\D/g;
const resultNumRegex = keysToIt.match(numRegex).length;
const resultWordRegex = keysToIt.match(wordRegex).length;
const keysLength = keysToIt.length;
const frameSet = Math.round(resultWordRegex / resultNumRegex) * 1.87;
const strWght = resultNumRegex / resultWordRegex;

const jimX = pb.randint(0, 110); //slide on that bottom screen
const agmiX = pb.randint(0, 250); //slide on that bottom screen
const agmiY = pb.randint(0, 100); //slide on that bottom screen
var colors = [];
while (colors.length < 1024) {
  do {
    var color = Math.floor(Math.random() * 1000000 + 1);
  } while (colors.indexOf(color) >= 0);
  colors.push("#" + ("0" + color.toString(16)).slice(-6));
}
// console.log(colors);
// console.log(pb.randint(0, colors.length));
const coinFill = colors[pb.randint(0, colors.length)];
const coinInFill = colors[pb.randint(0, colors.length)];
const coinInStroke = colors[pb.randint(0, colors.length)];
const coinOutStroke = colors[pb.randint(0, colors.length)];
const waveFill = colors[pb.randint(0, colors.length)];
const waveStroke = colors[pb.randint(0, colors.length)];
const waveBackdrop = colors[pb.randint(0, colors.length)];

const canvas = {
  x: 512,
  y: 512,
  mute: pb.randint(0, 256),
};
const bc = {
  cc: resultNumRegex,
  aa: resultWordRegex,
};

function setup() {
  createCanvas(canvas.x, canvas.y);
  colorMode(RGB, canvas.mute);
  frameRate(frameSet);
  background(bc.cc, bc.aa);
  wagmiWave(agmiX, agmiY);
  wagmiWave(agmiY - 10, agmiX - 10);

  wagmi(agmiX, agmiY);
  jimmie(jimX); //(60,90);
}

function wagmiWave(xoff, yoff) {
  blendMode(DIFFERENCE);
  background(waveBackdrop);
  stroke(waveStroke);
  strokeWeight(50);
  fill(waveFill);
  beginShape();
 for (let x = 0; x <= width; x += 10) {
    let y = pb.randrange(xoff, yoff)
  vertex(x, y);
    xoff += 25;
  }
  yoff += 0.21;
  vertex(width, height);
  vertex(0, height);
  // noErase();

  endShape(CLOSE);
  blendMode(BLEND);

}

function wagmi(wagmiX, wagmiY) {
  push(); // the wagmi token hahah daaaamn
  translate(wagmiX, wagmiY);
  strokeWeight(3.5);
  stroke(coinOutStroke);
  fill(coinFill);
  circle(120, 120, 225);
  fill(coinInFill);
  stroke(coinInStroke);
  beginShape(); //im sure this is not the easy way to make this
  //curveVertex();
  vertex(60, 60);
  vertex(80, 60);
  vertex(80, 100);
  vertex(100, 90);
  vertex(105, 80); //but it workd
  vertex(110, 60);
  vertex(140, 60);
  vertex(140, 80);
  vertex(130, 100);
  vertex(120, 110);
  vertex(100, 130);
  vertex(80, 130);
  vertex(80, 140);
  vertex(120, 140);
  vertex(140, 120);
  vertex(160, 100);
  vertex(160, 80);
  vertex(160, 60);
  vertex(200, 60);
  vertex(200, 80);
  vertex(200, 80);
  vertex(200, 120);
  vertex(180, 140);
  vertex(140, 180);
  vertex(120, 180);
  vertex(100, 180);
  vertex(80, 180);
  vertex(60, 180);
  vertex(60, 60);
  endShape();
  pop();
}

function jimmie(x) {
  push();
  translate(x, 110);
  strokeWeight(strWght * 3.14);
  //ears
  stroke("black");
  fill("orange");
  let leftEarXVar = pb.randint(240, 250); //245
  let leftEarXVar1 = pb.randint(230, 240); //235
  let leftEarXVar2 = pb.randint(260, 270); //265
  let leftEarXVar3 = pb.randint(200, 210); //205
  let leftEarXVar4 = pb.randint(190, 200); //195
  let leftEarXVar5 = pb.randint(180, 190); //185
  triangle(
    leftEarXVar,
    leftEarXVar1,
    leftEarXVar2,
    leftEarXVar3,
    leftEarXVar4,
    leftEarXVar5
  ); //left
  let rightEarXVar = pb.randint(390, 400); //395
  let rightEarXVar1 = pb.randint(145, 155); //150
  let rightEarXVar2 = pb.randint(300, 310); //305
  let rightEarXVar3 = pb.randint(245, 265); //270
  let rightEarXVar4 = pb.randint(270, 280); //275
  let rightEarXVar5 = pb.randint(210, 220); //215
  triangle(
    rightEarXVar,
    rightEarXVar1,
    rightEarXVar2,
    rightEarXVar3,
    rightEarXVar4,
    rightEarXVar5
  ); //rigth
  //eye   ************EYES
  stroke("black");
  fill("white");
  //arc(x,y,w,h,st,stop,chord)
  let leftEyeXVar = pb.randint(250, 260); //255
  let leftEyeXVar1 = pb.randint(215, 225); //220
  arc(leftEyeXVar, leftEyeXVar1, 55, 60, 2, 1, CHORD); //left
  let rigthEyeXVar = pb.randint(295, 305); //300
  let rightEyeXVar1 = pb.randint(205, 215); //210
  arc(rigthEyeXVar, rightEyeXVar1, 50, 100, 2, 1, CHORD); // right
  //pupil
  stroke("red");
  fill("black");
  let leftPupilXVar = pb.randint(leftEyeXVar, leftEyeXVar); //255' center eye
  let leftPupilXVar1 = pb.randint(leftEyeXVar1, leftEyeXVar1); //220
  let leftPupilXVar2 = pb.randint(6, 15); //10
  circle(leftPupilXVar, leftPupilXVar1, leftPupilXVar2); // left
  let rightPupilXVar = pb.randint(300, 310); //305 lazy floater
  let rightPupilXVar1 = pb.randint(210, 220); //215
  let rightPupilXVar2 = pb.randint(7, 13); //10
  circle(rightPupilXVar, rightPupilXVar1, rightPupilXVar2); // rigt
  //neck ***************************NECK
  stroke("black");
  fill("orange");
  let neckSizeXVar = pb.randint(280, 285); //280
  let neckSizeXVar1 = pb.randint(310, 320); //315
  let neckSizeXVar2 = pb.randint(15, 25); //25
  rectMode(CENTER);
  rect(
    neckSizeXVar,
    neckSizeXVar1 + 80,
    neckSizeXVar2,
    neckSizeXVar2 + neckSizeXVar2
  );
  arc(neckSizeXVar, neckSizeXVar1, 40, 145, 0, 5, CHORD);
  //nose
  stroke("black");
  fill("black");
  let noseSizeXVar = pb.randint(279, 281); //280
  let noseSizeXVar1 = pb.randint(297, 302); //300
  ellipse(noseSizeXVar, noseSizeXVar1, 20, 155);
  //cheeks
  stroke("black");
  fill("tan");
  let leftCheekXVar = pb.randint(250, 255); //250
  let leftCheekXVar1 = pb.randint(250, 255); //250
  let leftCheekXVar2 = pb.randint(66, 72); //69
  let leftCheekXVar3 = pb.randint(40, 44); //42
  ellipse(leftCheekXVar, leftCheekXVar1, leftCheekXVar2, leftCheekXVar3);
  let rightCheekXVar = pb.randint(300, 305); //300
  let rightCheekXVar1 = pb.randint(250, 255); //250
  let rightCheekXVar2 = pb.randint(66, 72); //69
  let rightCheekXVar3 = pb.randint(40, 44); //42
  ellipse(rightCheekXVar, rightCheekXVar1, rightCheekXVar2, rightCheekXVar3);
  //whisker(s)
  stroke("gray");
  strokeWeight(strWght * 4.2);
  let leftWhiskXVar = pb.randint(132, 165); //132,165
  let leftWhiskXVar1 = pb.randint(220, 235); //220,235
  let leftWhiskXVar2 = pb.randint(225, 245); //300
  let leftWhiskXVar3 = pb.randint(10, 15); //wiggle
  line(leftWhiskXVar, leftWhiskXVar1, leftWhiskXVar2, 240); //left top
  line(
    leftWhiskXVar + leftWhiskXVar3,
    leftWhiskXVar1 + leftWhiskXVar3,
    leftWhiskXVar2 + leftWhiskXVar3,
    250
  );
  line(
    leftWhiskXVar + leftWhiskXVar3 + leftWhiskXVar3,
    leftWhiskXVar1 + leftWhiskXVar3 + leftCheekXVar3,
    leftWhiskXVar1 + leftWhiskXVar3,
    260
  ); //left bot

  let rightWhiskXVar = pb.randint(315, 325); //315,325
  let rightWhiskXVar1 = pb.randint(240, rightCheekXVar1); //245,250
  let rightWhiskXVar2 = pb.randint(10, 25);

  line(rightWhiskXVar, 250, 375, rightWhiskXVar1); //right top
  line(rightWhiskXVar, 255, 375, rightWhiskXVar1 + rightWhiskXVar2);
  //tongue
  fill("red");
  stroke("pink");
  let tongueXVar = pb.randint(270, neckSizeXVar); //275
  let tongueXVar1 = pb.randint(neckSizeXVar1, 355); //355
  let tongueXVar2 = pb.randint(10, 15); //125
  arc(
    tongueXVar,
    tongueXVar1 - tongueXVar2 / 2,
    125,
    tongueXVar2,
    265,
    125,
    CHORD
  );
  pop();
}

function draw() {} //nah dog I got this
