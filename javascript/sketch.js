let numOfTilesX = 3;
let numOfTilesY = 3;
let tileSizeX;
let tileSizeY;

let randE;
let randS;
let randW;
let randN;
let randRx;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  rectMode(CENTER);

  tileSizeX = width / numOfTilesX;
  tileSizeY = height / numOfTilesY;

  randE = random(0.1, 0.9);
  randS = random(0.1, 0.9);
  randW = random(0.1, 0.9);
  randN = random(0.1, 0.9);
  randRx = random(1, 90);
}

function draw() {
  background(248);

  strokeWeight(3);
  myCross(
    0.3,
    width * 0.8,
    height * 0.8,
    0,
    0,
    (width - width * 0.85) * randE,
    (height - height * 0.85) * randS,
    -(width - width * 0.25) * randW,
    -(height - height * 0.25) * randN
  );

  dandelion(width + 20, height * 0.75, -30, 30);
  fill(230);
  strokeWeight(0.3);
  rect(width * 0.85, height * 0.25, tileSizeX * 0.15, tileSizeY * 0.5);

  push();
  translate(width * 0.72, height + 20);
  rotate(39);
  rect(0, 0, tileSizeX * 0.15, tileSizeY * 0.5);
  pop();
  
  push();
  scale(0.75, 0.75);

  push();
  translate(tileSizeX * 0.5, tileSizeY * 0.5);

  for (i = 0; i < numOfTilesX; i++) {
    for (j = 0; j < numOfTilesY; j++) {
      strokeWeight(3);
      fill(230);
      rect(i * tileSizeX, j * tileSizeY, tileSizeX - 10, tileSizeY - 10);

      dandelion(
        i * tileSizeX,
        j * tileSizeY,
        -tileSizeX * 0.4,
        tileSizeX * 0.4
      );
      myCross(
        0.6,
        i * tileSizeX,
        j * tileSizeY,
        randRx * i,
        0,
        tileSizeX * 0.4 * randE,
        tileSizeY * 0.4 * randS,
        -tileSizeX * 0.4 * randW,
        -tileSizeY * 0.4 * randN
      );
    }
  }
  pop();
  pop();
}

function dandelion(transX, transY, sizeA, sizeB) {
  push();
  translate(transX, transY);

  for (let rotateVal = 0; rotateVal < 360; rotateVal += 0.57) {
    rotate(rotateVal);

    strokeWeight(0.025);
    line(sizeA, 0, sizeB, 0);
  }

  pop();
}

function myCross(
  crossWeight,
  crossX,
  crossY,
  myRotX,
  myRotY,
  lengthE,
  lengthS,
  lengthW,
  lengthN
) {
  push();
  translate(crossX, crossY);
  rotate(myRotX, myRotY);

  noFill();
  strokeWeight(crossWeight);
  line(0, 0, lengthE, 0);
  line(0, 0, 0, lengthS);
  line(0, 0, lengthW, 0);
  line(0, 0, 0, lengthN);

  pop();
}
