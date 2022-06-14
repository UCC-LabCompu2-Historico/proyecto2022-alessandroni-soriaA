const miForm = document.getElementById("test");
const botonResul = document.getElementById("botonResul");
const resultadoTest = document.getElementById("resultado");

var arreglo = [motivo, personas, precio];

var motivo = document.getElementById("motivo");
document.getElementById("Placer").addEventListener("click", motivoPlacer);
document.getElementById("Negocios").addEventListener("click", motivoNegocios);

function motivoPlacer() {
    motivo = 1
}

function motivoNegocios() {
    motivo = 2
}


var personas = document.getElementById("personas");
var solo = document.getElementById("Solo");
var familia = document.getElementById("Familia");
var amigos = document.getElementById("Amigos");

var precio = document.getElementById("precio");
var economicos = document.getElementById("Economicos");
var turisticos = document.getElementById("Turisticos");

console.log(arreglo);


function asignaValores() {
    var total = 3;
  
    for (var i = 1; i < total; i++) {
        
        if (motivo === null || motivo === ""){
            alert("Por favor responda la pregunta 1");
            return false;
        } else {
            if(motivo === 1){
                arreglo[0] = 1;
            } else {
                arreglo[0] = 2;
            }
        }

        if (personas === null || personas === ""){
            alert("Por favor responda la pregunta 2");
            return false;
        } else {
            if(personas === 3){
                arreglo[1] = 3;
            } else {
                if(personas === 4){
                    arreglo[1] = 4;
                } else {
                    arreglo[1] = 5;
                }
            }
        }

        if (precio === null || precio === ""){
            alert("Por favor responda la pregunta 3");
            return false;
        } else {
            if(precio === 6){
                arreglo[2] = 6;
            } else {
                arreglo[2] = 7;
            }
        }
    }

    for (var i = 0 ; i < 2 ; i++ ) {
        console.log(arreglo[i]);
      }

  }

  asignaValores();


  
//funcion que captura datos desde el formulario
function Destino() {
    var motivo = document.getElementById("motivo").value;
    var url = "";

            console.log(pais);
            url= "Cancun.html";
            window.open(url);

}
