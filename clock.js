let slider;
var i = 0;

function setup() {
	var canvas = createCanvas(600, 600);
	canvas.parent('clock');

	// Slider
	// slider = createSlider(5, 100);
	// slider.position(width / 2, height);
}

function draw() {
	background(255);

	// Winkel
	let sc = second()
	let mn = minute()
	let hr = hour()

	let angleSecond = map(sc, 0, 60, 0, 2 * PI);
	let angleMinute = map(mn, 0, 60, 0, 2 * PI);
	let angleHour = map(hr, 0, 24, 0, 2 * PI);

	fill(0);
	noStroke();
	translate(width / 2, height / 2);
	
	// Rotation pushen
	push();
	rotate(-PI/2);
	// Sekunden
	noFill();
	strokeWeight(4);
	stroke(255, 100, 0);
	arc(0, 0, 300, 300, 0, angleSecond);

	// Minuten
	strokeWeight(4);
	stroke(150, 100, 0);
	arc(0, 0, 260, 260, 0, angleMinute);

	// Stunden
	strokeWeight(4);
	stroke(150, 180, 20);
	arc(0, 0, 220, 220, 0, angleHour);

	pop();

	// Call FractalTree
	translate(0, 70);

	// max_length = slider.value();

	// console.log(max_length);
	drawBranch(50, sc % 10 + 1);

	text(i, 0, 0);

	// if (mouseIsPressed) {
	// 	i += 1;
	// 	console.log(i);
	// }
}


function drawBranch(len, max_length) {
	var angle = PI/4;

	// 1. Ast malen
	stroke(50, 120, 255);
	strokeWeight(2);
	line(0, 0, 0, -len);

	// 2. Translation
	translate(0, -len);

	// 3. 
	if (len > max_length) {
		push();
		rotate(angle);
		drawBranch(len * 0.67, max_length);
		pop();
		push();
		rotate(-angle);
		drawBranch(len * 0.67, max_length);
		pop();
	}

}


function mousePressed() {
	i += 1;
	console.log(i);

}