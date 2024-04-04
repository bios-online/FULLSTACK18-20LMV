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
  
  // funciona para todo en general
  for(let i = 0; i < estudiantes.length; i++){
    let estudiante = estudiantes[i]
    let nombre = estudiante.nombre
     
     console.log(nombre)
  }
  
  // Arrays y *ITERADORES*
  for(let estudiante of estudiantes){
    let edad = estudiante.edad
    console.log(edad)
  }
  
  // ForEach