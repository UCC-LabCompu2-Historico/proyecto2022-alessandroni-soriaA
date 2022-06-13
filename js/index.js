var x=40;
var y=40;

function dibujarImagen (x, y) {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(x, y);

    var img = new Image();
    img.src = "imagenes/avion1.png";

    canvas.width = canvas.width;

    img.onload = function () {

        ctx.drawImage(img, x, y);

    }

}

var x=0;
var dx=2; //como se va a ir moviendo

function animarAvion () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "imagenes/avion1.png";

    img.onload = function () {
        ctx.drawImage(img, x, 100);
    }

    if (x>canvas.width) {
        x=0;
    }

    x = x + dx;
}

function Destino() {
    var pais = document.getElementById("Destino").value;

    var url;

    console.log(pais);
    url = "Cancun.html";
    window.open(url);
}