# Ciclos o Bucles

## Contenido

- [Ciclo for](#id1)
- [Ciclo while y do while](#id2)
- [Ciclo for of](#id3)
- [Ciclo for in](#id4)
- [break y continue](#id5)

---

En ocasiones podemos tener la necesidad de repetir una misma acción varias veces, por ejemplo si quisiera imprimir cinco veces la palabra "Miau" haría algo como lo siguiente:

```js
console.log("Miau")
console.log("Miau")
console.log("Miau")
console.log("Miau")
console.log("Miau")
```

Puede ser que esto solucione nuestro problema a corto plazo, pero ¿que pasaría si la cantidad de veces que se debe ejecutar aumentara y fueran ahora 20 o 30? El código seria insostenible.

Para afrontar estas situaciones existen los ciclos que me permiten ejecutar el código tantas veces como lo necesitemos.

## Ciclo `for`<a name="id1"></a>

Utiliza la palabra reservada `for` y se usa de esta manera:

```js
/*
for (expresión inicial; condición; actualización )
*/
for (let count = 0; count < 3; count++) {
  // Código que se repetirá
  console.log("Miau") // se imprimirá 3 veces
}
```

Lo que ocurrirá internamente es lo siguiente:

1. **Se ejecuta la expresión inicial:** Normalmente se inicializa uno o más contadores para el bucle. Esta expresión también puede declarar variables. En nuestro caso estamos inicializando la variable i. `let i = 0`

2. **Se evalúa la condición:**. Si el valor de condición es `true`, se ejecutará el código dentro del bucle. Si el valor de condición es `false`, el bucle termina. (Si la condición se omite por completo, se supone que la condición es verdadera).

3. **Se ejecuta el código:** Realiza paso a paso cada linea de código que esté dentro de las llaves `{}`

4. **Se ejecuta la actualización:** Aquí se manipula el valor del contador declarado al inicio. Podemos realizar cualquier operación.

5. **Regresa al paso 2**

Veamos paso a paso el código anterior:

> Separaremos cada iteración con una linea

#### Primera iteración

1. Inicializa la variable `count` en 0: `let count = 0`
2. Valida `count < 3`, en este caso `count` es 0, por lo que `0 < 3` es `true`
3. Imprime en consola
4. Actualiza la variable `count` sumándole 1: `count++` ahora `count` tiene el valor de 1

---

#### Segunda iteración

5. Valida `count < 3`, en este caso `count` es 1, por lo que `1 < 3` es `true`
6. Imprime en consola
7. Actualiza la variable `count` sumándole 1: `count++` ahora `count` tiene el valor de 2

---

#### Tercera iteración

8. Valida `count < 3`, en este caso `count` es 2, por lo que `2 < 3` es `true`
9. Imprime en consola
10. Actualiza la variable `count` sumándole 1: `count++` ahora `count` tiene el valor de 3

---

#### Cuarta iteración

11. Valida `count < 3`, en este caso `count` es 3, por lo que `3 < 3` es `false`
12. Termina el ciclo

## Ciclo `while` y `do while` <a name="id2"></a>

```js
while (condicion) {
  // código
}
```

Esta sentencia nos permite crear un ciclo que se repetirá tantas veces como la condición sea verdadera, por ejemplo:

```js
let i = 0
while (i < 3) {
  console.log(i)
  i++
}
```

El ciclo se ejecutará hasta que la variable `i` tenga el valor de 3. Podemos notar como en el cuerpo del ciclo imprimimos el valor de `i` e incrementamos su valor una unidad. Si no hiciéramos este incremento la condición de `i < 3` nunca sería `false` haciendo que el ciclo se repita infinitamente.

## Ciclo `for of`<a name="id3"></a>

> [!NOTE]
> Si no sabes lo que es un `Array` primero lee la sección introductoria de `tipos_de_dato`

Esta declaración crea un bucle que se repite dado un Array (o un `Iterable`) el cual se ejecutará para cada valor del Array (o `Iterable`). Se escribe de la siguiente manera:

```js
for (variable of array) {
  // cuerpo del ciclo
}
```

Veamos un ejemplo:

```js
let lista = ["A", "B", "C"]
/*
for ([variable] of Array/Iterable)
*/
for (item of lista) {
  // El ciclo se encarga internamente de crear la variable
  console.log(item) // se imprimirá el elemento
}
```

El bucle se encarga directamente de iterar por cada elemento en la lista y nos dará acceso a una variable (en este caso tiene el nombre de `item` pero puedes ponerle cualquier nombre) que tendrá como valor un elemento de la lista, de acuerdo a la iteración. veamos paso a paso:

> Separaremos cada iteración con una linea

#### Primera iteración

1. El bucle inicia en la posición 0 del array
2. Asigna a la variable el valor en la posición 0, en este caso `item` tendrá el valor de "A"
3. Imprime en consola la variable `item`

---

#### Segunda iteración

1. El bucle continua a la posición 1 del array
2. Asigna a la variable el valor en la posición 1, en este caso `item` tendrá el valor de "B"
3. Imprime en consola la variable `item`

---

#### Tercera iteración

1. El bucle continua a la posición 2 del array
2. Asigna a la variable el valor en la posición 2, en este caso `item` tendrá el valor de "C"
3. Imprime en consola la variable `item`
4. Termina el ciclo

## Ciclo `for in` <a name="id4"></a>

> [!NOTE]
> Si no sabes lo que es un `Objeto` primero lee la sección introductoria de `tipos_de_dato`

Esta declaración crea un bucle que se repite dado un objeto el cual se ejecutará para cada propiedad del objeto. Se escribe de la siguiente manera:

```js
for (let variable in objeto) {
  // cuerpo del ciclo
}
```

Veamos un ejemplo:

```js
// Definimos un objeto con algunas propiedades
let persona = {
  nombre: "Juan",
  edad: 24,
  ciudad: "Medellín",
}

// Iteramos sobre las propiedades del objeto usando for...in
for (let propiedad in persona) {
  console.log(propiedad)
}
```

El bucle se encarga directamente de iterar por cada propiedad en el objeto y nos dará acceso a una variable (en este caso tiene el nombre de `propiedad` pero puedes ponerle cualquier nombre) que tendrá como valor el nombre de la propiedad de acuerdo a la iteración. veamos paso a paso:

> Separaremos cada iteración con una linea

#### Primera iteración

1. El bucle inicia con la primera key del objeto
2. Asigna a la variable el valor de la key, en este caso `propiedad` tendrá el valor de "nombre"
3. Imprime en consola `nombre`

---

#### Segunda iteración

1. El bucle continua con la primera segunda key del objeto
2. Asigna a la variable el valor de la key, en este caso `propiedad` tendrá el valor de "edad"
3. Imprime en consola la variable `edad`

---

#### Tercera iteración

1. El bucle continua con la primera tercera key del objeto
2. Asigna a la variable el valor de la key, en este caso `propiedad` tendrá el valor de "ciudad"
3. Imprime en consola la variable `ciudad`
4. Termina el ciclo

## `break` y `continue`<a name="id5"></a>

### Detener el ciclo:

Podemos utilizar la palabra reservada `break` para forzar detener los ciclos en cualquier momento de su iteración.

Por ejemplo, supongamos que tenemos un ciclo que imprime números del 1 al 100 pero queremos interrumpir su ejecución cuando vaya a imprimir el numero 50:

```js
for (let i = 1; i <= 100; i++) {
  if (i === 50) {
    break // estamos haciendo una condición para que cuando la variable i sea 50 termine el ciclo
  }
  console.log(i)
}
```

> `break` funciona para todos los ciclos menos el forEach

### Continuar la siguiente iteración:

Si en lugar de detener por completo el ciclo simplemente queremos saltarnos la ejecución de la iteración actual y seguir con la siguiente lo hacemos con la palabra reservada `continue`.

Por ejemplo, tenemos el siguiente ciclo que imprime números pares y código adicional:

```js
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    continue // Estamos haciendo una condición para que cuando la variable i no sea par saltemos a la siguiente iteración
  }
  console.log(i)
  console.log("Soy par")
}
```

> `continue` funciona para todos los ciclos menos el forEach

> TO BE CONTINUE
