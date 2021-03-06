class Pipe {
  constructor() {
    this.x = width;
    this.w = 90;
    this.gap = 120;
    this.min_height = 100;
    this.max_height = height - this.min_height - this.gap;
    this.top = floor(random(this.min_height, this.max_height));
    this.speed = 5;
  }

  show() {
    fill(255, 0, 0);
    image(pipeRevImg, this.x, 0, this.w, this.top);
    fill(0, 255, 0);
    let heights = height - this.gap - this.top;
    let y = height - heights;
    image(pipeImg, this.x, y, this.w, heights);
  }

  offScreen() {
    if (this.x + this.w + this.speed < 0) {
      return true;
    }
    return false;
  }

  hit(bird) {
    if (bird.x > this.x && bird.x < this.x + this.w) {
      if (bird.y < this.top ||
        bird.y > this.top + this.gap) {
        return true;
      }
    }
    return false;
  }

  pass(bird) {
    if (bird.x > this.x + this.w) {
      return true;
    }
    return false;
  }

  update() {
    this.x -= this.speed;
  }
}
