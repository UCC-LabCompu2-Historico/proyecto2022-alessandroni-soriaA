

const fila = document.querySelector(".contenedor-carrusel");
const destinos = document.querySelectorAll(".destinos");

const flechaIzq = document.getElementById("flecha-izquierda");
const flechaDer = document.getElementById("flecha-derecha");

 flechaDer.addEventListener("click", () =>  {

     fila.scrollLeft += fila.offsetWidth;

 })

flechaIzq.addEventListener("click", () =>  {

    fila.scrollLeft -= fila.offsetWidth;

})

/*indicadores*/

const numeroPaginas = Math.ceil(destinos.length / 3);
 for (let i=0; i<numeroPaginas; i++) {

     const indicador = document.createElement("button");
     document.querySelector(".indicadores").appendChild(indicador);

         }

