# Introducción a Javascript 💛

## ¿Que es Javascript?

Es un lenguaje de programación creado para **"dar vida a las páginas web"**.

Inicialmente fue creado como un lenguaje solamente para el navegador, pero ahora es usado también en muchos otros entornos.

## Variables:

La mayoría de veces necesitamos trabajar con información cuando estamos programando ya sea que necesitemos usar el nombre de un usuario, su edad, etc. Las variables no son mas que una _"caja con un nombre"_ para guardar datos.

Para crear o **declarar** una variable utilizamos la siguiente sintaxis:

`var nombre`

luego para decirle a la variable que es lo que queremos guardar o **inicializar** utilizamos algo llamado el **operador de asignación =** de la siguiente forma:

`nombre = dato`

también se puede realizar todo en una sola linea:

`var nombre = dato`

---

El nombre de las variables no puede ser igual a alguna de las **Palabras reservadas** que tiene el lenguaje, como por ejemplo: `var` `null` `false` ya que javascript se vale de ellas para funcionar.

Las variables pueden tener letras, número y algunos caracteres especiales (`&`, `_`) y no pueden comenzar con número. Aquí algunos ejemplos:

```
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

> TO BE CONTINUE...

## Operadores

### Numéricos

| Nombre           | Símbolo | Ejemplo  | Resultado |
| ---------------- | ------- | -------- | --------- |
| Suma             | +       | 3 + 2    | 5         |
| Resta            | -       | 5 - 1    | 4         |
| Multiplicación   | \*      | 10 \* 2  | 20        |
| División         | /       | 5 / 2    | 2.5       |
| Exponenciación   | \*\*    | 2 \*\* 8 | 256       |
| Módulo o Residuo | %       | 50 % 2   | 0         |

las operaciones matemáticas se evalúan siguiendo ciertas reglas de precedencia y asociatividad. Aquí está el orden de las operaciones matemáticas en JavaScript, de mayor a menor precedencia:

1.  **Paréntesis** `()`: Las expresiones dentro de paréntesis tienen la mayor precedencia y se evalúan primero.

2.  **Exponentes** `**`: La operación de exponente tiene la segunda mayor precedencia.

3.  **Multiplicación** `*`, **División** `/`, y **Módulo** `%`: Estas operaciones tienen la misma precedencia y se evalúan de izquierda a derecha.

4.  **Suma** `+` y **Resta** `-`: Estas operaciones también tienen la misma precedencia y se evalúan de izquierda a derecha.

### Numéricos de asignación

Nos permite operar y asignar el valor al mismo tiempo. Supongamos que tenemos la variable: `let numero = 10`:

| Nombre         | Símbolo | Ejemplo      | valor de la variable _numero_ |
| -------------- | ------- | ------------ | ----------------------------- |
| Suma unitaria  | ++      | numero++     | 11                            |
| Resta unitaria | --      | numero--     | 10                            |
| Suma           | +=      | numero += 3  | 13                            |
| Resta          | -=      | numero -= 5  | 8                             |
| Multiplicación | \*=     | numero \*= 2 | 16                            |
| División       | /=      | numero /= 4  | 4                             |
| División       | %=      | numero %= 2  | 0                             |

### Booleanos

**Operador de negación lógica** (`!`): Este operador niega un valor booleano.

| Ejemplo | Resultado |
| ------- | --------- |
| !false  | true      |
| !true   | false     |

**Operador de AND lógico** (`&&`): Este operador devuelve true si ambos operandos son true, y false en cualquier otro caso.

| Ejemplo        | Resultado |
| -------------- | --------- |
| true && true   | true      |
| true && false  | false     |
| false && true  | false     |
| false && false | false     |

**Operador de OR lógico** (`||`): Este operador devuelve true si al menos uno de los operandos es true, y false si ambos operandos son false.

| Ejemplo          | Resultado |
| ---------------- | --------- |
| true \|\| true   | true      |
| true \|\| false  | true      |
| false \|\| true  | true      |
| false \|\| false | false     |

### Comparación

| Nombre               | Símbolo | Ejemplo          | Resultado |
| -------------------- | ------- | ---------------- | --------- |
| Mayor que            | >       | 2 > 3            | false     |
| Menor que            | <       | 5 < 10           | true      |
| Mayor o igual que    | >=      | 2 >= 2           | true      |
| Menor o igual que    | <=      | 1 <= 0           | false     |
| Igualdad             | ==      | "Hola" == "hola" | false     |
| Desigualdad          | !=      | 2 != undefined   | true      |
| Igualdad estricta    | ===     | "2" === 2        | false     |
| Desigualdad estricta | !==     | 0 !== false      | true      |

## Condicionales

Podemos valernos de las operaciones con resultados booleanos para crear condiciones que nos permitan controlar el flujo de nuestro programa.

### if, else if, else:

```
if (condición) {

  // Código que se ejecuta si la condición es verdadera

} else {

  // Código que se ejecuta si la condición es falsa

}
```

Podemos también omitir la condición `else` en caso de no necesitarla:

```
if (condición) {

  // Código que se ejecuta si la condición es verdadera

}
```

En caso de necesitar hacer una nueva validación antes de llegar al `else` podemos realizar una nueva validación en el flujo con `else if`:

```
if (condición) {

  // Código que se ejecuta si la condición es verdadera

} else if(otra condición) {

  // Código que se ejecuta si la primera condición es falsa y la nueva condición es verdadera

} else {

  // Código que se ejecuta si la segunda condición es falsa

}
```

### Operador ternario:

Sirve como una forma abreviada de escribir instrucciones condicionales más simples y concisas:

```
condición ? expresiónSiVerdadero : expresiónSiFalso
```

Generalmente se usa para realizar una asignación de un valor a una variable de forma condicional

```
let edad = 20
let esMayor = edad > 18 ? "MAYOR DE EDAD" : "MENOR DE EDAD"
```

> TO BE CONTINUE...
