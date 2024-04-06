# Funciones

Una función en JavaScript es un bloque de código que agrupa una serie de instrucciones para realizar una tarea específica pero no es ejecutado de inmediato.

Estas se definen utilizando la palabra clave `function`, seguida de un **nombre opcional** para la función, paréntesis que pueden contener parámetros y un bloque de código que contiene las instrucciones que realiza la función.

```js
function nombreDeLaFuncion() {
  // Codigo Javascript
}
```

Las funciones pueden tener parámetros o ninguno, que son **variables** que pasan valores a la función cuando se llama.

```js
function funcionConParametros(parametro1, parametro2, parametro3) {
  // Aquí puedo usar los parámetros
}
```

Estos parámetros pueden ser utilizados dentro del cuerpo de la función para realizar operaciones o cálculos.

```js
function funcionConParametros(parametro1) {
  // Aquí puedo usar este parámetro
  console.log(parametro1)
}
```

los parametros se pueden entender como "placeholders" los cuales aun no conocemos su valor, hasta que se haga el llamado a la función.

Para utilizar o llamar la función debemos escribir su nombre y paréntesis los cuales tendrán tantos valores como parámetros se hayan definido.

```js
// Definición de una función llamada saludar que no recibe parámetros

function saludar() {
  console.log("¡Hola, mundo!")
}

// Llamada a la función saludar
saludar() // Output: ¡Hola, mundo!
```

por ejemplo podemos ajustar la función para que imprima un saludo dado un nombre como parametro:

```js
function saludar(nombre) {
  console.log("¡Hola!" + nombre)
}

// Llamada a la función saludar
saludar("Julian") // Output: ¡Hola! Julian
```

### Return

Una función puede devolver un resultado utilizando la palabra clave `return`, lo que hace que la función finalice y devuelva el valor especificado.

```js
function cuadrática(numero) {
  let resultado = numero ** 2
  return resultado
}

let valor = cuadrática(5)
console.log(valor) // Output: 25
```

Con el retorno de la función pudimos asignarle a la variable `valor` el valor de la operación hecha.

---

Las variables declaradas dentro de una función (variables locales) no pueden ser accedidas desde fuera de esta. pero la función si puede acceder a variables externas:

```js
let saludoIncompleto = "¡Hola! Bienvenido "

function saludar(nombre) {
  let variableInterna = saludoIncompleto + nombre
  console.log(variableInterna)
}

saludar("Andres") // Output:  ¡Hola! Bienvenido Andres

console.log(variableInterna) // Nos generará un error
```

Las variables definidas fuera de la función tienen un alcance o `Scope global` y las que se definen dentro de la función tienen `Scope local`

Las variables globales son visibles desde cualquier función (a menos que se les superpongan variables locales con el mismo nombre).

> Para que el código sea limpio y fácil de entender, se recomienda utilizar principalmente variables y parámetros locales en la función, no variables externas.

> TO BE CONTINUE
