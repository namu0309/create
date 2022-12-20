class Ball {
  constructor(x,y,r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.c = 0;
    this.w = r;
    this.lifetime = 255;
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
    this.lifetime -= 5;
  }


  checkEdge() {
    if (this.pos.y > height) {
      this.vel.y = this.vel.y * -0.8;
      this.pos.y = height;
      stroke ("red");

    }
    
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
  }


  show() {
    fill(this.c, this.lifetime);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
  }


  isDead() {
    if (this.lifetime < 0) {
      return true;
    } else {
      return false;
    }
  }
}
