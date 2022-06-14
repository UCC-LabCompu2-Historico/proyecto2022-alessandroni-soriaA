const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. Cuál es el motivo de su viaje?",
    respuestas: {
      a: "Viajo por placer",
      b: "Viajo por negocios",
    },
    Placer: "a",
    Negocios: "b",
  },
  {
    pregunta: "2. Con quien viaja?",
    respuestas: {
      a: "Viajo solo",
      b: "Viajo con mi familia",
      c: "Viajo con mis amigos",
    },
    Solo: "a",
    Familia: "b",
    Amigos: "c",
  },
  {
    pregunta: "3. Que tipo de ciudad prefiere?",
    respuestas: {
      a: "Una ciudad económica",
      b: "Una ciudad turística",
    },
    Economica: "a",
    Turistica: "b",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = [0, 0, 0];
  
    preguntas.forEach((preguntaActual, numeroDePregunta) => {
      const todasLasRespuestas = respuestas[numeroDePregunta];
      const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
      const respuestaElegida = (
        todasLasRespuestas.querySelector(checkboxRespuestas) || {}
      ).value;
  
      if (respuestaElegida === preguntaActual.Placer) {
        respuestasCorrectas[0]= 1 ;
        respuestas[numeroDePregunta].style.color = "blue";
      } else {
          if (respuestaElegida === preguntaActual.Negocios){
           respuestasCorrectas[0]= 2 ;
           respuestas[numeroDePregunta].style.color = "green";
          } else {
            if (respuestaElegida === preguntaActual.Solo) {
              respuestasCorrectas[1]= 1 ;
              respuestas[numeroDePregunta].style.color = "blue";
            } else {
              if (respuestaElegida === preguntaActual.Familia){
                 respuestasCorrectas[1]= 2 ;
                 respuestas[numeroDePregunta].style.color = "green";
                } else{
                  if (respuestaElegida === preguntaActual.Amigos){
                    respuestasCorrectas[1]= 3 ;
                    respuestas[numeroDePregunta].style.color = "purple";
                  } else {
                    if (respuestaElegida === preguntaActual.Economica) {
                      respuestasCorrectas[2]= 1 ;
                      respuestas[numeroDePregunta].style.color = "blue";
                    } else {
                      if (respuestaElegida === preguntaActual.Turistica){
                         respuestasCorrectas[2]= 2 ;
                         respuestas[numeroDePregunta].style.color = "green";
                      } else {
                        respuestas[numeroDePregunta].style.color = "red";
                      }
                    }
                  }
                }
              }
            }
          }
      }
    );
  
    if (respuestasCorrectas[0] === 1){
      if (respuestasCorrectas[1] === 1){
        if (respuestasCorrectas[2] === 1){
          resultadoTest.innerHTML = "La mejor ciudad para usted es Madrid.";
        } else {
          if (respuestasCorrectas[2] === 2){
            resultadoTest.innerHTML = "La mejor ciudad para usted es Roma.";
          }
        }
      } else {
        if (respuestasCorrectas[1] === 2){
          if (respuestasCorrectas[2] === 1){
            resultadoTest.innerHTML = "La mejor ciudad para usted es Munich.";
          } else {
            if (respuestasCorrectas[2] === 2){
              resultadoTest.innerHTML = "La mejor ciudad para usted es Paris.";
            }
          }
        } else {
          if (respuestasCorrectas[1] === 3){
            if (respuestasCorrectas[2] === 1){
              resultadoTest.innerHTML = "La mejor ciudad para usted es Cancun.";
            } else {
              if (respuestasCorrectas[2] === 2){
                resultadoTest.innerHTML = "La mejor ciudad para usted es Mykonos.";
              }
            }
          }
        }
      }
    } else {
      if (respuestasCorrectas[0] === 2){
        if (respuestasCorrectas[1] === 1){
          if (respuestasCorrectas[2] === 1){
            resultadoTest.innerHTML = "La mejor ciudad para usted es Tokyo.";
          } else {
            if (respuestasCorrectas[2] === 2){
              resultadoTest.innerHTML = "La mejor ciudad para usted es New York.";
            }
          }
        } else {
          if (respuestasCorrectas[1] === 2){
                resultadoTest.innerHTML = "La mejor ciudad para usted es Londres.";
          } else {
            if (respuestasCorrectas[1] === 3){
                resultadoTest.innerHTML = "La mejor ciudad para usted es Dubai.";
            }
          }
        }
      }
    }
  }
  
  botonRes.addEventListener("click", mostrarResultado);