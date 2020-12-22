var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300);

fill(27, 14, 204,20);
ellipse(303,200,76,100);

fill(15, 15, 15,20);
rect(224,120,27,143,90);

stroke(0, 0, 0);
triangle(113,108,114,239,219,173);

fill(255, 0, 0);
rect(114,120,27,106,90);

fill(196, 37, 37);
ellipse(193,173,27,25);
ellipse(157,193,22,21);
ellipse(157,158,22,21);

  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
