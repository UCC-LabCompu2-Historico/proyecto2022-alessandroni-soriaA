<<<<<<< HEAD
function hacerPanorama () {

    var canvas = document.getElementById("myCanvas1");
    var ctx = myCanvas2.getContext('2d');

    canvas.width = canvas.width;

    var image = new Image();

    image.src = "Imagenes/panoramica.png";

    var CanvassizeX = 800;
    var CanvassizeY = 300;

    var velocidad = 40;
    var scale = 1.05;
    var y = -4.5;

    var dx = 0.75;
    var imgW;
    var imgH;

    var x = 0;
    var clearX;
    var clearY;

    image.onload = function () {

        imgW = image.width * scale;
        imgH = image.height * scale;

        if (imgW > CanvassizeX) {

            x = CanvassizeX - imgW;

        }

        if (imgW > CanvassizeX) {

            clearX = imgW;

        } else {

            clearX = CanvassizeX;
        }

        if (imgH > CanvassizeY) {

            clearY = imgH;


        } else {

            clearY = CanvassizeY;

        }


    }


    ctx.clearRect(0, 0, clearX, clearY );

    if (imgW <= CanvassizeX) {

        if ( x > CanvassizeX) {

            x = -imgW + x;

        }

        if (x > 0) {

            ctx.drawImage(image, -imgW+x, y, imgW, imgH);

        }

        if (x - imgW > 0) {

            ctx.drawImage (img, -imgW*2 + x, y, imgW, imgH);

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


x=40;
y=40;
=======
var x=40;
var y=40;
>>>>>>> 373a836e0596f3790e7e36e9d2a76e8fa615f198

function dibujarImagen (x, y) {

    var canvas = document.getElementById("myCanvas2");
    var ctx = canvas.getContext("2d");

    console.log(x, y);

    var img = new Image();
    img.src = "imagenes/avion1.png";

    canvas.width = canvas.width;

    img.onload = function () {

        ctx.drawImage(img, x, y);

    }

}

x=0;
dx=2; //como se va a ir moviendo

function animarAvion () {

    var canvas = document.getElementById("myCanvas2");
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

function verificarRtas () {

    var total = 3;

    var myForm = document.forms ["test"];

    var Nueva;

    var respuestasM = ["Por placer", "Por negocios"];
    var respuestasP = ["Si, viajo solo", "No, viajo con mi familia o con mi pareja", "No, viajo con mis amigos"];
    var respuestasPr = ["Destinos económicos ", "Prefiero destinos turísticos"];


    for (var i = 1; i < total; i++) {

        if (myForm["motivo"].value === null || myForm["motivo"].value === " ") {

            alert("Porfavor rellene los campos faltantes ");
            return false;

        } else {

            if (myForm["motivo"].value === respuestasM[0] && myForm["personas"].value === respuestasP[0] && myForm["precio"].value === respuestasPr[0]) {

                Nueva = ""

            } else {

                if (myForm["motivo"].value === respuestasM[1] && myForm["personas"].value === respuestasP[0] && myForm["precio"].value === respuestasPr[0]) {


                }


            }


        }

    }

    }

    //funcion que captura datos desde el formulario


    function Destino() {

        var pais = document.getElementById("Destino").value;

        var url;

                console.log(pais);
                url= "Cancun.html";
                window.open(url);

    }

