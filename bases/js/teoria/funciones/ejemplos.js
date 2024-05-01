// ------------------------- FUNCIONES ------------------------------------

function saludar() {
    console.log('Hola mundo')
}

function cuadratica(numero){
    // La función tomara el valor dado al invocarla y la usará
    // en el código interno

    let resultado = numero ** 2
    console.log(resultado)
}

cuadratica(5)  // Invocando la función con un valor de 5
// Output: 25


// ------------------------------------------------------------------------


// funciones con return

function cuadratica2(numero){
  // scope local
    let resultado = numero ** 2
    return resultado

    // el código escrito luego del return no se ejecutará
}

let valor = cuadratica2(20)   // se ejecuta la función y asigna el resultado a la variable
console.log(valor)            // Output: 400


// ------------------------------------------------------------------------


// Scope

let saludoIncompleto = "¡Hola! Bienvenido "  // variable en alcance "scope" global

function saludar(nombre) {
    // variable en alcance "scope" local
    let resultado = saludoIncompleto + nombre
    console.log(resultado)
}

saludar("Andres")               // Output:  ¡Hola! Bienvenido Andres
console.log(resultado)          // Nos dará un error. resultado solo existe dentro de la función saludar