const miForm = document.getElementById("test");
const botonResul = document.getElementById("botonResul");
const resultadoTest = document.getElementById("resultado");

var motivo = document.getElementById("motivo").value;
var placer = document.getElementById("Placer").value;
var negocios = document.getElementById("Negocios").value;

var personas = document.getElementById("personas").value;
var solo = document.getElementById("Solo").value;
var familia = document.getElementById("Familia").value;
var amigos = document.getElementById("Amigos").value;

var precio = document.getElementById("precio").value;
var economicos = document.getElementById("Economicos").value;
var turisticos = document.getElementById("Turisticos").value;

var arreglo = [motivo, personas, precio];

function asignaValores() {
    var total = 3;
  
    for (var i = 1; i < total; i++) {
        
        if (motivo === null || motivo === ""){
            alert("Por favor responda la pregunta 1");
            return false;
        } else {
            if(motivo === 1){
                arreglo[motivo] = 1;
            } else {
                arreglo[motivo] = 2;
            }
        }

        if (personas === null || personas === ""){
            alert("Por favor responda la pregunta 2");
            return false;
        } else {
            if(personas === 3){
                arreglo[personas] = 3;
            } else {
                if(personas === 4){
                    arreglo[personas] = 4;
                } else {
                    arreglo[personas] = 5;
                }
            }
        }

        if (precio === null || precio === ""){
            alert("Por favor responda la pregunta 3");
            return false;
        } else {
            if(precio === 6){
                arreglo[precio] = 6;
            } else {
                arreglo[precio] = 7;
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
