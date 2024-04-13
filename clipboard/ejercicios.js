// function getInput(text) {
//   let result = prompt(text)
//   return result
// }

// function addItem(list, title) {
//   list.push({
//     id: list.length + 1,
//     title: title,
//     isCheck: false,
//   })
//   console.log("se agregó la tarea: " + title)
// }

// function printList(list) {
//   if (list.length === 0) {
//     console.log("No hay elementos en la lista")
//     return
//   }
//   console.log("-".repeat(20))
//   for (item of list) {
//     let status = item.isCheck ? "Completado" : "Sin completar"
//     console.log("|" + item.id + ": " + item.title + " [ " + status + " ]")
//   }
//   console.log("-".repeat(20))
// }

// function findItemById(list, id) {
//   return list.findIndex((item) => item.id === id)
// }

// function deleteItem(list, id) {
//   let idx = findItemById(list, id)
//   if (idx < 0) {
//     console.log("No existe un elemento en la lista con este id")
//     return
//   }
//   list.splice(idx, 1)
// }

// function checkItem(list, id) {
//   let idx = findItemById(list, id)
//   if (idx < 0) {
//     console.log("No existe un elemento en la lista con este id")
//     return
//   }
//   list[idx].isCheck = true
// }

// function filterUnfinishedTasks(list) {
//   let unfinishedTasks = list.filter((item) => !item.isCheck)
//   console.log("-------- Tareas sin terminar --------")
//   printList(unfinishedTasks)
// }

// function main() {
//   let todoList = []
//   let menu
//   do {
//     menu = getInput(
//       "Ingrese: \n 1. Para agregar un elemento, \n 2. Para eliminar un elemento \n 3 para marcar como completado un elemento \n 4. Para consultar la lista \n 5. Para listar las tareas pendientes \n 0. Para salir"
//     )
//     switch (menu) {
//       case "1":
//         let item = getInput("Ingrese el nombre de la tarea")
//         addItem(todoList, item)
//         break
//       case "2":
//         let deleteItemId = Number(
//           getInput("Ingrese el id de la tarea a eliminar")
//         )
//         deleteItem(todoList, deleteItemId)
//         break
//       case "3":
//         let checkItemId = Number(
//           getInput("Ingrese el id de la tarea a completar")
//         )
//         checkItem(todoList, checkItemId)
//         break
//       case "4":
//         printList(todoList)
//         break
//       case "5":
//         filterUnfinishedTasks(todoList)
//         break
//     }
//   } while (menu !== "0")
// }

// main()
// copias superficiales

let variable = [1, 2, 3]
// let variable2 = variable
// let variable2 = variable.slice()
// let variable2 = [].concat(variable)

// spread operator
let variable2 = [...variable]

variable2.push(4)
console.log(variable, variable2)

let objeto = {
  nombre: "julian",
}

let objeto2 = { ...objeto }

objeto2.apellido = "sucerquia"
console.log(objeto, objeto2)

let persona = {
  nombre: "julian",
  infoContacto: {
    telefono: "123445",
    ciudad: "medellin",
  },
}

// Copia profunda
// let persona2 = { ...persona }
let persona2 = structuredClone(persona)

persona2.infoContacto.ciudad = "Bogotá"

console.log(persona, persona2)

let arr = [
  [1, 2, 3],
  [4, 5, 6],
]
let arr2 = structuredClone(arr)

arr2[0][0] = 50
console.log(arr2[0][2])
console.log(arr, arr2)

// spread operator
let frutas2 = ["manzana", "pera"]
let frutas = ["banano", ...frutas2, "piña"]

console.log(frutas)

let propiedadesNuevas = {
  apellido: "uribe",
  edad: 24,
}

let ciudadano = {
  nombre: "andres",
  ...propiedadesNuevas,
}

console.log(ciudadano)

// rest operator

function sumar(param1, param2, param3, param4) {
  console.log(param1, param2, param3, param4)
}

function operacionAritmetica(tipoOperacion, ...params) {
  switch (tipoOperacion) {
    case "sumar":
      let suma = params.reduce((acc, actual) => acc + actual, 0)
      console.log(suma)
      break
    case "restar":
      let resta = params.reduce((acc, actual) => acc - actual, 0)
      console.log(resta)
      break
  }
}

sumar(1, 3, 4, 5)
operacionAritmetica("sumar", 1, 3, 4, 5)
operacionAritmetica("restar", 1, 3, 4, 5)

//destructuring

let fecha = [12, 4, 2024, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// let dia = fecha[0]
// let mes = fecha[1]
// let anno = fecha[2]

let [dia, mes, anno, ...otrosValores] = fecha

console.log(dia + "/" + mes + "/")
console.log(otrosValores)

let datosPersonales = {
  nombre: "andres",
  apellido: "uribe",
  edad: 25,
  propiedad1: 1,
  propiedad2: 2,
}

// let nombre = datosPersonales.nombre
// let apellido = datosPersonales.apellido
// let edad = datosPersonales.edad
// let lasDemas2 = {
//   propiedad1 : datosPersonales.propiedad1,
//   propiedad2: datosPersonales.propiedad2
// }

let { apellido: lastname, edad, nombre, ...lasDemas } = datosPersonales

try {
  let hola = {}
  console.log(hola.saludo)
} catch (error) {
  console.log(error.message)
} finally {
  console.log("hacer esta acción independiente de si hay error o no")
}

console.log(lastname, edad, nombre)
console.log(lasDemas)
console.log(lastname)
