const keysToIt = pb.hash;
const numRegex = /\d/g;
const wordRegex = /\D/g;
const resultNumRegex = keysToIt.match(numRegex).length;
const resultWordRegex = keysToIt.match(wordRegex).length;
const resulthash = keysToIt.match(wordRegex);
const keysLength = keysToIt.length;
const frameSet = Math.round(resultWordRegex / resultNumRegex) * 1.87;
const strWght = resultNumRegex / resultWordRegex;
const colors = [];
while (colors.length < 64) {
  do {
    var color = Math.floor(pb.random() * 10000000 + 1);
  } while (colors.indexOf(color) >= 0);
  colors.push("#" + (keysToIt + color.toString(12)).slice(-6));
}
function colorMe() {
  return colors[pb.randint(0, colors.length - 1)];
}


const canvas = {
  x: 1024,
  y: 800,
  mute: pb.randint(0, 256),
};


function setup() {
  let canvasToSave = createCanvas(canvas.x, canvas.y);
  colorMode(RGB, canvas.mute);
  background(colorMe());
  
  // saveCanvas(canvasToSave,resulthash[1]+resulthash[2]+resulthash[3]+resulthash[4]+resulthash[5]+"#10" ,'png')
}

function giveMeCords() {
  return pb.randint(resultNumRegex, canvas.x);
}


function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(pb.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
