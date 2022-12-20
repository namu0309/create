let ball;

function setup() {
  createCanvas(400, 400);

  ball = new Particle();
}


function draw() {
  background(220);
  let gravity = createVector(0, 0);
  ball.addForce(gravity);

  ball.update();
  ball.show();
}