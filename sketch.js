console.log(fxhash);
function rnd_int(min, max) {
  // rnd_int(a,b) gives u an integer value between a and b
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min + 1)) + min;
}

const keysToIt = fxhash; //which base case using
const numRegex = /\d/g;
const wordRegex = /[A-z]/gi;
const resultNumRegex = keysToIt.match(numRegex).length;
const resultWordRegex = keysToIt.match(wordRegex);
const keysLength = keysToIt.length;
const frameSet = Math.round(resultWordRegex / resultNumRegex) * 1.87;

const blues = [
  "#1F51FF",
  "#89CFF0",
  "#3F00FF",
  "#0096FF",
  "#0047AB",
  "#0000FF",
  "#0048BA",
  "#3870C9",
  "#1C5CC1",
  "#0048BA",
  "#0040A5",
  "#003890",
  "#a08d85",
  "#af9f98",
  "#bfb2ac",
  "#cfc4c0",
  "#dfd8d5",
  "#efebea",

];

const aliens = [
  "#a08d85",
  "#af9f98",
  "#bfb2ac",
  "#cfc4c0",
  "#dfd8d5",
  "#efebea",
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(fxrand() * (i + 1));
    const temp = array[i];
    array[j] = temp;
  }
  return array;
};

//    return blue;
// }

const colors = [];
while (colors.length < 128) {
  do {
    var color = Math.floor(fxrand() * 167757215);
  } while (colors.indexOf(color) >= 0);
  colors.push("#" + color.toString(16).slice(-6));
}


function colorMe() {
  color = colors[rnd_int(0, colors.length - 1)];
  //console.log(color);
  return color;
}

function giveMeBlue() {
  // blueMood = blues[rnd_int(0,blues.length-1)];
  blueMood = shuffleArray(blues);
 // console.log(blues, blueMood);
  return blueMood[0];
}

function giveMeAlien() {
  shadeOfAlien = shuffleArray(aliens);
  return shadeOfAlien[0];
}

//setup workspace
// console.log(giveMeColor());
const workSpace = {
  x: 640,
  y: 512,
  //mute: rnd_int(0, 256),
  color: "HSL", //RGB HSL HSB
  backgroundMain: giveMeBlue(),
};

function giveMeNum() {
  num = rnd_int(0, 256);
  //console.log(num);
  return num;
}

const jimmiX = giveMeNum();

function setup() {
  randomSeed(fxhash);
  frameRate(1);
 //giveMeAlien();
  //giveMeBlue();
  rectMode(CENTER);
  ellipseMode(CENTER);
  createCanvas(workSpace.x, workSpace.y);
  colorMode(workSpace.color);
  // background(workSpace.backgroundMain);
  // currentTick();
  // jimmie(jimmiX);
}

function draw() {
  background(workSpace.backgroundMain);
  //ghass();
  currentTick();
  jimmie(jimmiX);
}

function ghass(){
   for (let y = 0; y <= workSpace.y; y++) {
    let x = randomGaussian(50, 50);
    stroke(colorMe());
    fill(colorMe());
    strokeWeight(5);
    ellipse(x,y,15)
  }
}

function currentTick() {
  let whatMonth = month();
  let whatDay = day();
  let whatYear = year();
  let whatHour = hour();
  let whatMinute = minute();
  let whatSec = second();

  //whatHour = whatHour < 10 ? "0" + whatHour : whatHour;
  whatMinute = whatMinute < 10 ? "0" + whatMinute : whatMinute;
  whatSec = whatSec < 10 ? "0" + whatSec : whatSec;


  let dty = whatMonth + "/" + whatDay + "/" + whatYear; 

  let time = whatHour + ":" + whatMinute + ":" + whatSec + " " + dty ;
  // document.getElementById("clock").inn1erText = time;
  let t = setTimeout(function () {
    currentTick();
  }, 1000);
// while (whatSec < 20 ) {
//   eyeFillnormal = colors[6];  
//   // console.log();
// }


  push();
  translate(-225, 170);
  fill(aliens[1]);
  stroke(blues[5]);
  strokeWeight(10);
  //blendMode(DIFFERENCE);//$workSpace.drizzle);
 
  textSize(64);
  text(time,workSpace.x/2, workSpace.y/9);
  //text(time, workSpace.x / 3.5-22, workSpace.y / 1.75);
  pop();
}

//clean up for jimmie shit

let leftEarXVar = rnd_int(240, 250); //245
let leftEarXVar1 = rnd_int(230, 240); //235
let leftEarXVar2 = rnd_int(260, 270); //265
let leftEarXVar3 = rnd_int(200, 210); //205
let leftEarXVar4 = rnd_int(190, 200); //195
let leftEarXVar5 = rnd_int(180, 190); //185
let rightEarXVar = rnd_int(390, 400); //395
let rightEarXVar1 = rnd_int(145, 155); //150
let rightEarXVar2 = rnd_int(300, 310); //305
let rightEarXVar3 = rnd_int(245, 265); //270
let rightEarXVar4 = rnd_int(270, 280); //275
let rightEarXVar5 = rnd_int(210, 220); //215
let leftEyeXVar = rnd_int(250, 260); //255
let leftEyeXVar1 = rnd_int(215, 225); //220
let rigthEyeXVar = rnd_int(295, 305); //300
let rightEyeXVar1 = rnd_int(205, 215); //210
let leftPupilXVar = rnd_int(leftEyeXVar, leftEyeXVar); //255' center eye
let leftPupilXVar1 = rnd_int(leftEyeXVar1, leftEyeXVar1); //220
let leftPupilXVar2 = rnd_int(6, 15); //10
let rightPupilXVar = rnd_int(300, 310); //305 lazy floater
let rightPupilXVar1 = rnd_int(210, 220); //215
let rightPupilXVar2 = rnd_int(7, 13); //10
let neckSizeXVar = rnd_int(280, 285); //280
let neckSizeXVar1 = rnd_int(310, 320); //315
let neckSizeXVar2 = rnd_int(15, 25); //25
let noseSizeXVar = rnd_int(279, 281); //280
let noseSizeXVar1 = rnd_int(297, 302); //300
let leftCheekXVar = rnd_int(250, 255); //250
let leftCheekXVar1 = rnd_int(250, 255); //250
let leftCheekXVar2 = rnd_int(66, 72); //69
let leftCheekXVar3 = rnd_int(40, 44); //42
let rightCheekXVar = rnd_int(300, 305); //300
let rightCheekXVar1 = rnd_int(250, 255); //250
let rightCheekXVar2 = rnd_int(66, 72); //69
let rightCheekXVar3 = rnd_int(40, 44); //42
let leftWhiskXVar = rnd_int(132, 165); //132,165
let leftWhiskXVar1 = rnd_int(220, 235); //220,235
let leftWhiskXVar2 = rnd_int(225, 245); //300
let leftWhiskXVar3 = rnd_int(10, 15); //wiggle
let rightWhiskXVar = rnd_int(315, 325); //315,325
let rightWhiskXVar1 = rnd_int(240, rightCheekXVar1); //245,250
let rightWhiskXVar2 = rnd_int(10, 25);
let tongueXVar = rnd_int(270, neckSizeXVar - 10); //275
let tongueXVar1 = rnd_int(neckSizeXVar1 - 10, 355); //355
let tongueXVar2 = rnd_int(10, 15); //125
let eyeFillnormal  = colors[99] ; 




function jimmie(x) {
  // setup and draw out a jimmie will prob
  push(); // change this later to make it something more constructor or clas
  translate(x, 101); // lots of vairables and points
  strokeWeight(6);
  //ears
  stroke(colors[77]);
  fill(colors[119]);
  triangle(
    leftEarXVar,
    leftEarXVar1,
    leftEarXVar2,
    leftEarXVar3,
    leftEarXVar4,
    leftEarXVar5
  ); //left ear
  triangle(
    rightEarXVar,
    rightEarXVar1,
    rightEarXVar2,
    rightEarXVar3,
    rightEarXVar4,
    rightEarXVar5
  ); //right ear
  //eye   ************EYES
  //stroke(colorMe());
  fill(eyeFillnormal);
  //arc(x,y,w,h,st,stop,chord)
  arc(leftEyeXVar, leftEyeXVar1, 55, 60, 2, 1, CHORD); //left
  arc(rigthEyeXVar, rightEyeXVar1, 50, 100, 2, 1, CHORD); // right
  //pupil
//  stroke(colorMe());
  fill(colors[88]);
  circle(leftPupilXVar, leftPupilXVar1, leftPupilXVar2); // left
  circle(rightPupilXVar, rightPupilXVar1, rightPupilXVar2); // rigt
  //neck ***************************NECK
 // stroke(colorMe());
  fill(colors[119]);
  rect(
    neckSizeXVar,
    neckSizeXVar1 + 80,
    neckSizeXVar2,
    neckSizeXVar2 + neckSizeXVar2
  );
  arc(neckSizeXVar, neckSizeXVar1, 40, 145, 0, 5, CHORD);
  //nose
  //stroke(colorMe());
  fill("black");
  ellipse(noseSizeXVar, noseSizeXVar1, 20, 155);
  //cheeks
  //stroke(colorMe());
  fill(colors[69]);
  circle(noseSizeXVar, noseSizeXVar1-65,22);
  fill(colors[120]);
  ellipse(leftCheekXVar, leftCheekXVar1, leftCheekXVar2, leftCheekXVar3);
  ellipse(rightCheekXVar, rightCheekXVar1, rightCheekXVar2, rightCheekXVar3);
  //whisker(s)
  //stroke(colorMe());
  strokeWeight(4.2);
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

  line(rightWhiskXVar, 250, 375, rightWhiskXVar1); //right top
  line(rightWhiskXVar, 255, 375, rightWhiskXVar1 + rightWhiskXVar2);
  //tongue
  fill("red");
  stroke(colors[36]);
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
