const $todoList = document.querySelector("#todo-list")
const $todoInput = document.querySelector("#todo-input")
const $todoButton = document.querySelector("#todo-button")

// $todoList.innerHTML = `
//     <li class="todo-list__item">
//         <div class="todo-list__checkbox-label">
//             <input type="checkbox" />
//             <p>hola</p>
//         </div>
//         <button class="todo-list__delete-button" type="button">❌</button>
//     </li>
// `

function createTask() {
  // Fase de creación
  const $task = document.createElement("li")
  $task.className = "todo-list__item"

  const $taskDeleteButton = document.createElement("button")
  $taskDeleteButton.className = "todo-list__delete-button"
  $taskDeleteButton.type = "button"
  $taskDeleteButton.innerText = "❌"

  const $taskInput = document.createElement("input")
  $taskInput.type = "checkbox"

  const $taskTitle = document.createElement("p")
  $taskTitle.innerText = "hola"

  const $taskDivContainer = document.createElement("div")
  $taskDivContainer.className = "todo-list__checkbox-label"

  // Fase de anidamiento
  $taskDivContainer.append($taskInput, $taskTitle)
  $task.append($taskDivContainer, $taskDeleteButton)

  return $task
}

function addToList() {
  const $newTask = createTask()
  $todoList.append($newTask)
}

$todoButton.addEventListener("click", addToList)

// for (let i = 0; i < 10; i++) {
//   const $newTask = createTask()
//   $todoList.append($newTask)
// }
