# ¿Qué es CSS?

CSS o `(Cascading Style Sheets)` es un lenguaje de estilos utilizado para describir la presentación de un documento escrito en HTML. CSS define cómo se muestran los elementos HTML en la pantalla.

Se usa para separar la estructura del contenido (HTML) de su presentación (CSS), lo que permite `mantener` y `cambiar fácilmente` el estilo de las páginas web.

Para utilizar CSS debemos usar una sintaxis similar a la siguiente:

```css
[selector] {
  atributo: valor;
}
```

De manera similar a un objeto en JavaScript un estilo de CSS se compone de un selector, unas llaves de apertura y cierre. Dentro de ellas tendrá una estructura tipo `clave`:`valor`

## Selectores

Los selectores son la forma de apuntar a los elementos HTML que queremos darle estilo:

| Selector                 | Descripción                                                         | Ejemplo                                           |
| ------------------------ | ------------------------------------------------------------------- | ------------------------------------------------- |
| **Selector universal**   | Apunta a todos los elementos de la página (`*`)                     | `* { margin: 0; padding: 0; }`                    |
| **Selector de etiqueta** | Apunta a todos los elementos de un tipo específico                  | `p { color: blue; }`                              |
| **Selector de clase**    | Apunta a elementos con un atributo `class` específico (`.`)         | `.miClase { font-size: 20px; }`                   |
| **Selector de ID**       | Apunta a un único elemento con un atributo `id` específico (`#`)    | `#miId { margin: 10px; }`                         |
| **Selector de atributo** | Apunta a elementos con un atributo específico (`[attribute=value]`) | `input[type="text"] { border: 1px solid black; }` |

---

## Pseudo-clases y Pseudo-elementos

### Pseudo-clases:

Se utilizan para definir un estado especial de un elemento. No se aplican directamente a elementos HTML, sino que definen un estilo para el elemento cuando está en un estado particular. Se utiliza de la siguiente manera:

```css
[selector]:pseudo-clase {
  atributo: valor;
}
```

Por ejemplo si queremos aplicar un estilo cuando el mouse pase por encima de un elemento:

```css
a:hover {
  color: red;
}
```

Veamos una lista de algunas de las mas usadas:

| Nombre          | Descripción                                                                              | Ejemplo                                |
| --------------- | ---------------------------------------------------------------------------------------- | -------------------------------------- |
| `:hover`        | Aplica estilos cuando el usuario coloca el cursor sobre el elemento                      | `:hover { color: red; }`               |
| `:active`       | Aplica estilos mientras el elemento es activado (por ejemplo, mientras se hace clic)     | `a:active { color: green; }`           |
| `:focus`        | Aplica estilos cuando el elemento ha recibido el foco (por ejemplo, un campo de entrada) | `input:focus { border-color: blue; }`  |
| `:nth-child(n)` | Aplica estilos al enésimo hijo de su padre                                               | `p:nth-child(2) { color: orange; }`    |
| `:first-child`  | Aplica estilos al primer hijo de su padre                                                | `p:first-child { font-weight: bold; }` |

### Pseudo-elementos:

Se utilizan para aplicar estilos a una parte específica de un elemento. A diferencia de las pseudo-clases, los pseudo-elementos crean una `subparte` del elemento para estilizar, como la primera letra o línea de un párrafo. Se utiliza de la siguiente manera:

```css
[selector]::pseudo-elemento {
  atributo: valor;
}
```

Por ejemplo si queremos cambiar el tamaño del texto solo a la primera letra de un párrafo:

```css
p::first-letter {
  font-size: 2em;
}
```

Veamos una lista de algunos de los mas usados:

| Nombre           | Descripción                                               | Ejemplo                                        |
| ---------------- | --------------------------------------------------------- | ---------------------------------------------- |
| `::before`       | Inserta contenido antes del contenido de un elemento      | `div::before { content: 'Inicio: '; }`         |
| `::after`        | Inserta contenido después del contenido de un elemento    | `div::after { content: ' Fin'; }`              |
| `::first-line`   | Aplica estilos a la primera línea de texto de un elemento | `p::first-line { text-transform: uppercase; }` |
| `::first-letter` | Aplica estilos a la primera letra de un elemento          | `p::first-letter { font-size: 2em; }`          |

## Atributos

Los atributos en CSS son las propiedades que se aplican a los elementos HTML para definir apariencia. Estas propiedades nos permiten controlar aspectos como el `color`, el `tamaño`, el espaciado, el diseño, y la `tipografía` de los elementos en una página web.

Cada propiedad CSS acepta uno o más valores que especifican cómo se debe aplicar el estilo.

Los atributos mas relevantes son:

| Atributo           | Descripción                                                                     | Ejemplo                           |
| ------------------ | ------------------------------------------------------------------------------- | --------------------------------- |
| `color`            | Define el color del texto del elemento                                          | `color: blue;`                    |
| `background-color` | Define el color de fondo del elemento                                           | `background-color: yellow;`       |
| `width`            | Define el ancho del elemento                                                    | `width: 100px;`                   |
| `height`           | Define la altura del elemento                                                   | `height: 200px;`                  |
| `margin`           | Define el espacio exterior alrededor del elemento                               | `margin: 20px;`                   |
| `padding`          | Define el espacio interior entre el contenido del elemento y su borde           | `padding: 10px;`                  |
| `border`           | Define el borde alrededor del elemento                                          | `border: 1px solid black;`        |
| `font-family`      | Define la familia de fuentes del texto                                          | `font-family: Arial, sans-serif;` |
| `font-size`        | Define el tamaño de la fuente del texto                                         | `font-size: 16px;`                |
| `font-weight`      | Define el grosor de la fuente                                                   | `font-weight: bold;`              |
| `text-align`       | Define la alineación del texto dentro del elemento                              | `text-align: center;`             |
| `display`          | Define cómo se debe mostrar un elemento                                         | `display: block;`                 |
| `position`         | Define el método de posicionamiento de un elemento                              | `position: absolute;`             |
| `top`              | Define la posición superior del elemento en un contenedor posicionado           | `top: 50px;`                      |
| `left`             | Define la posición izquierda del elemento en un contenedor posicionado          | `left: 100px;`                    |
| `z-index`          | Define el orden de apilamiento de los elementos posicionado                     | `z-index: 10;`                    |
| `opacity`          | Define la transparencia del elemento                                            | `opacity: 0.5;`                   |
| `overflow`         | Define cómo se gestiona el contenido desbordante dentro del elemento            | `overflow: hidden;`               |
| `visibility`       | Define si el elemento es visible o no                                           | `visibility: hidden;`             |
| `cursor`           | Define el tipo de cursor que se muestra cuando el cursor está sobre el elemento | `cursor: pointer;`                |
