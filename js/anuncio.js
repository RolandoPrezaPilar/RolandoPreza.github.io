var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
draw = function() {
    background(255,255,255);
    ellipse(mouseX, mouseY, 10, 10);

    var label = " COMPRAR ";
    text(label, mouseX, mouseY);

    fill(255, 0, 0);
    textSize(31);
    text("Harinas Tio Chay.", 60, 57);
    fill(35, 31, 148);
    textSize(15);
    text("Con aditivo para pan frances!", 183, 132);
    textSize(19);
    text("harina con 12% de proteina",14,102);

    var C= 118;
    var E= 162;

    fill(12, 204, 89);
    rect(C,139,86,139);

    fill(130, 4, 4);
    ellipse(E,197,88,44);


};




  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
