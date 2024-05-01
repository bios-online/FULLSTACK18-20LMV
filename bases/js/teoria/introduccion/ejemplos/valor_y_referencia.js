// Para valores primitivos

let value = "hola"
let copia = value

value = "adios"
console.log("original:", value)
console.log("copia:", copia)

// Para objetos y arrays

let valueObj = {
  nombre: "julian",
}
let copiaObj = valueObj

valueObj.nombre = "Andres" // Modificamos una propiedad

console.log("original:", valueObj)
console.log("copia:", copiaObj) // también se modificó la copia

// Tambien aplica para objetos y arrays que se pasen como parametro a una función

function saludar(parametro) {
  parametro.push(20)
  console.log("prametro dentro de la función", parametro)
}

let arreglo = [1, 2, 3, 4, 5]
saludar(arreglo)
console.log("arreglo fuera de la función", arreglo)

// Ejemplo intentando copiar un array
let arregloOriginal = [1, 2, 3]

let arregloCopia = arregloOriginal
arregloOriginal.push("30")

console.log("original:", arregloOriginal)
console.log("copia:", arregloCopia)

// Aunque los arrays tengan contenido igual, para javascript son completamente distintos
let otroArray = [1, 2, 3]
console.log(otroArray === arregloOriginal)
