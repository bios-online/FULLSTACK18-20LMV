# Ejercicios

## Contenido

- [Básicos](#id1)
- [Arrays](#id2)
- [Objetos](#id3)
- [Ciclos](#id4)
- [Métodos de los Arrays y Strings](#id5)

---

# Básicos<a name="id1"></a>

### Suma de dos números:

Escribe una función llamada `sumar` que tome dos números como parámetros y retorne su suma.

```js
//EJEMPLO

// Aquí escribes la función ...

let resultado1 = suma(2, 3)
console.log(resultado1) // Debe imprimir en consola: 5
```

### Número par o impar:

Escribe una función llamada `parOImpar` que tome un número como parámetro y retorne "Par" si el número es par e "Impar" si es impar.

```js
//EJEMPLO

// Aquí escribes la función ...

let resultado2 = parOImpar(2)
console.log(resultado2) // Debe imprimir en consola "Par"
```

> Pista: módulo

### Día de la semana:

Escribe una función llamada `determinarDia` que tome un número como parámetro e imprima en consola el día de la semana correspondiente (por ejemplo, 1 para "Lunes", 2 para "Martes", etc.).

```js
//EJEMPLO

// Aquí escribes la función ...

determinarDia(2) // Debe imprimir en consola: "Martes"
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

calificar(82) // Debe imprimir en consola: "E"
```

### Conversión de temperatura:

Escribe una función llamada `convertirTemperatura` que tome tres parámetros: la temperatura, la escala de temperatura original (C para Celsius o F para Fahrenheit) y la escala a la que se debe convertir (C o F). La función debe retornar la temperatura convertida con su respectivo símbolo.

```js
//EJEMPLO

// Aquí escribes la función ...

let valorFahrenheit = convertirTemperatura(20, "C", "F") // Debe convertir 20° Celsius a Fahrenheit
console.log(valorFahrenheit) //  Debe imprimir en consola: 68F

let valorCelsius = convertirTemperatura(89.6, "F", "C") // Debe convertir 89.6° Fahrenheit a Celsius
console.log(valorCelsius) //  Debe imprimir en consola: 32C

let sinConversion = convertirTemperatura(100, "F", "F") // No debe realizar conversión
console.log(sinConversion) //  Debe imprimir en consola: 100F
```

## Arrays<a name="id2"></a>

### Lista de hobbies:

Crea una variable con un array vacío, luego agrega tus hobbies utilizando el método correspondiente.

### Mis actividades:

Dada esta lista:

```js
let actividades = [
  "Leer",
  "Pintar",
  "Jugar videojuegos",
  "Hacer deporte",
  "Cocinar",
  "Ver películas",
  "Hacer senderismo",
  "Tocar un instrumento musical",
  "Aprender un nuevo idioma",
  "Viajar",
  "Fotografía",
  "Jardinería",
  "Programar",
  "Escribir",
]
```

sigue las siguientes instrucciones:

    1. Imprime la lista
    2. Imprime el primer elemento de la lista
    3. Elimina el ultimo elemento de la lista
    4. Agrega "Bailar" al final de la lista
    5. Elimina el primer elemento de la lista
    6. Agrega "Mi primera actividad" al inicio de la lista
    7. Imprime la cantidad de elemento de la lista
    8. Imprime el quinto elemento de la lista
    9. Imprime el ultimo elemento de la lista

> TO BE CONTINUE

## Objetos<a name="id3"></a>

### Información personal:

Crea una variable con un objeto que tenga las siguientes propiedades con tus datos:

- nombre
- apellido
- edad
- ciudad
- estadoCivil
- intereses
- ocupacion

luego imprime en consola en forma de tabla

### Corrección de información

Dado un objeto usuario:

```js
let usuario = {
  nombre: "María",
  apellido: "González",
  edad: 28,
  datosContacto: {
    ciudad: "New York",
    telefono: "+1 333 22 22 11",
  },
}
```

Realiza las siguientes instrucciones:

1. Imprime el nombre
2. Imprime la ciudad
3. agrega la propiedad "id" con el valor de: 12345
4. agrega la propiedad "zona" con el valor "C1-34" en los datos de contacto
5. Modifica el valor de la propiedad "edad" por el valor 30
6. Elimina la propiedad "apellido"
7. Crea una función que valide si existe la propiedad "intereses". En caso de no existir imprime "No existe la propiedad intereses". si existe la propiedad imprime su valor.
8. llama la función creada en el paso 7
9. Crea la propiedad intereses con el array ["Cocinar", "Estudiar", "Viajar"]
10. llama la función creada en el paso 7

> TO BE CONTINUE

## Ciclos<a name="id4"></a>

### Repetición

Utiliza un ciclo `for` para imprimir "Estoy practicando ciclos for" 10 veces.

### Sumatoria

Utiliza un ciclo `for` para sumar los números 1 al 100.

```js
//EJEMPLO
let sumatoria = 0

// Aquí escribes el ciclo ...

console.log(sumatoria) // Debe imprimir 5050"
```

### Tablas de multiplicar

Crea una función llamada "multiplicar" que reciba como parámetro un número y utiliza un ciclo `for` para imprimir la tabla de multiplicar del número dado como parámetro.

Cada impresión en consola debe seguir este formato: `[valor] x [numero] = [resultado]`

```js
//EJEMPLO RESULTADO

multiplicar(5)

/* 
Debe imprimir
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
10 x 5 = 50

*/
```

### Repetición #2

Utiliza un ciclo `while` para imprimir "Estoy practicando ciclos while" 10 veces.

### Calcular factorial

Crea una función que se llame "factorial" que reciba un número como parámetro y utilice un ciclo `while` que calcule su factorial. luego retorna el resultado.

> **Factorial**: Producto de todos los números naturales anteriores o iguales a él. Ejemplo: factorial de 5 se calcula multiplicando todos los números del 1 al 5, 1x2x3x4x5 = 120

```js
//EJEMPLO RESULTADO

let resultado = factorial(5)
console.log(resutado) // Debe imprimir 120

let resultado = factorial(9)
console.log(resultado) // Debe imprimir 362880
```

### Lista de la compra

Crea una variable con la siguiente lista ["Huevos", "Leche", "Carne"] y utiliza un ciclo `for of` para imprimir en consola cada elemento con el siguiente formato. "----> [item]"

```js
//EJEMPLO RESULTADO

/*
----> Huevos
----> Leche
----> Carne
*/
```

### Filtrar elementos

utiliza un ciclo `for of` para filtrar los números pares dado un array de números y almacena los resultados en un nuevo array. Imprime el resultado del nuevo array.

```js
//EJEMPLO

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosPares = []

// Aquí haces tu for in

console.log(numerosPares) // Debe imprimir [2,4,6,8,10]
```

## Métodos de los Arrays y Strings<a name="id5"></a>

### Espacios en Blanco:

Crea una función `removerEspacios` que reciba un string como parámetro y retorne el string sin espacios adicionales al principio y al final.

```js
let texto = "          Hola gente       "
let resultado = removerEspacios(texto)
console.log(resultado) // Imprime: Hola gente
```

### Longitud y Mayúsculas:

Crea una función llamada `convertirMayusculaMinuscula` que reciba como parámetro una frase y la imprima en mayúsculas si su longitud es mayor que 10 o en minúscula si su longitud es menor o igual que 10.

```js
convertirMayusculaMinuscula("Hola mundo") // Imprime: hola mundo
convertirMayusculaMinuscula("bienvenidos al curso") // Imprime: BIENVENIDOS AL CURSO
```

### Búsqueda y Reemplazo:

Crea una función llamada `reemplazar` que reciba como parámetros una frase, una palabra específica y una palabra con la cual reemplazar. Reemplaza todas las palabras por la nueva e imprime la nueva frase, en caso de no existir al menos una palabra dentro de la frase, imprimir: "No se encuentran palabras a reemplazar"

```js
reemplazar("esta es la frase", "frase", "oracion") // Imprime: esta es la oracion
reemplazar("esta es la frase", "nada", "oracion") // Imprime: No se encuentra palabras a reemplazar
```

### División y Concatenación:

Crea una función `concatenar` que reciba por parámetro una string de palabras separadas por comas, luego conviértelas en un array y únelas de nuevo en una sola cadena separadas por guiones y retorna el valor.

```js
let palabras = "manzana,banana,naranja,piña"
let resultado = concatenar(palabras)
console.log(resultado) // Imprime: manzana-banana-naranja-piña
```

### Reversión:

Crea una función `revertirString` que reciba un string como parámetro y lo retorne en forma inversa.

```js
let palabra = "reversion"
let resultado = revertirString(palabra)
console.log(resultado) // Imprime: noisrever
```

> [!TIP]
> Puedes separar un string o unir un array por sus caracteres si usas el método adecuado con comillas vacías: `""`.

### Iteración

Utiliza el método `forEach` para imprimir en consola los nombres de la siguiente lista de estudiantes

```js
let estudiantes = [
  {
    nombre: "Manuel",
    edad: 23,
  },
  {
    nombre: "Carolina",
    edad: 20,
  },
  {
    nombre: "Miguel",
    edad: 34,
  },
  {
    nombre: "Ana",
    edad: 34,
  },
  {
    nombre: "Felipe",
    edad: 18,
  },
]
```

### ¿Existe Maria?

Dado un array de nombres, busca si el nombre `maria` está presente en el array.

```js
let nombres = ["Ana", "Juan", "María", "Pedro"]
let existeMaria // acá va el código
console.log(existeMaria)
```

### Filtrado y Mapeo:

Dado el siguiente array de números, filtra los números pares y luego el con el array resultante multiplica cada número filtrado por 2.

Imprime en consola el array resultante.

```js
let numeros = [53, 89, 27, 12, 71, 45, 33, 96, 8, 62]

let numerosFiltrados // aca va el código
let numerosFiltradosPorDos // aca va el código

console.log(numerosFiltradosPorDos)
```

### MAYUSCULAS

Dado un array de nombres en minúsculas, imprime cada elemento en mayúsculas.

```js
let nombres = ["ana", "juan", "maría", "pedro"]
let nombresEnMayuscula // acá va el código
```

### Sumatoria 2.0

Dado un array de números, utiliza el método `reduce` para sumar todos los elementos.

```js
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 100, 200]

let suma // acá va el código
console.log(suma)
```
