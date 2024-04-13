# Funciones

## Contenido

- [Declaración de función](#id1)
  - [Return](#id2)
  - [Callbacks](#id3)
- [Expresión de función](#id4)
- [Funciones flecha](#id5)

Una función en JavaScript es un bloque de código que agrupa una serie de instrucciones para realizar una tarea específica pero no es ejecutado de inmediato.

<a name="id1"></a>
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

los parametros se pueden entender como "placeholders" o variables las cuales aun no conocemos su valor, hasta que se haga el llamado a la función.

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

### Return<a name="id2"></a>

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

### Callbacks<a name="id3"></a>

Una función callback es una función que se pasa a otra función como parámetro, que luego se invoca dentro de la función principal para completar algún tipo acción.

```js
function saludar(nombre) {
  console.log("Hola " + nombre);
}

function programa(callback) {
  let nombre = "Martin"
  callback(nombre);
}

programa(saludar);
```

A menudo se los callbacks se utilizan para continuar con la ejecución del código después de que se haya completado una operación.

>TO BE CONTINUE

## Expresión de función<a name="id4"></a>

Las funciones también se pueden escribir en forma de expresión, donde la función puede ser anónima (no tiene un nombre definido) por ejemplo:

```js
let miFuncion = function () {
  // Codigo de mi funcion
}
```

cuando necesitemos utilizarla simplemente usamos el nombre de la variable a la que fue asignada y hacemos la invocación usando los paréntesis.

```js
miFuncion()
```

Esta forma de usar funciones es util cuando queremos pasar una función como argumento a otra. Por ejemplo:

```js
let sumar = function (a, b) {
  return a + b
}

function operacion(fn, num1, num2) {
  let resultado = fn(num1, num2)
  console.log(resultado)
}

operacion(sumar, 5, 4)
```

## Funciones flecha<a name="id5"></a>

Una función flecha es una expresión de función alternativa mas compacta aunque con mas limitaciones. Se utiliza mayormente cuando necesitamos pasar un callback a otra función. se escribe de la siguiente manera.

```js
// (params) => cuerpo de la función
let miFuncion = (parametro) => console.log(parametro)
```

Podemos realizar la comparación de una expresión de función tradicional con las funciones flecha:

```js
// Función tradicional
function (a){
  return a + 100;
}

// Desglose de la función flecha

// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
(a) => {
  return a + 100;
}

// 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
(a) => a + 100;

// 3. Suprime los paréntesis de los argumentos
a => a + 100;
```

En algunas situaciones podemos requerir los paréntesis, por ejemplo si necesitamos mas de un parámetro

```js
(paramA, paramB) => paramA + paramB
```

En caso de querer escribir un código mas extenso debemos volver a utilizar las llaves y el return (en caso de querer retornar un valor):

```js
(paramA, paramB) => {
  console.log("Este es un ejemplo de una función extensa")
  return paramA + paramB
}
```

> TO BE CONTINUE
