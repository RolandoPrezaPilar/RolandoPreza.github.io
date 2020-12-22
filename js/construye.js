var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
background(219, 255, 255);

fill(46, 40, 0);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

fill(74, 43, 0);
for( var x = 150; x <325; x += 13){
 rect(60, x, 280, 36);
 }

fill(0, 0, 0);
rect(180,280,40,77);

fill(20, 19, 19);
for ( var x =70; x < 300; x += 71){
 rect(x, 200, 45, 45);
}

for(var x = -15; x < 310; x += 320){
    image(getImage("../TreeShort.png"), x, 245);
}




  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
