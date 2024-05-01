// Agregar a la lista
const TODO_LIST_KEY = "todoList"
let todoList = []

function addToList(item) {
  let todoListItem = {
    id: new Date().getTime(),
    title: item,
    isCheck: false,
  }

  todoList.push(todoListItem)
}

// Ver toda mi lista de tareas
function showTasks(list) {
  try {
    console.log("-".repeat(20))
    for (item of list) {
      let isCompleted = item.isCheck ? "Completed" : "Not completed"
      // console.log(item.id + ": " + item.title + " [" + isCompleted + " ]")
      console.log(`${item.id}: ${item.title} [${isCompleted}]`)
    }
    console.log("-".repeat(20))
  } catch (error) {
    console.log("ocurrió un error agregando la tarea")
  }
}

// Buscar tarea
function findTask(taskId) {
  let id = todoList.findIndex((item) => item.id === taskId)
  if (id >= 0) {
    return id
  } else {
    console.error("No existe el elemento en la lista")
  }
}
// Eliminar de una lista
function deleteTask(taskId) {
  try {
    let id = findTask(taskId)
    if (id !== undefined) {
      todoList.splice(id, 1)
      console.log("Se eliminó correctamente la tarea con id: " + taskId)
    }
  } catch (error) {
    console.error(error)
  }
}

function persistTodoList() {
  localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList))
}

function getTodoList() {
  let storage = localStorage.getItem(TODO_LIST_KEY)
  if (storage) {
    todoList = JSON.parse(storage)
  }
}

// Marcar como completada una tarea
function completeTask(taskId) {
  try {
    // let data = todoList.find((item) => item.id === taskId)
    // data.isCheck = true
    let id = findTask(taskId)

    if (id !== undefined) {
      todoList[id].isCheck = true
      console.log("Se actualizó el estado de la tarea con id: " + taskId)
    }
  } catch (error) {
    console.error(error)
  }
}
// listar las tareas pendientes
function showPendingTasks() {
  let filteredList = todoList.filter((item) => !item.isCheck)
  showTasks(filteredList)
}

function main() {
  getTodoList()
  let option
  do {
    let id
    option = prompt(
      "Por favor ingrese una opcion: \n 1. Agregar\n 2. Eliminar\n 3. Marcar como completado\n 4. Ver tareas pendientes\n 5. ver todas las tareas \n 0. Para terminar el programa"
    )
    switch (option) {
      case "1":
        let task = prompt("Ingrese el nombre de la tarea")
        addToList(task)
        persistTodoList()
        showTasks(todoList)
        break
      case "2":
        id = prompt("Ingrese el ID de la tarea que quieres eliminar")
        deleteTask(parseInt(id))
        persistTodoList()
        break
      case "3":
        id = prompt("Ingrese el ID de la tarea que quieres completar")
        completeTask(parseInt(id))
        persistTodoList()
        break
      case "4":
        showPendingTasks()
        break
      case "5":
        showTasks(todoList)
        break
      default:
        console.log("Opción incorrecta")
        break
    }
  } while (option !== "0")
}
