var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
var xPositions = [200];
var yPositions = [0];
var x = 0;
var colores = [color(79,240,219),fill(255,0,225),fill(255,132),0];

for( var lluvia = 0; lluvia < random( 20 ); lluvia++) {
    xPositions.push (random (width));
    yPositions.push (random (height));
}

draw = function() {
    background(10, 10, 51);
    fill(random(colores[x]));
    for (var i = 0; i < xPositions.length; i++)
    {
        noStroke();
        fill(random(colores[x]));

        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;

        if (yPositions [i] > height)
        {
            yPositions [i] = 1;
        }
    }

    mouseClicked = function()
    {
        xPositions.push (mouseX);
        yPositions.push (mouseY);
    };
};




  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
