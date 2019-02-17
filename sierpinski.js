function setup() {
	var canvas = createCanvas(600, 600);
	canvas.parent('sierpinski');

	ax = 0;
	ay = 0;

	bx = 0;
	by = height;

	cx = width;
	cy = 0;
	// Eckpunkte
	background(0);

	// Zufallszahl-Start
	x = random(width);
	y = random(height);
}

function draw() {
	// x20 pro Frame
	for (let i = 0; i <= 50; i++) {
		// 0, 1, 2 zufällig
		num = floor(random(3));

		// Neue x,y Koordinaten
		if (num == 0) { 
			stroke(0, 100, 255);
			x = (x + ax) / 2;
			y = (y + ay) / 2;
		} else if (num == 1) {
			stroke(100, 255, 0);
			x = (x + bx) / 2;
			y = (y + by) / 2;
		} else if (num == 2) {
			stroke(255, 0, 100);
			x = (x + cx) / 2;
			y = (y + cy) / 2;
		} 

		// Punkt zeichnen
		strokeWeight(1);
		point(x, y);
	}

}