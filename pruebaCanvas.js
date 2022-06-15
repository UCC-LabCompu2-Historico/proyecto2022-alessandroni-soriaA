x = 0;
dx = 2;

function animarAuto() {
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext ("2d");
    
    var img = new Image ();
    img.src = "imagenes/avionPrueba.png";

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    img.onload = function(){
        ctx.drawImage(img, x, 100);
    }

if( x > 700 ){
    x = 0;
}

    x += dx;
}
