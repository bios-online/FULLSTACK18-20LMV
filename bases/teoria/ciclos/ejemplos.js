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

// ------------------------ FOR OF ----------------------------------

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

  // Arrays e *ITERADORES*
  for(let profesor of profesores){
    let edad = profesor.edad
    console.log(edad)
  }
  
