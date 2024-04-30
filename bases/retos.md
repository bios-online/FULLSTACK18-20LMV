# Retos JavaScript

## Sistema de Reservas para un Restaurante

Se necesita desarrollar una pequeña aplicación que gestione las reservas de un restaurante.

La aplicación debe ser capaz de `agregar` reservas, `cancelar` reservas, y
`calcular la ocupación` del restaurante en un día específico mediante un menú interactivo.

### Requerimientos:

- **Agregar Reservas:** Guardar la fecha, hora, nombre del cliente, y número de personas para cada reserva. ejemplo:

```js
let cliente = {
  fecha: "2024-05-01",
  hora: "19:00",
  nombre: "Juan Perez",
  personas: 4,
}
```

- **Cancelar Reservas:** Permitir eliminar una reserva existente buscando por el nombre del cliente y la fecha.
- **Verificar Ocupación:** Calcular y mostrar cuántas personas están reservadas para cualquier fecha específica.
- **RETO ADICIONAL: Actualizar Reserva:** Permitir modificar una reserva existente.

> [!TIP]
> Se pueden basar en el ejercicio del TodoList

## Sistema de gestión de calificaciones

Se nos ha pedido crear un programa que nos permita administrar mediante un menu interactivo las calificaciones de estudiantes en las asignaturas de:

- matemática
- ciencias
- arte
- deporte

### Validaciones

> Cada asignatura tendrá máximo 5 notas (No se puede agregar mas de 5).

> Una nota puede tener el valor de 0 como mínimo y 5 como máximo.

Cada estudiante debe tener:

- nombre
- edad
- identificación
- asignaturas

Cada asignatura tendrá una lista que guardará las calificaciones del estudiante

### Requerimientos

- **Crear estudiantes:** Agregar un estudiante al sistema

> Debes pensar en como crear el objeto que tendrá toda la información de un estudiante.

- **Agregar notas:** Dado una identificación de estudiante y una asignatura agregar una nota a su asignatura correspondiente (recordar hacer las validaciones)

Si la asignatura ya tiene las cinco notas y se intenta agregar mas, imprimir

```js
console.log(`No se pueden agregar mas notas a la asignatura: ${asignatura}`)
```

Si la nota es un valor que no está en el rango de 0 a 5, imprimir:

```js
console.log("Nota no válida")
```

- **Realizar promedio:** Dado una identificación de estudiante y una asignatura calcular la nota promedio de un estudiante en la asignatura dada (sumando la cantidad de notas que hay al momento y dividiendo entre 5)

En caso de que el promedio sea menor a 3 imprimir:

```js
console.log(
  `¡Alerta! tu nota actual es de ${nota}. Vas perdiendo la asignatura`
)
```

si es mayor o igual a 3 imprimir:

```js
console.log(
  `¡Vas muy bien! tu nota actual es de ${nota}. estas ganando la asignatura`
)
```

- **Nota final**: Dado una identificación de estudiante y una asignatura validar si el estudiante tiene las 5 notas de la asignatura y realizar un promedio de ellas.

Si no tiene las 5 notas imprimir:

```js
console.log(`Aun te faltan notas de la asignatura ${asignatura} por obtener`)
```

Si la nota es menor que 3 imprimir

```js
console.log(`Tu nota es: ${nota}. Perdiste la asignatura ${asignatura}`)
```

si es Mayor o igual a 3 imprimir:

```js
console.log(`Tu nota es: ${nota}. ¡Ganaste la asignatura ${asignatura}!`)
```
