let balls = [];

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  let r = random(10, 50);
  let b = new Ball(mouseX, mouseY, r);
  balls.push(b);
}

function draw() {
  background(220);
  let gravity = createVector(0, 0.1);
  ball.addForce(gravity);

  ball.update();
  ball.show();
}