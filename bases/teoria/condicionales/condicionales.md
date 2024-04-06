## Condicionales

## Contenido

- [If, else if, else](#id1)
- [Valores Truthy y Falsy](#id2)
- [Operador ternario](#id3)
- [Switch](#id4)

---

Podemos valernos de las operaciones con resultados booleanos para crear condiciones que nos permitan controlar el flujo de nuestro programa.

### If, else if, else<a name="id1"></a>

```js
if (condición) {
  // Código que se ejecuta si la condición es verdadera
} else {
  // Código que se ejecuta si la condición es falsa
}
```

Podemos también omitir la condición `else` en caso de no necesitarla:

```js
if (condición) {
  // Código que se ejecuta si la condición es verdadera
}
```

En caso de necesitar hacer una nueva validación antes de llegar al `else` podemos realizar una nueva validación en el flujo con `else if`:

```js
if (condición) {

  // Código que se ejecuta si la condición es verdadera

} else if(otra condición) {

  // Código que se ejecuta si la primera condición es falsa y la nueva condición es verdadera

} else {

  // Código que se ejecuta si la segunda condición es falsa

}
```

### Valores Truthy y Falsy<a name="id2"></a>

Son valores que son considerados `true` o `false` cuando son evaluados en un contexto booleano.

¿Que pasaría si intento evaluar valores diferentes al tipo de dato boolean en una sentencia if?

```js
if ("hola") {
  // ¿Entraría al if?
}
```

Todos los valores son **"truthy"** a no ser que se consideren **"falsy"**. Los valores falsy son:

- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

```js
if (0) {
  console.log("Esto no se imprimirá porque 0 es falsy")
}

if ("Hola") {
  console.log("Esto se imprimirá porque 'Hola' es truthy")
}
```

### Operador ternario<a name="id3"></a>

Sirve como una forma abreviada de escribir instrucciones condicionales más simples y concisas:

```
condición ? expresiónSiVerdadero : expresiónSiFalso
```

Generalmente se usa para realizar una asignación de un valor a una variable de forma condicional

```js
let edad = 20
let esMayor = edad > 18 ? "MAYOR DE EDAD" : "MENOR DE EDAD"
```

### Switch<a name="id4"></a>

Nos permite evaluar una expresión y ejecutar diferentes bloques de código dependiendo del valor de esa expresión:

```js
switch (expresion) {
  case valor1:
    // Código a ejecutar si la expresion es igual a valor1
    break
  case valor2:
    // Código a ejecutar si la expresion es igual a valor2
    break
  // Otros casos...
  default:
    // Código a ejecutar si la expresion no coincide con ningún valor
    break
}
```

> TO BE CONTINUE...
