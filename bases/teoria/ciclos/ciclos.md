# Ciclos o Bucles

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

## Ciclo `for`

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

## Ciclo `for of`

> Si no sabes lo que es un `Array` primero lee la sección introductoria de `tipos_de_dato`

Esta declaración crea un bucle que se repite dado un Array (o un `Iterable`) el cual se ejecutará para cada valor del Array (o `Iterable`). Se escribe de la siguiente manera:

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

> TO BE CONTINUE
