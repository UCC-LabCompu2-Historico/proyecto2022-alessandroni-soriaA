x = 0;
dx = 2;

document.getElementById("iconoBúsqueda").addEventListener("click", mostrar_buscador);
document.getElementById("contenedorBúsqueda").addEventListener("click", ocultar_buscador);

barraBúsqueda = document.getElementById("barraBúsqueda");
contenedorBúsqueda = document.getElementById("contenedorBúsqueda");
inputBúsqueda = document.getElementById("inputBúsqueda");
cajaBúsqueda = document.getElementById("cajaBúsqueda");

/* Hace visible la barra del buscador de la página de inicio
* @method mostrar_buscador()
* @param {string} valor ingresado por el usuario igual a "null"
* @return none
*/

function mostrar_buscador() {

    barraBúsqueda.style.top = "80px";
    contenedorBúsqueda.style.display = "block";
    inputBúsqueda.focus();

    if (inputBúsqueda.value === "") {
        cajaBúsqueda.style.display = "none";
    }

}

/*Función para ocultar el buscador
* @method ocultar_buscador ()
* @return none
*/

function ocultar_buscador() {

    barraBúsqueda.style.top = "-10px";
    contenedorBúsqueda.style.display = "none";
    inputBúsqueda.value = "";
    cajaBúsqueda.style.display = "none";

}

/*
* @method Filtrado de búsqueda
* @param {string} Filter -- recibe inputBúsqueda.value (Valor seleccionado en el input)
* @param {string} li -- recibe cada elemento (país) -- variable de comparación
*/

document.getElementById("inputBúsqueda").addEventListener("keyup", buscador_interno);

function buscador_interno() {
    let filter = inputBúsqueda.value.toUpperCase();
    let li = cajaBúsqueda.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++) {

        let a = li[i].getElementsByTagName("a")[0];
        let textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "";
            cajaBúsqueda.style.display = "block";

            if (inputBúsqueda.value === "") {
                cajaBúsqueda.style.display = "none";
            }

        } else {
            li[i].style.display = "none";
        }
    }
}

/* Función para animar el canvas (movimiento de izquiera a derecha)
* @method animarAvion()
* @param no hay parámetros. Se crean variables globales
*/
function animarAvión() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = "imagenes/avionPrueba.png";

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    img.onload = function () {
        ctx.drawImage(img, x, 100);
    }

    if (x > canvas.width) {
        x = 0;
    }

    x += dx;
}
