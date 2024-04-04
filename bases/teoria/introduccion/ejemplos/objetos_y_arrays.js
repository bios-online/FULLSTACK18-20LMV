// ------------------------- OBJETOS ------------------------------------

// Objeto vacío
let misDatos = {}

// Objeto con propiedades
let misDatos2 = {
    edad: 25,
    "estadoCivil": "soltero"
}

console.table(misDatos2)

// Inserción de propiedades
let atributo = "apellidos"

misDatos2.nombre = "Julian Andres"
misDatos2[atributo] = "Sucerquia Uribe"
console.table(misDatos2)

// Edición de propiedades
misDatos2.nombre = "Carlos Felipe"
console.table(misDatos2)

// Eliminación de una propiedad
delete misDatos2.nombre
console.table(misDatos2)

// Validación de una propiedad

if(misDatos2.nombre){                   // dado que no existe la propiedad el valor que se evalúa es undefined
    console.log('existe el nombre')     // sabemos que undefined es un valor falsy, por eso no entra al if
}

// Supongamos este escenario
misDatos2.hijos = 0

if(misDatos2.hijos){                             // aunque exista la propiedad hijos, su valor es el numero cero.
    console.log('existe la propiedad hijos')     // el cero es un valor falsy, por lo que no entra al if
}                                                // lo cual es un error de lógica

// Para este caso utilizamos el operador "in"

console.log('nombre' in misDatos2)      // false
console.log('hijos' in misDatos2)       // true

if("hijos" in misDatos2){                         // Ahora si entra al if puesto que la condición es verdadera 
    console.log('existe la propiedad hijos')     
}                                                

// Podemos agregar todo tipo de dato a un objeto

let datosPersonales = {
    nombre: "Julián",
    edad: 20,
    saludar: function(){
        console.log('mi nombre es Julián')             // Podemos asignar una función anónima
    },
    direccion: {                                       // Podemos anidar otros objetos
        calle: "falsa",
        numero: 123,
        barrio: "poblado",
        ciudad: {
            nombre: "Medellín",
            zona: 4
        }
    },
    hobbies: ['comer', 'bailar', 'cocinar']             // Podemos asignar Arrays
  
}

// ¿como usamos la función o "método" dentro de un objeto?

let consola = {
  imprimir: function(valor){
    console.error(valor)
  }
}

consola.imprimir("mi función imprimir propia")   // Accedemos al nombre de la propiedad y la invocamos
console.log("función de javascript")

// ¿como accedemos a un objeto anidado?

console.log("Operador punto:",datosPersonales.direccion.barrio)         // usamos el operador punto 
console.log("Notación corchete:", datosPersonales["direccion"]["barrio"])   // o la notación corchetes
console.log("Ambas:", datosPersonales["direccion"].barrio)      // ambas se pueden combinar

//Encadenamiendo opcional - opcional chaining (?.)

// console.log(datosPersonales.ciudad.barrio)    // Esto nos generará un error
console.log(datosPersonales.ciudad?.avenida)     // al usar ?. preguntamos antes de intentar acceder a una propiedad
                                                 

// ------------------------------------- ARRAYS -----------------------------------------------------

// Array vacío
let hobbies2 = []

// Array con elementos iniciales
let hobbies = ['Videojuegos', 'Anime']
console.log(hobbies)


// Acceder a un elemento
console.log(hobbies[0])     // Accedemos al primer elemento
console.log(hobbies[1])     // Accedemos al segundo elemento
console.log(hobbies[34])    // si no existe la posición nos devuelve undefined

  
// Agregar al final de la lista
hobbies.push('Cocinar')
console.log(hobbies)

// Agregar al inicio de la lista
hobbies.unshift('Música')
console.log(hobbies)
  
// Eliminar y obtener el primer elemento de la lista
let primerElemento = hobbies.shift()
console.log(primerElemento)
console.log(hobbies)

// Eliminar y obtener el ultimo elemento de la lista
let ultimoElemento = hobbies.pop()
console.log(ultimoElemento)
console.log(hobbies)

//----------------------------------------------------------------------------

// Los Arrays tienen propiedades, porque son objetos especiales ⊙△⊙
console.log(typeof hobbies)

// obtener la cantidad de elementos de la lista
console.log(hobbies.length)
  
// !NO LO HAGAN
// hobbies.length = 1    // Editar el tamaño de la lista provocará que esta pierda elementos

//------------------------------------------------------------------------------

// podemos conocer el ultimo elemento de la lista sin eliminarlo de dos formas

console.log(hobbies[hobbies.length - 1])   // Antigua - Estándar
console.log(hobbies.at(-1))              // Moderna
  
// Los Arrays reciben cualquier tipo de dato y pueden ser una mezcla

const checklist = [
    {
      nombre: 'hacer la compra',
      check: false
    },
    {
      nombre: 'limpiar',
      check: false
    },
]
console.log(checklist)

const random = [1, "hola", false, {}, [4], null]
console.log(random)
