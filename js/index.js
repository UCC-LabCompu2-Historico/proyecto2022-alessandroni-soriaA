document.getElementById("iconoBusqueda").addEventListener("click", mostrar_buscador);
document.getElementById("contenedorBusqueda").addEventListener("click", ocultar_buscador);

barraBusqueda =  document.getElementById("barraBusqueda");
contenedorBusqueda =  document.getElementById("contenedorBusqueda");
inputBusqueda =       document.getElementById("inputBusqueda");
cajaBusqueda =        document.getElementById("cajaBusqueda");

function mostrar_buscador(){

    barraBusqueda.style.top = "80px";
    contenedorBusqueda.style.display = "block";
    inputBusqueda.focus();

    if (inputBusqueda.value === ""){
        cajaBusqueda.style.display = "none";
    }

}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    barraBusqueda.style.top = "-10px";
    contenedorBusqueda.style.display = "none";
    inputBusqueda.value = "";
    cajaBusqueda.style.display = "none";

}


//Filtrado de busqueda

document.getElementById("inputBusqueda").addEventListener("keyup", buscador_interno);

function buscador_interno(){
    filter = inputBusqueda.value.toUpperCase();
    li = cajaBusqueda.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            cajaBusqueda.style.display = "block";

            if (inputBusqueda.value === ""){
                cajaBusqueda.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }
    }
}

function hacerPanorama () {

    var canvas = document.getElementById("myCanvas1");
    var ctx = myCanvas2.getContext('2d');

    canvas.width = canvas.width;

    var image = new Image();

    image.src = "imagenes/panoramica.png";

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


var x=40;
var y=40;

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

var x=0;
var dx=2; //como se va a ir moviendo

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



