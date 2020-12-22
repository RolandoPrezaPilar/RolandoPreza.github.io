var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
background(89, 216, 255);
var dessinpoisson = function (centerX, centerY, bodyLength, bodyHeight, tailWidth, taiHeight){

var bodyColor = color (random (255), random(255), random(255));

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

    dessinpoisson (100 , 100 , 50 , 80 , 30 , 40 );
    dessinpoisson (200 , 250 , 80 , 100 , 60 , 60 );
    dessinpoisson (300 , 70 , 120 , 80 , 30 , 40 );
    dessinpoisson (329 , 300 , 100 , 180 , 10 , 40 );

mouseClicked = function () {
    dessinpoisson (mouseX, mouseY, mouseY, 30, 30);
};




  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
