
let orbitAngle = 0;
let orbitRadius = 125;
let orbitSpeed = 0.02;
let isPaused = false;


function setup() {
    let canvas = createCanvas(700, 600);

    canvas.parent("animation-container");

    textFont("Arial");
}


function draw() {
  background(10, 20, 45);

  let centerX = width / 2;
  let centerY = 285;

  // TITLE
  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(26);
  textStyle(BOLD);
  text("PLANET ORBIT SIMULATOR", width / 2, 45);

  textStyle(NORMAL);
  textSize(14);
  fill(170, 190, 220);
  text("Circular Motion Using Trigonometry", width / 2, 70);

  // ORBIT PATH
  noFill();
  stroke(100, 130, 170);
  strokeWeight(2);
  circle(centerX, centerY, orbitRadius * 2);

  // SUN
  noStroke();
  fill(255, 190, 40);
  circle(centerX, centerY, 55);

  fill(255);
  textSize(12);
  text("SUN", centerX, centerY + 48);

  // PLANET POSITION USING TRIGONOMETRY
  let planetX = centerX + orbitRadius * cos(orbitAngle);
  let planetY = centerY + orbitRadius * sin(orbitAngle);

  // PLANET
  fill(50, 160, 255);
  circle(planetX, planetY, 28);

  fill(255);
  textSize(12);
  text("PLANET", planetX, planetY - 23);

  // UPDATE MOVEMENT
  if (!isPaused) {
    orbitAngle += orbitSpeed;
  }

  // CONTROLS PANEL
  noStroke();
  fill(25, 43, 76);
  rect(100, 445, 500, 125, 15);

  fill(255);
  textSize(17);
  textStyle(BOLD);
  text("KEYBOARD CONTROLS", width / 2, 475);

  textStyle(NORMAL);
  textSize(14);

  text("SPACE = Pause / Resume", width / 2, 500);
  text("UP ARROW = Increase Speed", width / 2, 520);
  text("DOWN ARROW = Decrease Speed", width / 2, 540);

  fill(100, 200, 255);
  text("Current Speed: " + orbitSpeed.toFixed(3),
       width / 2, 560);
}

// KEYBOARD CONTROLS
function keyPressed() {
  if (key === ' ') {
    isPaused = !isPaused;
    return false;
  }

  if (keyCode === UP_ARROW) {
    orbitSpeed += 0.01;
    return false;
  }

  if (keyCode === DOWN_ARROW) {
    orbitSpeed = max(0.001, orbitSpeed - 0.01);
    return false;
  }
}
