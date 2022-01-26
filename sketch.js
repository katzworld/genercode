const keysToIt = pb.hash;
const numRegex = /[0-9]/g;
const resultNumRegex = keysToIt.match(numRegex);

console.log(resultNumRegex);

//make colors seems to show off some wild ones 
const colors = [];
while (colors.length < 128) {
  do {
    var color = Math.floor(pb.random()  * 10000000 + 1);
  } while (colors.indexOf(color) >= 0);
  colors.push("#" + ('0000000' + keysToIt + color.toString(12)).slice(-6));
}

console.log(colors);


const workSpace = {
  x: 512,
  y: 512,
  mute: pb.randint(0, 256),
  backgroundMain: colors[pb.randint(0, colors.length - 1)],

}

function setup() {
  createCanvas(workSpace.x, workSpace.y);
  colorMode(RGB, workSpace.mute);
  background(workSpace.backgroundMain);
  rectMode(CENTER);
 drop(); 
}
function boxSize() {
   return resultNumRegex[(pb.randint(0,resultNumRegex.length-1))];
}
function giveMeColor(){
  return colors[pb.randint(0, colors.length - 1)]

}
console.log(giveMeColor());
console.log(boxSize());
function drop() {
    for (i = 0; i < colors.length-1; i++){
    for (j = 0; j < colors.length-1; j++){
    fill(colors[j]);
    strokeWeight(boxSize());
    stroke(giveMeColor());
    //erase();
    triangle(j*10,i*10,i*10,j*10,boxSize()*j,boxSize()*i);
    // noErase();
    // fill(colors[i]);
    // rect(i*50,j*25,boxSize()*60)
     blendMode(DIFFERENCE);
      // blendMode(H);
  }
}
}

function draw(){
}


console.log(workSpace.backgroundMain)