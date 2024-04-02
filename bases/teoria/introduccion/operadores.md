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

> TO BE CONTINUE...
