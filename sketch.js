let pipes = [];
let bird;
let playing = false;

let birdImg, pipeImg, pipeRevImg, backgroundImg;

function preload() {
  birdImg = loadImage('bird.png');
  pipeImg = loadImage('pipes.png');
  pipeRevImg = loadImage('pipes_reverse.png');
  backgroundImg = loadImage('background.png');
}

function setup() {
  createCanvas(400, 600);
  frameRate(40);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(50);
}

function draw() {
  background(backgroundImg);
  if (frameCount % 50 == 0) {
    pipes.push(new Pipe());
    playing = true;
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].offScreen()) {
      if (pipes[i].pass(bird)) {
        bird.score++;
      }
      pipes.splice(i, 1);
    }
    if (pipes[i].hit(bird)) {
      strokeWeight(8);
      rectMode(CENTER);
      fill(255);
      rect(width / 2, height / 2, width - 80, 80);
      fill(0);
      text("Score: " +
        bird.score, width / 2, height / 2);
      playing = false;
    }
  }
  bird.show();
  bird.update();
  if (playing) {
    text(bird.score, width / 2, height / 5);
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.flap();
  }
}

function drawLine() {
  let step = 100;
  stroke(1);
  for (let i = 0; i < height / step; i++) {
    line(0, i * step, width, i * step)
  }
}
