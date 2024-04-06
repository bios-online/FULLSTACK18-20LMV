# Variables

La mayoría de veces necesitamos trabajar con información cuando estamos programando ya sea que necesitemos usar el nombre de un usuario, su edad, etc. Las variables no son mas que una _"caja con un nombre"_ para guardar datos.

Para crear o **declarar** una variable utilizamos la siguiente sintaxis:

```js
var nombre
```

luego para decirle a la variable que es lo que queremos guardar o **inicializar** utilizamos algo llamado el **operador de asignación =** de la siguiente forma:

```js
nombre = dato
```

también se puede realizar todo en una sola linea:

```js
var nombre = dato
```

---

El nombre de las variables no puede ser igual a alguna de las **Palabras reservadas** que tiene el lenguaje, como por ejemplo: `var` `null` `false` ya que javascript se vale de ellas para funcionar.

Las variables pueden tener letras, número y algunos caracteres especiales (`&`, `_`) y no pueden comenzar con número. Aquí algunos ejemplos:

```js
// Formas correctas:

var nombre
var edadUsuario
var lista_de_productos
var $precio
var _variableTemporal
var nombreCompleto123

// Formas Incorrectas:

var myVar!
var @variable
var 1variable
var if              // if es una palabra reservada
var my variable     // No puede haber espacios
var my-variable
var my.variable
```

Existen casos en los que el nombre de una variable necesita el uso de dos palabras para dar mas contexto de cual es el dato que almacena, para estos casos existen varias alternativas de escritura. Las mas conocidas son:

- **cammelCase:** La segunda palabra comienza en mayúscula
- **snake_case:** Las palabras se separan por un guion bajo `_`
- **PascalCase:** Las dos palabras comienzan en mayúscula
- **UPPER_CASE:** Las palabras se separan por un guion bajo `_` y se escriben en mayúscula sostenida

dependiendo el contexto usaremos una u otra en nuestros programas

### Let y const

Existen otras dos formas de declarar una variable que surgieron debido a problemas que presenta usar `var` dado a su flexibilidad y peligrosidad a la hora de desarrollar por lo tanto se recomienda no usarla.

- **let**: se utiliza para declarar variables que pueden ser reasignadas y no permite ser re-declarada.
- **const**: se utiliza para declarar constantes cuyo valor no cambiará y debe ser inicializada al momento de declarase.

> TO BE CONTINUE...
