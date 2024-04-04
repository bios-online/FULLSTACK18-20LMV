## Tipos de dato:

### Primitivos

- **string**: Son cadenas de caracteres o texto. Siempre deben estar
  envueltos en comillas `""` o comillas simples `''`. Ej: `"Hola mundo"` `"2"` `"A"`

- **numbers**: Son valores numéricos que pueden ser enteros o decimales tanto positivos como negativos.

- **boolean**: Solo puede almacenar 2 valores "si y no" siendo `true` para valores verdaderos y `false` para valores falsos.

- **null**: Es un valor especial que representa "nada", "vacío" o "valor desconocido".

- **undefined**: Representa un "valor no asignado". Si una variable es declarada, pero no asignada, entonces su valor es `undefined`.

---

- **Symbol**: Se utiliza para crear identificadores únicos
- **BigInt**: Permite representar de forma segura valores enteros mayores que `(2 ^ 53-1)` y - `(2 ^ 53-1)`

### Objetos

A grandes rasgos un objeto es una estructura que nos permite agrupar una serie de propiedades simples o complejas escritas como `clave:valor`. Para crear un objeto podemos simplemente escribir: `{}`, siendo estas llaves un objeto vacío (es decir que no tiene propiedades)

Podemos usar los objetos para abstraer elementos cotidianos de la vida real, por ejemplo si necesito utilizar mi información personal y agruparla puedo crear la siguiente variable:

```js
let informacionPersonal = {
  nombre: "Julián", // clave:valor
  apellidos: "Sucerquia",
  edad: 25,
  esCasado: false,
};
```

Cada propiedad dentro del objeto se compone de una clave o `key` y su valor `value`, en el ejemplo vemos como **"nombre"** tiene asociado un dato de tipo string que es la cadena de texto "**Julián"**. Si quiero escribir multiples propiedades deben separarse con una coma `,`.

El nombre de la propiedad de un objeto puede ser cualquier cadena válida de JavaScript, o cualquier cosa que se pueda convertir en una cadena. cuando este consiste de una sola palabra no es necesario usar las comillas, pero en caso de conformarse de dos o mas palabras deben utilizarse obligatoriamente.

```js
let miObjeto = {
  propiedad: "mi valor",
  "propiedad compuesta": "mi valor",
};
```

> Los nombres de las propiedades deben ser únicos

Las propiedades pueden almacenar cualquier tipo de dato, tanto tipos primitivos, funciones, variables, arrays e incluso objetos mismos.

Para acceder a estas propiedades creadas usamos dos tipos de notaciones:

- **Notación punto**

```js
let miEdad = informacionPersonal.edad; // Guardará en la variable el valor de la propiedad "edad" perteneciente al objeto "informacionPersonal"
```

- **Notación en corchetes**

```js
let miNombre = informacionPersonal["nombre"]; // Guardará en la variable el valor de la propiedad "nombre" perteneciente al objeto "informacionPersonal"
```

La notación de corchetes nos permite también acceder de forma dinámica a una propiedad dado el valor de una variable. es decir:

```js
let nombrePropiedad = "edad";
let propiedad = informacionPersonal[nombrePropiedad]; // La propiedad a la cual accedemos depende de la variable "nombrePropiedad"
```

Si queremos modificar el valor de una propiedad simplemente realizamos una asignación:

```js
informacionPersonal.nombre = "Alberto";
informacionPersonal["edad"] = 34;
```

Para eliminar una propiedad utilizamos la palabra reservada `delete`:

```js
delete informacionPersonal.apellidos;
delete informacionPersonal["esCasado"];
```

¿Que pasaría si intentamos acceder a una propiedad que no existe? Si lo hacemos javascript simplemente nos devolverá un `undefined`

```js
console.log(informacionPersonal.random); // Imprime undefined
```

También podemos usar operador especial que nos permite preguntar si la propiedad existe:

```js
// "nombre de la propiedad" in Objeto
"key" in informacionPersonal; // nos retorna true o false
```

> TO BE CONTINUE...

### Arrays
