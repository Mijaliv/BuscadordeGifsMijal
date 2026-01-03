# Explorador / Buscador de Gifs

Este es un proyecto simple de un buscador de GIFs que utiliza la API de Tenor para encontrar y mostrar GIFs animados basados en las palabras clave que introduce el usuario.

## Desafíos del Proyecto

Uno de los principales desafíos fue entender el funcionamiento de la API de Tenor para poder realizar las peticiones correctamente. Esto implicó:

1.  **Autenticación:** Fue necesario obtener una `ApiKey` y una `client_key` para poder realizar las peticiones a la API.
2.  **Construcción de la URL de Petición:** Se tuvo que construir una URL dinámica que incluyera el término de búsqueda introducido por el usuario, junto con los parámetros de autenticación y otros como el límite de resultados.
3.  **Procesamiento de la Respuesta:** La respuesta de la API viene en formato JSON. Fue un reto interesante procesar esta respuesta para extraer la URL de cada GIF (`element.media_formats.gif.url`) y mostrarlo en la página.

Otro desafío importante fue el diseño de la interfaz de usuario, con los siguientes objetivos:

*   **Legibilidad:** Organizar los GIFs en una cuadrícula (`grid`) para que fueran fáciles de visualizar.
*   **Interactividad:** Añadir una función de "Vista previa" que solo aparece al hacer clic sobre un GIF, permitiendo al usuario verlo en una nueva pestaña sin recargar la página.
*   **Diseño Responsivo:** Asegurar que la aplicación se viera bien en diferentes dispositivos, desde ordenadores de escritorio hasta smartphones. Esto se logró utilizando media queries en CSS para ajustar el tamaño de la cuadrícula, las imágenes, las fuentes y los campos de búsqueda según el ancho de la pantalla.

## Tecnologías Utilizadas

*   HTML5
*   CSS3 (con Flexbox, Grid y Media Queries)
*   JavaScript (para la lógica de la aplicación y la interacción con la API)
*   [Tenor API](https://tenor.com/gifapi/documentation)
