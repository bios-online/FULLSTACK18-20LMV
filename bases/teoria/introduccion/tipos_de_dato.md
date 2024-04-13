# Tipos de dato

## Contenido

- [Primitivos](#id1)
- [Objetos](#id2)
- [Arrays](#id3)
  - [Métodos y propiedades](#id4)
- [Propiedades en los primitivos](#id5)

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

Gracias a esto, el lenguaje nos provee de propiedades especiales para poder manipular nuestras listas.

#### Métodos y propiedades de los Arrays<a name="id4"></a>

- **length:** Permite obtener la cantidad de elementos de la lista:

```js
let lista = [20, 30, 40, 50]
console.log(lista.length) // Imprime: 4
```

- **push:** Permite agregar un elemento al final de la lista:

```js
lista.push(60)
console.log(lista) // Imprime: [20, 30, 40, 50, 60]
```

- **unshift:** Permite agregar un elemento al inicio de la lista:

```js
lista.unshift(10)
console.log(lista) // Imprime: [10, 20, 30, 40, 50, 60]
```

- **pop:** Eliminar el ultimo elemento de la lista:

```js
lista.pop()
console.log(lista) // Imprime: [10, 20, 30, 40, 50]
```

- **shift:** Permite eliminar el primer elemento de la lista:

```js
lista.shift()
console.log(lista) // Imprime: [20, 30, 40, 50]
```

- **at:** Permite acceder al ultimo elemento de la lista:

```js
console.log(lista.at(-1)) // Imprime: 50
```

- **splice:** Permite eliminar o modificar uno o varios elementos en la lista dado un indice:

```js
let lista = [1, 2, 3]
console.log(lista.splice(1, 0, 4)) // Agrega en la posición 1 el numero 4
console.log(lista.splice(2, 1, 34)) // Reemplaza el valor de la posición 2 por el numero 34
```

- **indexOf:** Permite obtener el indice del elemento dado:

```js
let lista = ["banana", "pera", "manzana"]
console.log(lista.indexOf("pera")) // Imprime: 1
```

- **concat:** Permite juntar dos Arrays y me retorna un nuevo array:

```js
let lista = ["banana", "pera", "manzana"]
let lista2 = ["mango"]
console.log(lista.concat(lista2)) // Imprime: ["banana", "pera", "manzana", "mango"]
```

- **join:** Permite convertir el Array en una cadena de texto separando sus elementos por un delimitador pasado por parámetro:

```js
let lista = [2, 4, 6]
console.log(lista.join("-")) // Imprime: "2-4-6"
```

- **reverse:** Permite invertir el orden de la lista:

```js
let lista = [3, 6, 9]
console.log(lista.reverse()) // Imprime: [9, 6, 3]
```

- **includes:** Permite validar si existe un elemento en la lista:

```js
let lista = [3, 6, 9]
console.log(lista.includes(6)) // Imprime: true
```

- **slice:** Permite crear una copia de una sección del array dado un indice de inicio y fin (no incluido) y la retornará como un nuevo array:

```js
let lista = [1, 2, 3, 4, 5, 6, 7, 8]
let subLista = lista.slice(2, 6)
console.log(subLista) // Imprime: [ 3, 4, 5, 6 ]
```

Otros métodos requieren el paso de una función como parámetro. En los siguientes ejemplos usaremos funciones flecha ya que son mas cortas de escribir.

> [!NOTE]
> Si no sabes que es un `callback` y una `función flecha` revisa primero la sección de `funciones`.

- **forEach:** Recibe una función como parámetro la cual será ejecutada una vez por cada elemento de la lista:

```js
let lista = ["Manuel", "Carolina", "Alberto"]
lista.forEach((nombre) => console.log("Hola " + nombre))

/* 
Imprime:
Hola Manuel
Hola Carolina
Hola Alberto
*/
```

- **map:** Recibe una función como parámetro y crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos:

```js
let lista = [1, 2, 3, 4]
let nuevaLista = lista.map((numero) => numero ** 2)
console.log(nuevaLista)
// Imprime: [1, 4, 9, 16]
```

- **every:** Recibe una función como parámetro y valida si cada elemento del array cumple con una condición:

```js
let lista = [2, 4, 6, 8]
let esPar = lista.every((numero) => numero % 2 === 0)
console.log(esPar)
// Imprime: true
```

- **some:** Recibe una función como parámetro y valida si al menos un elemento del array cumple con la condición dada:

```js
let lista = [3, 1, 5, 2, 7]
let existeUnPar = lista.some((numero) => numero % 2 === 0)
console.log(existeUnPar)
// Imprime: true
```

- **find:** Recibe una función como parámetro y retorna el primer elemento del array que cumpla con la condición dada:

```js
let lista = [
  { id: 1, nombre: "Gabriel" },
  { id: 2, nombre: "Mariana" },
  { id: 3, nombre: "Maria" },
]
let resultado = lista.find((elemento) => elemento.nombre === "Mariana")
console.log(resultado)
// Imprime: { id: 2, nombre: "Mariana" }
```

- **filter:** Recibe una función como parámetro y retorna un nuevo array con todos los elementos del array que cumpla con la condición dada:

```js
let lista = [
  { id: 1, nombre: "Gabriel", estaCasado: false },
  { id: 2, nombre: "Mariana", estaCasado: true },
  { id: 3, nombre: "Maria", estaCasado: false },
]
let solteros = lista.filter((elemento) => !elemento.estaCasado)
console.log(solteros)
/* Imprime:
[
  { id: 1, nombre: 'Gabriel', estaCasado: false },
  { id: 3, nombre: 'Maria', estaCasado: false }
]
*/
```

- **sort:** Ordena los elementos el array de acuerdo a su posición en la tabla `unicode`. Puede recibir una función que indique como debe ordenar los elementos, la cual comparará el elemento actual con el siguiente y dependiendo del resultado dado se ordenará uno antes que el otro:

```js
const frutas = ["guanabana", "manzanas", "bananas"]
frutas.sort()
console.log(frutas) // ['bananas', 'guanabana', 'manzanas']

const numeros = [40, 1, 5, 200]
numeros.sort((a, b) => a - b)
console.log(numeros) // [ 1, 5, 40, 200 ]
```

- **reduce:** Recibe una función como primero parámetro y un valor inicial como segundo parámetro. Ejecuta una función por cada elemento y su resultado lo almacena para la siguiente iteración retornando al final un único valor

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const suma = numeros.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  0 // valor inicial
)
console.log(suma) // 55
```

Existen muchos mas métodos que podemos encontrar en la documentación oficial del lenguaje [MDN Arrays](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

> TO BE CONTINUE...

### Propiedades en los primitivos<a name="id5"></a>

Aunque los tipos primitivos no son objetos, javascript nos permite acceder a ciertas propiedades especiales.

#### Strings:

- **length:** Permite saber el tamaño del string

```js
let texto = "Hola mundo"
console.log(texto.length) // Imprime: 10
```

- **toLowerCase:** Retorna el string en minúscula sostenida pero no modifica el original

```js
let texto = "Hola Mundo"
console.log(texto.toLowerCase()) // Imprime: hola mundo
```

- **toUpperCase:** Retorna el string en mayúscula sostenida pero no modifica el original

```js
let texto = "Hola Mundo"
console.log(texto.toUpperCase()) // Imprime: HOLA MUNDO
```

- **includes:** Valida si existe una subcadena en el string

```js
let texto = "Hola Mundo"
console.log(texto.includes("Mundo")) // Imprime: true
```

- **startWith:** Valida si el string comienza por una subcadena determinada

```js
let texto = "Hola Mundo"
console.log(texto.startWith("Ho")) // Imprime: true
```

- **endWith:** Valida si el string finaliza por una subcadena determinada

```js
let texto = "Hola Mundo"
console.log(texto.endWith("ndo")) // Imprime: true
```

- **slice:** Extrae una sección de una cadena y devuelve una cadena nueva determinada

```js
let texto = "Hola Mundo"
console.log(texto.slice(2, 8)) // Imprime: "la Mun"
```

- **repeat:** Crea una nueva cadena de texto concatenando tantas veces el string como se indique como parámetro

```js
let texto = "Hola"
console.log(texto.repeat(3)) // Imprime: "HolaHolaHola"
```

- **trim:** Elimina todos los espacios vacíos que haya al inicio y al final de una cadena

```js
let texto = "        Hola        "
console.log(texto.trim()) // Imprime: "Hola"
```

- **split:** Divide la cadena de texto de acuerdo a un string dado por parámetro y retorna un Array con cada elemento dividido

```js
let texto = "Hola,Como,Estan"
console.log(texto.split(",")) // Imprime: [ "Hola" ,"Como", "Estan" ]
```

- **replace:** Reemplaza la primera subcadena que encuentre en el string con el valor dado por parámetro

```js
let texto = "Hola Mundo"
console.log(texto.replace("o", "*")) // Imprime: "H*la Mundo"
```

- **replaceAll:** Reemplaza todas las subcadenas que encuentre en el string con el valor dado por parámetro

```js
let texto = "Hola Mundo"
console.log(texto.replace("o", "*")) // Imprime: "H*la Mund*"
```

Existen muchos mas métodos que podemos encontrar en la documentación oficial del lenguaje [MDN Strings](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
