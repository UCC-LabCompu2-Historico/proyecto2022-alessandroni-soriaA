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


const x=40;
const y=40;


function dibujarImg (x,y) {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext ("2d");


    var img = new Image();

    img.src = "imagenes/Avion.png";

    canvas.width= canvas.width;

    img.onload = function () {

        ctx.drawImage(img, x, y);

    }

}

x = 0;
dx = 2;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext ("2d");
canvas.addEventListener("load", animarAvión);

function animarAvión () {

    var ctx = canvas.getContext ("2d");

    canvas.width= canvas.width;


    var img = new Image();

    img.src = "imagenes/Avion.png";

    img.onload = function () {

        ctx.drawImage(img, x, y);

    }

    if (x>canvas.width) {

        x=0;
    }

    x += dx;

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



