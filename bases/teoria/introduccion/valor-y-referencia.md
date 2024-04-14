# Datos como valor y referencia

En javascript, cuando intentamos copiar el valor de una variable a otra o pasar una variable como argumento a una función podemos tener dos comportamientos dependiendo del tipo de dato que estemos intentando usar. Si intentamos copiar o pasar a una función un dato primitivo (strings, números, booleans etc) el dato se pasará como valor. En cambio si es un objeto o array se pasará como referencia.

Veamos a que se refiere estos conceptos:

## Paso por Valor:

Cuando pasas un dato como valor a otra variable o a una función, estás pasando una copia del valor original. Esto significa que si modificas la variable copia o ese valor dentro de la función, no afectará el valor original.

Ejemplo:

```javascript
function duplicar(numero) {
  numero = numero * 2
  return numero
}

let num = 5
console.log(duplicar(num)) // Output: 10
console.log(num) // Output: 5 (el valor original no cambia)
```

En este ejemplo, num sigue siendo 5 fuera de la función duplicar() a pesar de que dentro de la función se haya modificado.

## Paso por Referencia:

Cuando pasas un objeto por referencia a una función o a otra variable, estás pasando una referencia al objeto original. Esto significa que si modificas el objeto copiado o dentro de la función, esos cambios se reflejarán en el objeto original.

Ejemplo:

```javascript
function modificarPersona(persona) {
  persona.nombre = "Juan"
}

let estudiante = { nombre: "María", edad: 25 }
console.log(estudiante) // Output: { nombre: "María", edad: 25 }
modificarPersona(estudiante)
console.log(estudiante) // Output: { nombre: "Juan", edad: 25 }
```

Aquí, la función modificarPersona() cambia el nombre del objeto estudiante a "Juan", y esos cambios se reflejan fuera de la función.
