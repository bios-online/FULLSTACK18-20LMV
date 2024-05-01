# Try ... Catch ... Finally

La sentencia try consiste en un bloque `try` que contiene el código que queremos ejecutar dentro de llaves. Al menos un bloque `catch` o un bloque `finally`. En caso de que ocurra un error que detenga la ejecución del programa el bloque try redireccionará el flujo al bloque `catch` en donde podremos manejar el error sin que termine el programa. Se escribe de la siguiente manera:

```js
try {
  // mi código
} catch (error) {
  // manejo del error en caso de necesitarlo
}
```

Supongamos que tenemos el siguiente código:

```js
// intentaremos llamar una función que no existe
console.log("Aquí inicia mi programa")
funcionInexistente()
console.log("Aquí termina mi programa")
```

cuando ejecutemos el programa nos saldrá un error en consola

```bash
Aquí inicia mi programa
funcionInexistente()
^

ReferenceError: funcionInexistente is not defined
    at Object.<anonymous> (c:\Users\TUF\Documents\bios\FULLSTACK18-20LMV\bases\teoria\introduccion\ejemplos\tempCodeRunnerFile.js:2:1)
    at Module._compile (node:internal/modules/cjs/loader:1369:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)
    at Module.load (node:internal/modules/cjs/loader:1206:32)
    at Module._load (node:internal/modules/cjs/loader:1022:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

```

Nos daremos cuenta que la instrucción `console.log('Aquí termina mi programa')` no fue ejecutada.

Para poder controlar el error usamos el bloque try...catch

```js
console.log("Aquí inicia mi programa")
try {
  funcionInexistente()
} catch (error) {
  console.log("Ah ocurrido un error")
}
console.log("Aquí termina mi programa")

/* saldrá en consola:

Aquí inicia mi programa
Ah ocurrido un error
Aquí termina mi programa

*/
```

Al envolver el código que puede fallar dentro de la sentencia try nos aseguramos de que el programa no se detenga en caso de ocurrir un error.
