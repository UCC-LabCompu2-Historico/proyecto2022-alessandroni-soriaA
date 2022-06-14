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
    respuestaCorrecta: "a",
  },
  {
    pregunta: "2. Con quien viaja?",
    respuestas: {
      a: "Viajo solo",
      b: "Viajo con mi familia",
      c: "Viajo con mis amigos",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "3. Cuál es la capital de Noruega?",
    respuestas: {
      a: "Roma",
      b: "Copenague",
      c: "Estocolmo",
      d: "Oslo",
    },
    respuestaCorrecta: "a",
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
    let respuestasCorrectas = 0;
  
    preguntas.forEach((preguntaActual, numeroDePregunta) => {
      const todasLasRespuestas = respuestas[numeroDePregunta];
      const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
      const respuestaElegida = (
        todasLasRespuestas.querySelector(checkboxRespuestas) || {}
      ).value;
  
      if (respuestaElegida === preguntaActual.respuestaCorrecta) {
        respuestasCorrectas++;
  
        respuestas[numeroDePregunta].style.color = "blue";
      } else {
        respuestas[numeroDePregunta].style.color = "red";
      }
    });
  
    resultadoTest.innerHTML =
      "Usted ha acertado " +
      respuestasCorrectas +
      " preguntas de un total de " +
      preguntas.length;
  }
  
  botonRes.addEventListener("click", mostrarResultado);