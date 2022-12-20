class Ball {
  constructor(x,y,r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.c = color(0, 100);
    this.w = r;
  }

  addForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.checkEdge();
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
    this.pos.x += random(-5,5);
  }


  checkEdge() {
    if (this.pos.y > height) {
      this.vel.y = this.vel.y * -0.8;
      this.pos.y = height;
      this.w -= 5;

    }
    
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
  }


  show() {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
  }


  isDead() {
    if (this.w < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
