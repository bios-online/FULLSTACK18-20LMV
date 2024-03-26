// ------------------------- VARIABLES ------------------------------------

var variable1 = "dato"

// la declaración con var está obsoleta ya que permite cosas como
// declarar variables con el mismo nombre

var hola = 'hola mundo'
var hola = 'adios'

console.log(hola)

// En desarrollos modernos usamos let y const

// LET

let nombre
nombre = "Julian"

let saludo = "Hola"
saludo = "Hola bios" // Puede cambiar su valor

// CONST

const despedida = "Adios" // Debe ser inicializada al declararse
despedida = "Adios BIOS"  // No se puede cambiar su valor [TypeError: Assignment to constant variable.]

// ------------------------  OPERADORES ---------------------------------

// OPERADORES NUMÉRICOS

console.log(2 + 2)   // Suma: 4
console.log(2 - 2)   // Resta: 0
console.log(5 * 5)   // Multiplicación: 25
console.log(10 / 2)  // División: 5

console.log(10 / 0)  // División por cero: Infinite
console.log(-10 / 0) // División por cero: -Infinite

console.log(2 ** 5)  // Exponenciación: 32
console.log(10 % 2)  // Módulo (Residuo de la división): 0

// !CUIDADO CON OPERACIONES CON TIPOS DE DATO DIFERENTE

// Si se opera con tipos de datos diferentes podemos obtener resultados
// inesperados

console.log(10 / "hola") // NaN

//--------------------------------------------------------------------------------

// OPERADORES NUMÉRICOS DE ASIGNACIÓN

// También podemos operar y asignar a una variable al mismo tiempo.
// supongamos que tenemos la variable numero con un valor de 10

let numero = 10     // Valor original: 10

// Si queremos sumar 1 a la variable numero podemos hacerlo de dos formas:

numero = numero + 1 // Versión larga:  10 + 1: 11
numero++            // Versión corta:  11 + 1: 12

console.log(numero)

// De la misma manera si queremos restar 1 a la variable

numero = numero - 1 // Versión larga:  12 - 1: 11
numero--            // Versión corta:  11 - 1: 10

// La variable numero quedó con el mismo valor de 10, ya que sumamos 1
// 2 veces y restamos 1 dos veces

console.log(numero)

// También podemos operar y asignar mas de una unidad:

// Sumar
numero = numero + 5 // numero = 10 + 5: numero = 15 
numero += 5         // numero = 15 + 5: numero = 20

// Restar
numero = numero - 5 // numero = 20 - 5: numero = 15
numero -= 5         // numero = 15 - 5: numero = 10

// Multiplicar
numero = numero * 2 // numero = 10 * 2: numero = 20
numero *= 2         // numero = 20 * 2: numero = 40

// Dividir
numero = numero / 2 // numero = 40 / 2: numero = 20
numero /= 2         // numero = 20 / 2: numero = 10

// Módulo
numero = numero % 2 // numero = 10 % 2: numero = 0
numero %= 2         // numero = 0 % 2:  numero = 0

// Las operaciones numéricas tienen un orden de precedencia y asociatividad

let resultado = 2 + 3 * 4; // Primero se evalúa 3 * 4 y luego se suma 2, resultado = 14
resultado = (2 + 3) * 4; // Se suman 2 y 3 primero, y luego se multiplica por 4, resultado = 20
resultado = 10 / 2 * 3; // Primero se divide 10 por 2 y luego se multiplica por 3, resultado = 15
resultado = 10 % 3 + 2; // Primero se calcula el módulo de 10 % 3 y luego se suma 2, resultado = 3
resultado = 2 ** 3 ** 2; // Primero se evalúa 3 ** 2 y luego 2 ** 9, resultado = 512

//--------------------------------------------------------------------------------

// OPERADORES DE STRINGS

// Podemos usar el símbolo + para concatenar o juntar dos strings
let cadena = "hola" + " que tal"


// !CUIDADO CON OPERACIONES CON TIPOS DE DATO DIFERENTE
cadena = "Hola" + false // "Holafalse"
cadena = "2" + true     // "2true"
cadena = 2 + "3"        // "23"

//--------------------------------------------------------------------------------

// OPERADORES BOOLEANOS

let tengoCasa = false
let tengoCarro = true

// Negación
console.log(!tengoCasa) // true

// AND
console.log(tengoCasa && tengoCarro) // false

// OR
console.log(tengoCasa || tengoCarro) // true

//--------------------------------------------------------------------------------

// OPERADORES DE COMPARACIÓN

// Mayor que:
console.log(2 > 2)   // ¿2 es mayor que 2?: false

// Mayor o igual que:
console.log(3 >= 2)   // ¿3 es mayor o igual que 2?: true

// Menor que:
console.log(1 < 2)   // ¿1 es menor que 2?: true

// Menor o igual que:
console.log(3 <= 2)   // ¿3 es menor o igual que 2?: false

// Desigualdad
console.log(3 != 2)   // ¿3 es diferente que 2?: true

// Igualdad
console.log("hola" == "hola")   // ¿"hola" es igual que "hola"?: true

// Debido al funcionamiento de javascript estos dos operadores de igualdad y desigualdad
// tienen comportamientos inesperados al hacer comparaciones con otros tipos de datos:

console.log("2" == 2)   // ¿El string "2" es igual que el número 2?: true
console.log(false == 0)   // ¿false es igual que el número 0?: true

// Esto se debe a que se está comparando solo el valor del dato, es decir javascript convierte
// los valores para dar un resultado. En este caso compara el valor 2 y no su tipo.

// Para javascript el número 0 es tomado como falso por lo que la comparación que se realiza es
// false == false

// Las versiones modernas de javascript nos proveen un operador adicional que nos evita tener
// este tipo de comportamientos:

// Igualdad estricta
console.log("2" === 2)   // ¿El string "2" es estrictamente igual que el número 2?: false
console.log(false === 0)   // ¿false es estrictamente igual que el número 0?: false

// Desigualdad estricta
console.log("2" !== 2)   // ¿El string "2" es estrictamente diferente que el número 2?: true
console.log(false !== 0)   // ¿false es estrictamente diferente que el número 0?: true


// ------------------------- CONDICIONALES ------------------------------------

// if, else if, else

let edad = 11
let acceso = ''

// if simple
if(edad >= 18) {
  acceso = "ADMITIDO"
  console.log('Puedes entrar')
}

// if else completo
if(edad >= 18) {
  acceso = "ADMITIDO"
  console.log('Puedes entrar')
} else {
  acceso = "DENEGADO"
  console.log('No puede entrar')
}

// if con condición intermedia (else if)
if(edad >= 18) {
  acceso = "ADMITIDO"
  console.log('Puedes entrar')
} else if(edad >= 15 && edad <= 17){ // (true && true)
  acceso = "ADMITIDO"
  console.log('Debe entrar con un adulto')
} else {
  acceso = "DENEGADO"
  console.log('No puede entrar')
}

//--------------------------------------------------------------------------------

// OPERADOR TERNARIO

// Cuando la condición es simple y no necesitamos ejecutar mas código
// tan solo realizar una asignación
acceso = edad >= 18 ? 'ADMITIDO' : 'DENEGADO'

// !OJO No hacer nesting de operadores ternarios (no es legible y es mala práctica)

// acceso = edad >= 18 ? 'ADMITIDO' : edad >= 15 && edad <= 17 ? 'CONDICION' : 'DENEGADO'

//--------------------------------------------------------------------------------
