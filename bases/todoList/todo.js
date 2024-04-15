let todoList = []

// Agregar a la lista

function addToList(item) {
  let todoListItem = {
    id: todoList.length + 1,
    title: item,
    isCheck: false,
  }

  todoList.push(todoListItem)
}

function showTasks() {
  console.log("-".repeat(20))
  for (item of todoList) {
    let isCompleted = item.isCheck ? "Completed" : "Not completed"
    // console.log(item.id + ": " + item.title + " [" + isCompleted + " ]")
    console.log(`${item.id}: ${item.title} [${isCompleted}]`)
  }
  console.log("-".repeat(20))
}
// Eliminar de una lista
// marcar como completada una tarea
function completeTask(taskId) {}
// listar las tareas pendientes
// ver toda mi lista de tareas

function main() {
  let option
  do {
    option = prompt(
      "Por favor ingrese una opcion: \n 1. Agregar\n 2. Eliminar\n 3. Marcar como completado\n 4. Ver tareas pendientes\n 5. ver todas las tareas \n 0. Para terminar el programa"
    )
    switch (option) {
      case "1":
        let task = prompt("Ingrese el nombre de la tarea")
        addToList(task)
        showTasks()
        break
      case "2":
        console.log("eliminar de la lista")
        break
      case "3":
        console.log("marcar como completado")
        let id = prompt("Ingrese el ID de la tarea que quieres completar")
        completeTask(id)
        break
      case "4":
        console.log("ver las tareas pendientes")
        break
      case "5":
        showTasks()
        break
      default:
        console.log("Opcion incorrecta")
        break
    }
  } while (option !== "0")
}
