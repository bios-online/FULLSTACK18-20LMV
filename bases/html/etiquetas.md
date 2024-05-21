# Etiquetas HTML

Las páginas web están formadas por una serie de etiquetas HTML, que dictan cómo se organiza y presenta el contenido en un navegador web.

## Estructura

La estructura básica de una etiqueta HTML incluye varios componentes clave:

1. **La etiqueta de apertura:** Incluye el nombre de la etiqueta encerrado en signos de menor y mayor (`<>`). Este nombre indica el tipo de contenido que la etiqueta representará o cómo debería comportarse en la página web.

2. **Contenido:** Es el contenido dentro de la etiqueta, que puede ser **texto**, **otro HTML**

3. **La etiqueta de cierre:** Incluye el nombre de la etiqueta precedido por una barra inclinada (`</ nombre>`) dentro de signos de menor y mayor. Esto indica el final del elemento.

por ejemplo:

```html
<p>Hola Mundo</p>
```

- **Etiqueta de apertura:** `<p>`
- **Contenido: Hola Mundo**
- **Etiqueta de cierre:** `</p>`

Existen etiquetas con contenido vacío, es decir, no necesitan una etiqueta de cierre, solo constan de la etiqueta de apertura finalizando con una barra inclinada antes del signo de menor que (`<nombre />`)

por ejemplo:

```html
<img />
```

## Atributos

Se utilizan para proporcionar información adicional sobre cómo debe comportarse o mostrarse la etiqueta en una página web.

Los atributos generalmente se colocan dentro de la etiqueta de apertura seguidos del nombre de la etiqueta y separados por un espacio siguiendo la siguiente estructura:

1. **Nombre de Atributo:** Cada atributo tiene un nombre único que define su propósito. Algunos ejemplos comunes incluyen `id`, `class`, `src`, `href`, `alt`, `style`, `title`, entre otros.

2. **Valor de Atributo:** El valor de un atributo especifica información adicional sobre el elemento y puede ser una cadena de texto, un número, una URL, un color, etc. Dependiendo del atributo, el valor puede ser obligatorio o opcional.

Por ejemplo:

```html
<p id="parrafoPrincipal">Este es mi párrafo principal.</p>
```

```html
<img src="imagen.jpg" />
```

## Etiquetas básicas

Algunas etiquetas básicas de html son:

| Etiqueta HTML                      | Descripción                                             |
| ---------------------------------- | ------------------------------------------------------- |
| `<html>`                           | Define el inicio y el final de un documento HTML        |
| `<head>`                           | Contiene información meta sobre el documento            |
| `<title>`                          | Define el título del documento                          |
| `<body>`                           | Contiene el contenido visible de la página              |
| `<h1>`, `<h2>`, `<h3>`, ... `<h6>` | Encabezados de nivel 1, 2, 3, hasta el 6.               |
| `<p>`                              | Define un párrafo                                       |
| `<a>`                              | Define un enlace (hipervínculo)                         |
| `<img>`                            | Inserta una imagen                                      |
| `<ul>`, `<ol>`                     | Define listas no ordenadas y ordenadas, respectivamente |
| `<li>`                             | Define un elemento de lista                             |
| `<div>`                            | Define una división o contenedor genérico               |
| `<form>`                           | Define un formulario                                    |
| `<input>`                          | Define un campo de entrada                              |
| `<button>`                         | Define un botón                                         |

## Etiquetas semánticas

Estas etiquetan describen el propósito y el contenido de una sección de una página ayudando a los motores de búsqueda y a otros dispositivos a entender mejor la estructura y el contenido del sitio:

| Etiqueta    | Descripción                                       |
| ----------- | ------------------------------------------------- |
| `<header>`  | Define la cabecera de un documento o sección      |
| `<nav>`     | Define un conjunto de enlaces de navegación       |
| `<section>` | Define una sección de un documento                |
| `<article>` | Define contenido independiente y autónomo         |
| `<aside>`   | Define contenido relacionado o tangencial         |
| `<footer>`  | Define el pie de página de un documento o sección |
| `<main>`    | Define el contenido principal del documento       |

para conocer todas las etiquetas que existen y su funcionamiento lo podemos encontrar en esta pagina web: [htmlreference.io](https://htmlreference.io)

### Etiquetas `<script>` y `<style>` en HTML

Las etiquetas `<script>` y `<style>` en HTML se utilizan para incluir JavaScript y CSS, respectivamente, directamente dentro de un documento HTML:

#### `<script>`

La etiqueta `script` se usa para insertar código JavaScript, que puede manipular elementos HTML, validar datos, interactuar con el servidor etc.

por ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ejemplo de Script</title>
  </head>
  <body>
    <h1 id="titulo">Hola, Mundo!</h1>
    <button onclick="imprimir()">Haz clic aquí</button>

    <script>
      function imprimir() {
        console.log("Hola mundo")
      }
    </script>
  </body>
</html>
```

#### `<style>`

La etiqueta `style` se usa para definir estilos CSS internos que se aplican a los elementos HTML.

Por ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ejemplo de Estilo</title>
    <style>
      body {
        margin: 0;
      }
      h1 {
        color: blue;
        text-align: center;
      }
      p {
        color: gray;
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <h1>Hola, Mundo!</h1>
    <p>Este es un párrafo de ejemplo.</p>
  </body>
</html>
```

Aunque se permite incluir JavaScript y estilos CSS directamente en el HTML no es buena práctica puesto que puede dificultar la lectura y el mantenimiento del código.

Mantener el HTML, CSS y JavaScript en archivos separados facilita la gestión y el entendimiento del código.

La forma profesional para incluir nuestro código y estilos es mediante la lectura de archivos externos. se hace de la siguiente manera:

- **CSS externo:** Coloca los estilos en un archivo `.css` separado y enlázalo en el <head> del documento HTML usando <link rel="stylesheet" href="styles.css">.

- **Archivo JavaScript externo:** Coloca el JavaScript en un archivo `.js` separado y enlázalo al final del <body> del documento HTML usando `<script src="scripts.js"></script>`.

Así se vería un ejemplo incluyendo ambos archivos a un archivo HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ejemplo de Separación de Código</title>
    <!-- Acá enlazo mi archivo de estilos -->
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1 id="titulo">Hola, Mundo!</h1>
    <!-- Acá enlazo mi archivo JavaScript -->
    <script src="scripts.js"></script>
  </body>
</html>
```
