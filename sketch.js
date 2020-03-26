//let array = [];
//let backgroundColor = 200;
//let noiseOffset = 0.0;
//let strokeWidth = 5;
let c1,c2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  // Define colors

  c1= color(' #99cccc');
  c2= color('#C2D3FD');
  setGradient(c1, c2);

}


function draw() {

  //strokeWeight(strokeWidth);

   // noiseOffset += 0.05;
   // ellipse = noise (noiseOffset) * 50;


  stroke('#FFEA13');

  ellipse(mouseX, mouseY, 30, 30);

  let speed = abs(winMouseX - pwinMouseX);
  //change the size of the circle
  //according to the horizontal speed
  stroke('#FFB8EE');
  ellipse(50, 50,20 + speed * 20, 20 + speed * 20);
  ellipse(50,windowHeight, 20 + speed * 20, 20 + speed * 20);
  ellipse(windowWidth,50, 20 + speed * 20, 20 + speed * 20);
  ellipse(windowWidth,windowHeight, 20 + speed * 20, 20 + speed * 20);


  //stroke(map(mouseX, 0, 600, 0, 255, true))
  // line (width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  // line(mouseX, mouseY, pmouseX, pmouseY);
  //* means they are the one.
  //* if (mouseIsPressed){
    // minus equal is going to decrease backgroundColor by 2 each frame
    //*backgroundColor -= 5;
    // stroke(map(mouseX, 0, 600, 255, true));
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    //*background(backgroundColor);
    //line(mouseX, mouseY, pmouseX, pmouseY);

    //*array.push([mouseX, mouseY]);

    //*beginShape();
  //*  for(let i = 0; i < array.length - 1; i++){
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    //*  curveVertex(array[i][0], array[i][1]);
    //* }
  //*  endShape();

    // line(array[1][0], array[1][1], array[2][0], array[2][1]);

  //*}
}
function setGradient(c1, c2) {
// noprotect
noFill();

for (var y = 0; y < height; y++) {
  let inter = map(y, 0, height, 0, 1);
  let c = lerpColor(c1, c2, inter);
  stroke(c);
  line(0, y, width, y);
}
}


function keyTyped(){
  if(key === 's'){
    saveCanvas('fileName', 'PNG');
  }
  else if (key === 'c') {
    //clear the image
    clear();

  //else if(key === 'd'){
    // background(255);

    // beginShape();
    // for(let i = 0; i < array.length - 1; i++){
    //   // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    //   curveVertex(array[i][0], array[i][1]);
    // }
    // endShape();
    //
    // // line(array[1][0], array[1][1], array[2][0], array[2][1]);
    //


}
  return false;
}

// function mousePressed () {
//
//   array = [];
//
//   backgroundColor = 255;
// }
