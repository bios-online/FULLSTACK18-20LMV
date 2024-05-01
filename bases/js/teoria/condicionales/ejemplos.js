// ------------------------- CONDICIONALES ------------------------------------

// if, else if, else

let edad = 11
let acceso = ''

// if simple
if(edad >= 18) {
  acceso = "ADMITIDO"
  console.log('Puedes entrar')
}

// if else completo
if(edad >= 18) {
  acceso = "ADMITIDO"
  console.log('Puedes entrar')
} else {
  acceso = "DENEGADO"
  console.log('No puede entrar')
}

// if con condición intermedia (else if)
if(edad >= 18) {
  acceso = "ADMITIDO"
  console.log('Puedes entrar')
} else if(edad >= 15 && edad <= 17){ // (true && true)
  acceso = "ADMITIDO"
  console.log('Debe entrar con un adulto')
} else {
  acceso = "DENEGADO"
  console.log('No puede entrar')
}

//--------------------------------------------------------------------------------

// OPERADOR TERNARIO

// Cuando la condición es simple y no necesitamos ejecutar mas código
// tan solo realizar una asignación
acceso = edad >= 18 ? 'ADMITIDO' : 'DENEGADO'

// !OJO No hacer nesting de operadores ternarios (no es legible y es mala práctica)

// acceso = edad >= 18 ? 'ADMITIDO' : edad >= 15 && edad <= 17 ? 'CONDICION' : 'DENEGADO'

//--------------------------------------------------------------------------------

// SWITCH
// Supongamos que debemos validar multiples escenarios con la sentencia if

const mes = 'Mayo'

if(mes === 'Enero'){
  console.log('hacer las tareas de enero')
} else if(mes === 'Febrero'){
    console.log('hacer las tareas de febrero')
} else if(mes === 'Marzo'){
      console.log('hacer las tareas de marzo')
}else if(mes === 'Abril'){
      console.log('hacer las tareas de abril')
}else if(mes === 'Mayo'){
      console.log('hacer las tareas de mayo')
}else if(mes === 'Junio'){
      console.log('hacer las tareas de junio')
}

// podemos escribir el código de manera mas legible con switch

switch( mes ){
  case 'Enero':
    console.log('hacer las tareas de enero')
    break             // cada sentencia case debe tener un break
  case 'Febrero':
    console.log('hacer las tareas de febrero')
    break
  case 'Marzo':
    console.log('hacer las tareas de marzo')
    break
  case 'Abril':
    console.log('hacer las tareas de abril')
    break
  default:
    console.log('No aplica')
}

//--------------------------------------------------------------------------------
