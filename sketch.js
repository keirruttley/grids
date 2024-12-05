const CELLSIZES = [100, 80, 160];
const COLOURS = ["#4287f5", "#7fff00", "#556b2f", "#ff4500", "#00000"]
function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(220);
  noStroke()
  //////////////
  // Simple Grid
  //////////////
  // const CELLSIZE = 10;
  // for (let y = 0; y < height; y += CELLSIZE) {
  //   // this code makes a row from the top left across
  //   for (let x = 0; x < width; x += CELLSIZE) {
  //     fill(random(255));
  //     rect(x, y, CELLSIZE)
  //   }
  // }

  ////////////////
  // Piet Mondrian
  ////////////////
  // strokeWeight(6)
  // let x = 0;
  // let y = 0;
  // let currentWidth = random(CELLSIZES);
  // let currentHeight = random(CELLSIZES);
  // while (y < height) {
  //   while (x < width) {
  //     fill(random(COLOURS));
  //     rect(x, y, currentWidth, currentHeight);
  //     x += currentWidth;
  //     currentWidth = random(CELLSIZES);
  //   }
  //   x = 0;
  //   y +=  currentHeight;
  //   currentHeight = random(CELLSIZES);
  // }


  //////////////////
  // Grid of Shapes
  //////////////////
const ARCVALUES = [TAU * 0.25, TAU * 0.5, TAU * 0.75, TAU];
  const CELLSIZE = 50;
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {
      fill(random(COLOURS));
      // draw circle in the middle of the cell
      arc(x + CELLSIZE/2, y + CELLSIZE/2, CELLSIZE, CELLSIZE, 0, random(ARCVALUES));
      arc(x + CELLSIZE/2, y + CELLSIZE/2, CELLSIZE/2, CELLSIZE, 0, random(ARCVALUES));

    }
  }
}
