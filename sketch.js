const keysToIt = pb.hash;
const numRegex = /\d/g;
const wordRegex = /\D/g;
const resultNumRegex = keysToIt.match(numRegex).length;
const resultWordRegex = keysToIt.match(wordRegex).length;
const keysLength = keysToIt.length;
const frameSet = Math.round(resultWordRegex / resultNumRegex) * 1.87;
const strWght = resultNumRegex / resultWordRegex;



//make colors seems to show off some wild ones 
const colors = [];
while (colors.length < 1024) {
  do {
    var color = Math.floor(pb.random()  * 100000000 + 1);
  } while (colors.indexOf(color) >= 0);
  colors.push("#" + ('00000' + keysToIt + color.toString(13)).slice(-6));
}

let noiseVal;
 let noiseScale = 0.02;
//setup workspace  

const workSpace = {
  x: 1024,
  y: 1024,
  mute: pb.randint(0, 256),
  backgroundMain: colors[pb.randint(0, colors.length - 1)],

}

function setup() {
  createCanvas(workSpace.x, workSpace.y);
  colorMode(HSB, workSpace.mute);
  drop();
  background(workSpace.backgroundMain);
  
}

function drop() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width / 2; x++) {
      noiseDetail(2, 0.2);
      noiseVal = noise((pb.random() + x) * noiseScale, (pb.random() + y) * noiseScale);
      blendMode(DIFFERENCE);
      stroke(noiseVal * 128);
      point(x, y);
      noiseDetail(8, 0.65);
      noiseVal = noise(
        (pb.random() + x + width) * noiseScale,
        (pb.random() + y) * noiseScale
      );
      stroke(noiseVal * 255);
      point(x + width / 2, y);
    }
  }
  
}

console.log(workSpace.backgroundMain)