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

/* Función para visualizar el test
* @method mostrarTest()
*/


function mostrarTest() {
    const preguntasYrespuestas = [];

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const respuestas = [];
        const pregunta = []

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

/* Muestra el país seleccionado para el usuario
* @method mostrarResultado()
* @param {string} PreguntaActual (valor elegido) - PreguntaActual.ELEGIDO almacena la opción elegida por el usuario
* @param {number} Respuesta elegida - variable de comparación
*/


function mostrarResultado() {
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = [0, 0, 0];
    let pais = "";

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
            const todasLasRespuestas = respuestas[numeroDePregunta];
            const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
            const respuestaElegida = (
                todasLasRespuestas.querySelector(checkboxRespuestas) || {}
            ).value;

            if (respuestaElegida === preguntaActual.Placer) {
                respuestasCorrectas[0] = 1;
                respuestas[numeroDePregunta].style.color = "blue";
            } else {
                if (respuestaElegida === preguntaActual.Negocios) {
                    respuestasCorrectas[0] = 2;
                    respuestas[numeroDePregunta].style.color = "blue";
                } else {
                    if (respuestaElegida === preguntaActual.Solo) {
                        respuestasCorrectas[1] = 1;
                        respuestas[numeroDePregunta].style.color = "blue";
                    } else {
                        if (respuestaElegida === preguntaActual.Familia) {
                            respuestasCorrectas[1] = 2;
                            respuestas[numeroDePregunta].style.color = "blue";
                        } else {
                            if (respuestaElegida === preguntaActual.Amigos) {
                                respuestasCorrectas[1] = 3;
                                respuestas[numeroDePregunta].style.color = "blue";
                            } else {
                                if (respuestaElegida === preguntaActual.Economica) {
                                    respuestasCorrectas[2] = 1;
                                    respuestas[numeroDePregunta].style.color = "blue";
                                } else {
                                    if (respuestaElegida === preguntaActual.Turistica) {
                                        respuestasCorrectas[2] = 2;
                                        respuestas[numeroDePregunta].style.color = "blue";
                                    } else {
                                        respuestas[numeroDePregunta].style.color = "blue";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    );

    if (respuestasCorrectas[0] === 1) {
        if (respuestasCorrectas[1] === 1) {
            if (respuestasCorrectas[2] === 1) {
                resultadoTest.innerHTML = "La mejor ciudad para usted es " + '<a href="Madrid.html">Madrid</a>';
            } else {
                if (respuestasCorrectas[2] === 2) {
                    resultadoTest.innerHTML = "La mejor ciudad para usted es " + '<a href="Roma.html">Roma</a>';
                }
            }
        } else {
            if (respuestasCorrectas[1] === 2) {
                if (respuestasCorrectas[2] === 1) {
                    resultadoTest.innerHTML = "La mejor ciudad para usted es " + '<a href="Munich.html">Munich</a>';
                } else {
                    if (respuestasCorrectas[2] === 2) {
                        resultadoTest.innerHTML = "La mejor ciudad para usted es " + '<a href="Paris.html">Paris</a>';
                    }
                }
            } else {
                if (respuestasCorrectas[1] === 3) {
                    if (respuestasCorrectas[2] === 1) {
                        resultadoTest.innerHTML = "La mejor ciudad para usted es " + '<a href="Cancun.html">Cancun</a>';
                    } else {
                        if (respuestasCorrectas[2] === 2) {
                            resultadoTest.innerHTML = "La mejor ciudad para usted es " + '<a href="Mykonos.html">Mykonos</a>';
                        }
                    }
                }
            }
        }
    } else {
        if (respuestasCorrectas[0] === 2) {
            if (respuestasCorrectas[1] === 1) {
                if (respuestasCorrectas[2] === 1) {
                    resultadoTest.innerHTML = "La mejor ciudad para usted es " + '<a href="Tokyo.html">Tokyo</a>';
                } else {
                    if (respuestasCorrectas[2] === 2) {
                        resultadoTest.innerHTML = "La mejor ciudad para usted es " + '<a href="NewYork.html">New York</a>';
                    }
                }
            } else {
                if (respuestasCorrectas[1] === 2) {
                    resultadoTest.innerHTML = "La mejor ciudad para usted es " + '<a href="Londres.html">Londres</a>';
                } else {
                    if (respuestasCorrectas[1] === 3) {
                        resultadoTest.innerHTML = "La mejor ciudad para usted es " + '<a href="Dubai.html">Dubai</a>';
                    }
                }
            }
        }
    }
}

botonRes.setAttribute("style", "width: 80%;display: block;margin: auto;padding: 10px;border: none;cursor: pointer;border-radius: 20px;background: #fda9ef;-moz-border-radius: 0px 35px 0px 35px;-webkit-border-radius: 10px 10px 10px 10px;text-shadow: 2px 2px 10px rgb(194, 194, 194);box-shadow: 0px 10px 20px rgba(0,0,0,0.50);font-family: Rockwell;  color: #2c2729;font-size: 130%;text-align: center;cursor: pointer;padding: 0.5em;");

botonRes.addEventListener("click", mostrarResultado);