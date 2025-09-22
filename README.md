# Juego de Preguntas y Respuestas

Este proyecto es un **juego interactivo de preguntas y respuestas** desarrollado en JavaScript, HTML y CSS. Permite a los usuarios seleccionar un tema y responder una serie de preguntas, mostrando el puntaje final al terminar.

## ¿Cómo funciona el juego?

1. **Selección de tema:**  
   Al iniciar, el usuario debe elegir entre los temas disponibles (por ejemplo, "capitales" o "cultura general").

2. **Preguntas:**  
   Se muestra una pregunta con varias opciones de respuesta. El usuario debe hacer clic en la opción que considere correcta.

3. **Retroalimentación inmediata:**  
   Al seleccionar una respuesta:

   - Si es correcta, la opción se marca en verde con un ✅.
   - Si es incorrecta, se marca en rojo con un ❌ y se resalta la respuesta correcta.
   - Las opciones se desactivan hasta pasar a la siguiente pregunta.

4. **Resultado final:**  
   Al terminar todas las preguntas, se muestra el puntaje obtenido y un botón para reiniciar el juego.

## Estructura del proyecto

```
index.html
assets/
  fonts/
    DepartureMono-Regular.otf
    DepartureMono-Regular.woff
    DepartureMono-Regular.woff2
css/
  style.css
js/
  main.js
  preguntas-y-respuestas.js
```

### Archivos principales

- **[index.html](index.html):**  
  Estructura básica de la página, con los contenedores para preguntas, opciones y resultados.

- **[css/style.css](css/style.css):**  
  Estilos personalizados, uso de variables CSS, animaciones y fuentes personalizadas.

- **[js/main.js](js/main.js):**  
  Lógica principal del juego: selección de tema, manejo de preguntas, validación de respuestas y control del puntaje.

- **[js/preguntas-y-respuestas.js](js/preguntas-y-respuestas.js):**  
  Base de datos de preguntas y respuestas organizadas por tema.

- **[assets/fonts/](assets/fonts/):**  
  Carpeta de fuentes personalizadas utilizadas en el diseño.

## Recursos utilizados

- **HTML5 y CSS3:**  
  Para la estructura y el diseño visual del juego.

- **JavaScript (ES6):**  
  Para la lógica interactiva y el manejo dinámico del DOM.

- **Fuentes personalizadas:**  
  Se incluye la fuente "Departure Mono" en varios formatos para compatibilidad.

- **Animaciones CSS:**  
  Para resaltar respuestas correctas e incorrectas.

## Personalización

Puedes agregar más temas o preguntas editando el archivo [`js/preguntas-y-respuestas.js`](js/preguntas-y-respuestas.js).  
También puedes modificar los estilos en [`css/style.css`](css/style.css) para adaptar el diseño a tus preferencias.

## Ejecución

Solo necesitas abrir el archivo [`index.html`](index.html) en tu navegador para jugar.

---

**Autor:** VICTORIA RICARDO

¡Disfruta aprendiendo y jugando!
