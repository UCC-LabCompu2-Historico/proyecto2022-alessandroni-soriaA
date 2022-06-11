var imagen = new Image();
var direccion;
var velocidad;

imagen.src= imagenes/Panoramica.png;

var CanvassizeX = 800;
var CanvassizeY = 300;
var velocidad = 40;
var scale = 1.05;
var y = -4.5;

var dx = 0.75;
var imgW;
var imgH;

var x= 0;
var clearX;
var clearY;

var ctx;

imagen.onload = function () {

    imgW = imagen.width * scale;
    imgH = imagen.height * scale;

    if (imgW > CanvassizeX) {
        x = CanvassizeX - imgW;
    }

    if (imgW > CanvassizeX) {
        clearX = imgW;
    } else {
        clearX = CanvassizeX;
    }

    if ( imgH > CanvassizeY) {
        clearY = imgH;
    } else {
        clearY = CanvassizeY;
    }
    ctx = document.getElementById('myCanvas').getContext('2d');
    return setInterval(draw, velocidad);
}

function draw () {
    ctx.clearRect(0, 0, clearX, clearY );
    if (imgW <= CanvassizeX) {
        if ( x > CanvassizeX) {
            x = -imgW + x;
        }

        if (x > 0) {
            ctx.drawImage(Imagen, -imgW+x, y, imgW, imgH);
        }

        if (x - imgW > 0) {
            ctx.drawImage (Imagen, -imgW*2 + x, y, imgW, imgH);
        }
    }

    else {
        // reiniciar, comenzar desde el principio
        if (x > (CanvassizeX)) {
            x = CanvassizeX - imgW;
        }
        // dibujar image adicional
        if (x > (CanvassizeX-imgW)) {
            ctx.drawImage(Imagen, x - imgW + 1, y, imgW, imgH);
        }
    }
    // dibujar imagen
    ctx.drawImage(Imagen, x, y,imgW, imgH);
    // cantidad para moverse
    x += dx;
}