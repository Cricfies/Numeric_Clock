function setup() {
  createCanvas(400, 100);
}

function draw() {
  background(240);
  
  // Calculate the current time
  var h = hour();
  var m = minute();
  var s = second();
  
  // Format the time as a string
  var timeString = h + ":" + m + ":" + s;
  
  // Draw the time string
  textSize(64);
  textAlign(CENTER, CENTER);
  text(timeString, width/2, height/2);
}
