var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
var bodyX = 81;
var bodyY = 292;
var bodyW = 270;
var OI = 142;
var OD = 189;
var C = 168;

draw = function() {
    background(207, 254, 255);

    fill(51, 27, 37);
    triangle(bodyX, bodyY, bodyW, 293,170,170); // body?

    ellipse(C,129,115,104); // cabeza
    fill(54, 24, 173);
    ellipse(OI,120,7,10); // ojo izq
    ellipse(OD,120,7,10); // ojo der

    triangle(160,77,129,91,129,62); // oreja izq
    triangle(213,64,176,76,205,87); // oreja der

    ellipse(139,149,24,20); // mejilla izq
    ellipse(186,149,24,20); // mejilla der
    line(145,146,76,135); // bigote izq
    line(145,149,76,146); // bigote izq
    line(145,153,76,157); // bogote izq
    line(247,140,184,145); // bigote der
    line(248,150,184,147); // bigote der
    line(250,159,185,152); // bogote der

    fill(209, 209, 209);
    ellipse(173,244,58,79); // pecho

    ellipse(107,295,50,22); // pata izq
    fill(240, 235, 235);
    ellipse(92,295,13,10);
    ellipse(108,295,13,10);
    ellipse(123,295,13,10);

    ellipse(245,295,50,22); // pata der
    fill(245, 235, 235);
    ellipse(229,295,13,10);
    ellipse(245,295,13,10);
    ellipse(260,295,13,10);





};

  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
