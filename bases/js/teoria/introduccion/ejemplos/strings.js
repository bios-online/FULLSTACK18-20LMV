// Métodos de los strings

let miString = "hola mundo"
let miStringMayus = "GOOD BYE"

// Convertir a mayúsculas
console.log(miString.toLocaleUpperCase())

// Convertir a minúsculas
console.log(miStringMayus.toLocaleLowerCase())

// Saber si el string contiene un substring
console.log(miString.includes("z"))

// Saber si el string comienza con un substring
console.log(miString.startsWith("mundo"))

// Saber si el string termina con un substring
console.log(miString.endsWith(" "))

// Quitar espacios an inicio y final del string
let stringConEspacios = "             tengo espacios              "
console.log(stringConEspacios)
console.log(stringConEspacios.trim())

// Obtener una fracción del string
console.log(miStringMayus.slice(5))

// Obtener un caracter del string por su posición
console.log(miStringMayus[0])

// Dividir el string por un caracter y convertirlo en array
let nombresStr = "ana-manuela-javier-carlos"
let arrNombres = nombresStr.split("-")
console.log(arrNombres)

// Repetir el string n veces
let nombre = "Julian Sucerquia"
let separador = "*"

console.log(separador.repeat(nombre.length))

// Reemplazar un substring con otro
console.log(nombre.replace("u", "*")) // Solo reemplaza el primero que encuentre
console.log(nombre.replaceAll("u", "*"))

let objIdentificadores = {
  "+57": "Colombia",
  "+598": "Uruguay",
}

let telefonoColombia = "+57 3001123456"
let telefonoUruguay = "+598 3001123456"

console.log(telefonoColombia.replaceAll("+57", objIdentificadores["+57"]))
console.log(telefonoUruguay.replaceAll("+598", objIdentificadores["+598"]))

// Podemos iterara un string

for (char of nombre) {
  console.log(char)
}

let str = "hola" // los strings son inmutables
console.log(str)
str[1] = "x" // no podemos modificarlo directamente
console.log(str)
