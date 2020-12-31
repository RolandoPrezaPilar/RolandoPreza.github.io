var sketchProc = function(processingInstance) {

  with (processingInstance) {
<html>
    <head>
        <meta charset="utf-8">
        <title>Project: Blog</title>
        <style>
            body {
                font-size: 18px;
            }
            
            h1 {
                color: rgb(32, 163, 224);
                font-size:3em;
                font-family:serif;
            }
            
            h2 {
                font-size:2em;
            }
            
            h6 {
                font-size:0.5em;
            }
            
            #comida_id {
                font-family:fantasy;
                text-align:center;
            }
            
            #hobbit_info {
                font-family:helvetica;
            }
            body{
                background-color:rgb(25, 150, 25);
            }
            
            
        </style>
    </head>
    <body>
        
            <h1>Rolando blog..</h1>

        <h3>Contentenido:</h3>
        <ul>
            <li><a href="#Comida">Me encanta el estofado.</a></li>
            <li><a href="#hobbit">Me encanta jugar videohuegos.</a></li>
        </ul>
        
        <h2 id="comida">Comida Favorita.</h2>
        
        <p id="comida_id">Este delicioso y sencillo Estofado de pollo, me recuerda lo importante que es traer de vuelta esas comidas tan reconfortantes y sencillas que preparaba mi madre. El estofado es un tipo de guiso muy popular en Veracruz.
            
        </p> 
        <h6>Publicado en Octubre del 2020.. </h6>
        
        <h2 id="hobbit">Jugar Videojuegos es lo que mas disfruto...</h2>
        
        <p id="hobbit_info">EL jugar videohjiuegos para mi es aventurarme y disfrutar de uevasa experiencias, las cualews recomiedo ampliamente para que te olvides los malos rstos que puede sllegar a pasar. </p>
        
         <h6>Publicado el 21/10/2020. </h6>
        
        
    </body>
</html>
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
