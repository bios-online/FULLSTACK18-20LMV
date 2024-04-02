## Ejercicios

### Suma de dos números:

Escribe una función llamada `sumar` que tome dos números como parámetros y retorne su suma.

```js
//EJEMPLO

// Aquí escribes la función ...

let resultado1 = suma(2, 3);
console.log(resultado1); // Debe imprimir en consola: 5
```

### Número par o impar:

Escribe una función llamada `parOImpar` que tome un número como parámetro y retorne "Par" si el número es par e "Impar" si es impar.

```js
//EJEMPLO

// Aquí escribes la función ...

let resultado2 = parOImpar(2);
console.log(resultado2); // Debe imprimir en consola "Par"
```

> Pista: módulo

### Día de la semana:

Escribe una función llamada `determinarDia` que tome un número como parámetro e imprima en consola el día de la semana correspondiente (por ejemplo, 1 para "Lunes", 2 para "Martes", etc.).

```js
//EJEMPLO

// Aquí escribes la función ...

determinarDia(2); // Debe imprimir en consola: "Martes"
```

### Calificaciones:

Escribe una función llamada `calificar` que tome una calificación como parámetro e imprima en consola la letra correspondiente según la siguiente escala de calificación

| Nombre        | Nomenclatura | Rango    |
| ------------- | ------------ | -------- |
| Excelente     | E            | 81 - 100 |
| Sobresaliente | S            | 61 - 80  |
| Aceptable     | A            | 41 - 60  |
| Insuficiente  | I            | 21 - 40  |
| Deficiente    | D            | 0 - 20   |

en caso de no pertenecer a la escala imprimir `La calificación debe ser entre 0 y 100`

```js
//EJEMPLO

// Aquí escribes la función ...

calificar(82); // Debe imprimir en consola: "E"
```

### Conversión de temperatura:

Escribe una función llamada `convertirTemperatura` que tome tres parámetros: la temperatura, la escala de temperatura original (C para Celsius o F para Fahrenheit) y la escala a la que se debe convertir (C o F). La función debe retornar la temperatura convertida con su respectivo símbolo.

```js
//EJEMPLO

// Aquí escribes la función ...

let valorFahrenheit = convertirTemperatura(20, "C", "F"); // Debe convertir 20° Celsius a Fahrenheit
console.log(valorFahrenheit); //  Debe imprimir en consola: 68F

let valorCelsius = convertirTemperatura(89.6, "F", "C"); // Debe convertir 89.6° Fahrenheit a Celsius
console.log(valorCelsius); //  Debe imprimir en consola: 32C

let sinConversion = convertirTemperatura(100, "F", "F"); // No debe realizar conversión
console.log(sinConversion); //  Debe imprimir en consola: 100F
```
