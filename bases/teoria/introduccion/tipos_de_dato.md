# Tipos de dato

## Contenido

- [Primitivos](#id1)
- [Objetos](#id2)
- [Arrays](#id3)

---

### Primitivos<a name="id1"></a>

- **string**: Son cadenas de caracteres o texto. Siempre deben estar
  envueltos en comillas `""` o comillas simples `''`. Ej: `"Hola mundo"` `"2"` `"A"`

- **numbers**: Son valores numéricos que pueden ser enteros o decimales tanto positivos como negativos.

- **boolean**: Solo puede almacenar 2 valores "si y no" siendo `true` para valores verdaderos y `false` para valores falsos.

- **null**: Es un valor especial que representa "nada", "vacío" o "valor desconocido".

- **undefined**: Representa un "valor no asignado". Si una variable es declarada, pero no asignada, entonces su valor es `undefined`.

---

- **Symbol**: Se utiliza para crear identificadores únicos
- **BigInt**: Permite representar de forma segura valores enteros mayores que `(2 ^ 53-1)` y - `(2 ^ 53-1)`

### Objetos<a name="id2"></a>

A grandes rasgos un objeto es una estructura que nos permite agrupar una serie de propiedades simples o complejas escritas como `clave:valor`.

Para crear un objeto podemos simplemente escribir: `{}`, siendo estas llaves un objeto vacío (es decir que no tiene propiedades)

```js
let objetoVacio = {}
```

Podemos usar los objetos para abstraer elementos cotidianos de la vida real, por ejemplo si necesito utilizar mi información personal y agruparla puedo crear la siguiente variable:

```js
let informacionPersonal = {
  nombre: "Julián", // clave:valor
  apellidos: "Sucerquia",
  edad: 25,
  esCasado: false,
}
```

Cada propiedad dentro del objeto se compone de una clave o `key` y su valor `value`, en el ejemplo vemos como **"nombre"** tiene asociado un dato de tipo string que es la cadena de texto "**Julián"**. Si quiero escribir multiples propiedades deben separarse con una coma `,`.

El nombre de la propiedad de un objeto puede ser cualquier cadena válida de JavaScript, o cualquier cosa que se pueda convertir en una cadena. cuando este consiste de una sola palabra no es necesario usar las comillas, pero en caso de conformarse de dos o mas palabras deben utilizarse obligatoriamente.

```js
let miObjeto = {
  propiedad: "mi valor",
  "propiedad compuesta": "mi valor",
}
```

> Los nombres de las propiedades deben ser únicos

Las propiedades pueden almacenar cualquier tipo de dato, tanto tipos primitivos, funciones, variables, arrays e incluso objetos mismos.

Para acceder a estas propiedades creadas usamos dos tipos de notaciones:

- **Notación punto**

```js
let miEdad = informacionPersonal.edad // Guardará en la variable el valor de la propiedad "edad" perteneciente al objeto "informacionPersonal"
```

- **Notación en corchetes**

```js
let miNombre = informacionPersonal["nombre"] // Guardará en la variable el valor de la propiedad "nombre" perteneciente al objeto "informacionPersonal"
```

La notación de corchetes nos permite también acceder de forma dinámica a una propiedad dado el valor de una variable. es decir:

```js
let nombrePropiedad = "edad"
let propiedad = informacionPersonal[nombrePropiedad] // La propiedad a la cual accedemos depende de la variable "nombrePropiedad"
```

Si queremos modificar el valor de una propiedad simplemente realizamos una asignación:

```js
informacionPersonal.nombre = "Alberto"
informacionPersonal["edad"] = 34
```

Para eliminar una propiedad utilizamos la palabra reservada `delete`:

```js
delete informacionPersonal.apellidos
delete informacionPersonal["esCasado"]
```

¿Que pasaría si intentamos acceder a una propiedad que no existe? Si lo hacemos javascript simplemente nos devolverá un `undefined`

```js
console.log(informacionPersonal.random) // Imprime undefined
```

Pero supongamos el caso en que queremos acceder a la propiedad de un objeto anidado que no existe, por ejemplo:

```js
let usuario = {
  nombre: "julian",
}

console.log(usuario.direccion.calle) // estamos suponiendo que existe una propiedad "direccion" que es un objeto y tiene una propiedad "calle"
```

Si solo accedemos a `usuario.direccion` obtendríamos el resultado del ejemplo anterior, pero cuando intentamos acceder a la propiedad de algo que es `undefined` la cosa cambia.

Al ejecutar el código nos encontraremos con un error:

`TypeError: Cannot read properties of undefined (reading 'calle')`

Lo que está sucediendo es lo siguiente:

- la variable usuario no posee la propiedad direccion
- javascript interpreta direccion como undefined
- Al intentar acceder a la propiedad calle de la direccion estamos intentando hacer lo siguiente: `undefined.calle` lo cual genera el error

Para nuestra suerte existe una forma especial para acceder a propiedades anidadas las cuales no estamos seguros si existen o no llamado encadenamiento opcional (optional chaining) `?.`

Veamos como se utiliza:

```js
let usuario = {
  nombre: "julian",
}

console.log(usuario.direccion?.calle) // imprime undefined
```

Utilizamos el operador `?.` para realizar la pregunta:

- ¿Puedo acceder a la propiedad "calle" de forma segura?

En caso de no ser posible acceder el valor será `undefined`

También podemos usar un operador especial que nos permite preguntar si una propiedad existe:

```js
// "nombre de la propiedad" in Objeto
"key" in usuario // nos da un valor de true o false
```

Por ejemplo:

```js
if ("direccion" in usuario) {
  console.log(usuario.direccion.calle)
}
```

> TO BE CONTINUE...

### Arrays<a name="id3"></a>

En algunas ocasiones necesitamos listar de forma ordenada un conjunto de elemento. Por ejemplo en la lista de la compra donde tengo elementos como "carne", "leche", "huevos". Para eso existe una estructura conocida como `Array`

Para crear un array utilizamos los corchetes `[]`, en los cuales agregaremos nuestros elementos separados por comas `,`:

```js
let listaVacia = []

let listaDeCompra = ["Leche", "Huevos", "Carne"]
```

Podemos crear un array vacío o definir valores iniciales.

Al ser una lista ordenada los Arrays poseen un indicador interno referente a la posición de un elemento en la lista, es decir, cual elemento está de primera, segunda, tercera, etc. Este indice comienza desde cero:

```js
//-------------------  0        1        2
let listaDeCompra = ["Leche", "Huevos", "Carne"]
```

En este caso el elemento "Leche" posee el indice `0`, el elemento "Huevo" el indice `1` y el elemento "Carne" el indice `2`

Para poder acceder a los elementos de la lista nos valemos del indice para indicar que elemento queremos:

```js
let listaDeCompra = ["Leche", "Huevos", "Carne"]
console.log(listaDeCompra[0]) // Imprime el valor "Leche"
console.log(listaDeCompra[1]) // Imprime el valor "Huevos"
```

En caso de querer reemplazar el valor de un elemento en la lista usamos el operador de asignación:

```js
let listaDeCompra = ["Leche", "Huevos", "Carne"]
listaDeCompra[2] = "Pescado" // Reemplaza el valor de la posición dos por "Pescado"
console.log(listaDeCompra[2]) // Imprime el valor "Pescado"
```

Los arreglos pueden almacenar cualquier tipo de dato (primitivo, objetos e incluso otros arreglos) y permite la combinación de estos:

```js
let random = [
  "Leche",
  1,
  true,
  null,
  undefined,
  { nombre: "julian" },
  [1, 2, 3],
]
```

Internamente los Arrays son objetos especiales de Javascript:

```js
let lista = []
console.log(typeof lista) // nos dice que es un "object"
```

Gracias a esto, el lenguaje nos provee de propiedades especiales para poder manipular nuestras listas, por ejemplo:

- Obtener la cantidad de elementos de la lista:

```js
let lista = [20, 30, 40, 50]
console.log(lista.length) // Imprime: 4
```

- Agregar un elemento al final de la lista:

```js
lista.push(60)
console.log(lista) // Imprime: [20, 30, 40, 50, 60]
```

- Agregar un elemento al inicio de la lista:

```js
lista.unshift(10)
console.log(lista) // Imprime: [10, 20, 30, 40, 50, 60]
```

- Eliminar el ultimo elemento de la lista:

```js
lista.pop()
console.log(lista) // Imprime: [10, 20, 30, 40, 50]
```

- Eliminar el primer elemento de la lista:

```js
lista.shift()
console.log(lista) // Imprime: [20, 30, 40, 50]
```

- Acceder al ultimo elemento de la lista:

```js
console.log(lista.at(-1)) // Imprime: 50
```

> TO BE CONTINUE...
