// Agregar a la lista

function addToList(item, list) {
  let todoListItem = {
    id: list.length + 1,
    title: item,
    isCheck: false,
  }

  list.push(todoListItem)
}

function showTasks(list) {
  console.log("_".repeat(20))
  for (item of list) {
    let isCompleted = item.isCheck ? "Completed" : "Not completed"
    console.log(item.id + ": " + item.title + " [" + isCompleted + " ]")
  }
  console.log("_".repeat(20))
}

// Eliminar de una lista
// marcar como completada una tarea
// listar las tareas pendientes
// ver toda mi lista de tareas

function main() {
  let todoList = []
  let option
  do {
    option = prompt(
      "Por favor ingrese una opcion: \n 1. Agregar\n 2. Eliminar\n 3. Marcar como completado\n 4. Ver tareas pendientes\n 5. ver todas las tareas \n 0. Para terminar el programa"
    )
    switch (option) {
      case "1":
        let task = prompt("Ingrese el nombre de la tarea")
        addToList(task, todoList)
        showTasks(todoList)
        break
      case "2":
        console.log("eliminar de la lista")
        break
      case "3":
        console.log("marcar como completado")
        break
      case "4":
        console.log("ver las tareas pendientes")
        break
      case "5":
        showTasks(todoList)
        break
      default:
        console.log("Opcion incorrecta")
        break
    }
  } while (option !== "0")
}
