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
const colors = [];
while (colors.length < 1024) {
  do {
    var color = Math.floor(pb.random()  * 100000 + 1);
  } while (colors.indexOf(color) >= 0);
  colors.push("#" + (keysToIt + color.toString(18)).slice(-6));
}


var coinFill = colors[pb.randint(0, colors.length)];
var coinInFill = colors[pb.randint(0, colors.length)];
var coinInStroke = colors[pb.randint(0, colors.length)];
var coinOutStroke = colors[pb.randint(0, colors.length)];
var waveFill = colors[pb.randint(0, colors.length)];
var waveStroke = colors[pb.randint(0, colors.length)];
var waveBackdrop = colors[pb.randint(0, colors.length)];
var backgroundMain = colors[pb.randint(0, colors.length)];

const canvas = {
  x: 1024,
  y: 1024,
  mute: pb.randint(0, 256),
};
const agmiX = pb.randint(0, canvas.y/2); //slide on that bottom screen
const agmiY = pb.randint(0, canvas.x/2); //slide on that bottom screen

function setup() {
  createCanvas(canvas.x, canvas.y);
  colorMode(HSB, canvas.mute);
  background(backgroundMain);
  wagmiWave(agmiX, agmiY);
  wagmiWave(agmiY, agmiX);
  wagmiWave(agmiX, agmiX); 
  wagmiWave(agmiY, agmiY);
  wagmiCoin(agmiY, agmiX);


}

function wagmiWave(xoff, yoff) {
   blendMode(DIFFERENCE);
  background(waveBackdrop);
  stroke(waveStroke);
  strokeWeight(25);
  fill(waveFill);
  beginShape();
 for (let x = 0; x <= width; x += 10) {
    let y = pb.randint(xoff, yoff)
  vertex(x, y);
    xoff += 25;
  }
  yoff += 0.21;
  blendMode(DIFFERENCE);
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
   blendMode(BLEND );

}

function wagmiCoin(wagmiX, wagmiY) {
  push(); // the wagmi token hahah daaaamn
  translate(wagmiX, wagmiY);
  strokeWeight(10.5);
  stroke(coinOutStroke);
  fill(coinFill);
  circle(120, 120, 225);
  fill(coinInFill);
  stroke(coinInStroke);
   blendMode(DIFFERENCE );

  beginShape(); //im sure this is not the easy way to make this
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
 blendMode(SCREEN);

}

