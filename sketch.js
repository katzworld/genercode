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
    var color = Math.floor(pb.random()  * 100000 + 1);
  } while (colors.indexOf(color) >= 0);
  colors.push("#" + (keysToIt + color.toString(18)).slice(-6));
}

//setup workspace  

const workSpace = {
  x: 1024,
  y: 1024,
  mute: pb.randint(0, 256),
  backgroundMain: colors[pb.randint(0, colors.length)],

};

function setup() {
  createCanvas(workSpace.x, workSpace.y);
  colorMode(RGB, workSpace.mute);
  background(workSpace.backgroundMain);
}

