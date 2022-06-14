const contenedor = document.getElementById("test");
const botonResul = document.getElementById("botonResul");
const resultadoTest = document.getElementById("resultado");


function asignaValores() {

    var motivo = document.getElementById("motivo");
    var placer = document.getElementById("Placer");
    var negocios = document.getElementById("Negocios");

    var personas = document.getElementById("personas");
    var solo = document.getElementById("Solo");
    var familia = document.getElementById("Familia");
    var amigos = document.getElementById("Amigos");

    var precio = document.getElementById("precio");
    var economicos = document.getElementById("Economicos");
    var turisticos = document.getElementById("Turisticos");
  
    var arreglo = [motivo, personas, precio];
  
    for (var i = 0; i < arreglo.length; i++) {
  
      var elemento = arreglo[i];
      var texto = elemento.innerHTML.trim();
  
      elemento.onclick = function(){
        alert(texto);
      };
  
    }
  
  }
  
  asignarEventos();
  
  
//funcion que captura datos desde el formulario
function Destino() {
    var motivo = document.getElementById("motivo").value;
    var url = "";

            console.log(pais);
            url= "Cancun.html";
            window.open(url);

}
