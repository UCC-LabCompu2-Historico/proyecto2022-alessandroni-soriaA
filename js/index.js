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

var x = 0;
var dx = 2;

function animarAvion() {
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext ("2d");
    
    var img = new Image ();
    img.src = "imagenes/avionPrueba.png";

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    img.onload = function(){
        ctx.drawImage(img, x, 10);
    }

if( x > 700 ){
    x = 0;
}
    x += dx;
}