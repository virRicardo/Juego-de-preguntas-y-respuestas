//importacion de preguntas y respuestas
import { preguntasYrespuestas } from "./preguntas-y-respuestas.js";

//variables
let preguntasSeleccionadas = [];
let puntaje = 0;

//seleccion de elementos del DOM
const contenedorPregunta = document.querySelector("#contenedor-pregunta");
const contenedorOpciones = document.querySelector("#contenedor-opciones");
const contenedorResultado = document.querySelector("#contenedor-resultado");
contenedorResultado.innerHTML = `<h2 class="total"></h2>`;

// Punto de entrada del programa
mostrarTema();

function mostrarTema() {
  contenedorResultado.innerHTML = ``;
  contenedorPregunta.innerHTML = `
    <h2 class="pregunta">Selecciona el tema:</h2>`;
  contenedorOpciones.innerHTML = ``; //para limpiar antes de agregar opciones
  Object.keys(preguntasYrespuestas).forEach((opcion) => {
    contenedorOpciones.innerHTML += `<p class="opcion">${opcion}</p>`;
  });

  const opciones = document.querySelectorAll(`.opcion`);

  opciones.forEach((opcion) => {
    opcion.addEventListener(`click`, () => {
      const tema = opcion.textContent.trim();
      seleccionTema(tema);
    });
  });
}

//funcion para mostrar la primera pregunta dependiendo del tema seleccionado

function seleccionTema(tema) {
  preguntasSeleccionadas = preguntasYrespuestas[tema] || [];
  mostrarPregunta(0);
}

function mostrarPregunta(indice) {
  //se agrego el if
  if (!preguntasSeleccionadas || preguntasSeleccionadas.length === 0) {
    return;
  }
  //fin del if agregado
  if (indice >= preguntasSeleccionadas.length) {
    mostarResultado();
    return;
  }

  const { pregunta, respuestaCorrecta, respuestas } =
    preguntasSeleccionadas[indice];
  contenedorPregunta.innerHTML = `<h2 class="pregunta">${pregunta}</h2>`;
  mostrarOpciones(respuestas, respuestaCorrecta, indice);
}

function mostrarOpciones(respuestas, respuestaCorrecta, indice) {
  contenedorOpciones.innerHTML = ``;
  respuestas.forEach((respuesta) => {
    contenedorOpciones.innerHTML += `<p class="opcion">${respuesta}</p>`;
  });

  const opciones = contenedorOpciones.querySelectorAll(`.opcion`);
  opciones.forEach((opcion) => {
    opcion.addEventListener("click", () => {
      //desactivar todos los click en cuanto se hace uno
      opciones.forEach((op) => (op.style.pointerEvents = "none"));
      //comparar lo q el usuario hizo click con la respuesta correcta
      if (opcion.textContent === respuestaCorrecta) {
        puntaje++;
        opcion.classList.add("correcta");
      } else {
        opcion.classList.add("incorrecta");

        //marcar la correcta en verde
        opciones.forEach((op) => {
          if (op.textContent === respuestaCorrecta) {
            op.classList.add("correcta");
          }
        });
      }

      setTimeout(() => {
        mostrarPregunta(indice + 1);
      }, 1500);
    });
  });
}

function mostarResultado() {
  contenedorPregunta.innerHTML = ``;
  contenedorOpciones.innerHTML = ``;
  contenedorResultado.innerHTML = `<h2 class="total">Acertaste ${puntaje} de ${preguntasSeleccionadas.length} preguntas</h2>
  <div class="contenedor-boton">
    <button id="reiniciarBtn">Reiniciar</button>
  </div>`;

  const buttonReiniciar = contenedorResultado.querySelector("#reiniciarBtn");
  buttonReiniciar.addEventListener("click", () => {
    puntaje = 0;
    mostrarTema();
  });
}
