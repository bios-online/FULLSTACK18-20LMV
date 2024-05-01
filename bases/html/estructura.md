# Estructura de un documento HTML

Un documento HTML sigue una estructura básica que consta de las siguientes partes:

#### `<!DOCTYPE html>`

Esta declaración define la versión de HTML que se está utilizando y ayuda al navegador a interpretar correctamente el código HTML.

---

#### `<html>`

La etiqueta `<html>` envuelve todo el contenido del documento HTML y define el inicio y el final del mismo.

---

#### `<head>`

La sección `<head>` contiene metadatos sobre el documento, como el título (`<title>`), información de codificación (`<meta charset="utf-8">`), enlaces a hojas de estilo (`<link>`), scripts (`<script>`), entre otros.

---

#### `<title>`

La etiqueta `<title>` define el título del documento que se muestra en la barra de título del navegador o en la pestaña.

---

#### `<body>`

La sección `<body>` contiene todo el contenido visible del documento, como texto, imágenes, enlaces, tablas, formularios, etc.

---

Juntando todos estos elementos la estructura inicial se ve de esta manera:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Título del documento</title>
    <!-- Metadatos, enlaces a estilos, scripts, etc. -->
  </head>
  <body>
    <!-- Contenido visible del documento -->
  </body>
</html>
```

De esta manera se garantiza que el documento se muestre correctamente en los navegadores web.
