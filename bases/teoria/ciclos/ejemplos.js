// ------------------------ FOR ----------------------------------

for (let count = 0; count < 3; count++) {
  console.log("Miau") // se imprimirá 3 veces
}

// Imprimir solo los números pares del 1 al 20

for (let i = 1; i <= 20; i++) {
  if(i % 2 === 0){
    console.log(i)
  }
}

// Imprimir los nombres de una lista de estudiantes
let estudiantes = [
  {
    nombre: 'julian',
    edad: 25
  },
  {
    nombre: 'andres',
    edad: 26
  },
  {
    nombre: 'diana',
    edad: 14
  },
  {
    nombre: 'maria',
    edad: 20
  },
  {
    nombre: 'felipe',
    edad: 30
  },
]

for(let i = 0; i < estudiantes.length; i++){
  let estudiante = estudiantes[i]   // accedemos al objeto en la posición que tenga la variable i
  let nombre = estudiante.nombre    // accedemos al nombre del objeto
   
   console.log(nombre)
}

// Puedo anidar ciclos, solo debo cuidar de usar otro nombre con la variable iteradora

// Dibujar un cubo
console.log('Cubo')
for(let i = 0; i < 5; i++){
  let linea = ''
  for(let j = 0; j < 5; j++){
    linea += '# '
  }
  console.log(linea)
}

console.log('Escalera')
// Dibujar una escalera
for(let i = 0; i < 5; i++){
  let linea = ''
  for(let j = 0; j < i+1; j++){
    linea += '# '
  }
  console.log(linea)
}

for(let i = 0; i < 10; i++){
  if(i%2 === 0){
      continue         //si se ejecuta la sentencia "continue" el ciclo no continuará
  }                    // ejecutando el codigo que contiene el for y pasará a la otra iteración
  console.log(i)
  // mas codigo
  // mas codigo
  // mas codigo
  // mas codigo
  // mas codigo
}

// ------------------------ WHILE Y DO WHILE ----------------------------------


let i = 7
while(i !== 0){
    console.log('iterando', i)
    i--                           //!ES IMPORTANTE ASEGURARNOS QUE EL CICLO EN ALGUN MOMENTO TERMINE
}

// Ejecutará por lo menos una sola vez el código interno
do{
    console.log('iterando')
} while(false)              // Hemos quemado el valor de false adrede

// Usando ciclo while con arrays
let personas = ["maria", "carmen", "jose"]
let k = 0
while(personas[k] !== 'maria'){
   console.log(personas[k])
   k++
}

// Podemos terminar la ejecución de un ciclo con la sentencia break
let contador = 0
while(true){
    if(contador === 50){
        break              //En este caso, el programa terminará al llegar el contador a 50
    }
    console.log(contador)
    contador++
}

// ------------------------ FOR OF ----------------------------------

let numeros = [1,2,3,4,5,6,7,8,9,10]

// Itera por cada elemento en la lista
for(numero of numeros){
   console.log(numero)
}


let profesores = [
  {
    nombre: 'Juancho',
    edad: 25
  },
  {
    nombre: 'Mariana',
    edad: 30
  },
]

  for(let profesor of profesores){
    let edad = profesor.edad
    console.log(edad)
  }


// ------------------------ FOR IN ----------------------------------


let objeto = {
    edad: 20,
    nombre: 'daniel',
    apellido: 'serna'
}

// Puedo interar cada "key" de un objeto
for(let atributo in objeto){
    console.log(atributo + ':', objeto[atributo])
}



  
