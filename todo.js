// Todolist project Section
let todoList = []

let inputValue = document.getElementById("js-input")

let addButton = document.getElementById("js-button")


console.log(addButton)

let arrayList = document.getElementById("array-lists")

let resetButton = document.getElementById("js-reset")


resetButton.addEventListener("click", () => {
    arrayList.innerHTML = "";
})


addButton.addEventListener("click", () => {
  let todo = inputValue.value.trim()

  if(todo !== "") {
    todoList.push(todo)
    displayTodo()

    inputValue.value = "";
  }
})

function displayTodo() {
  arrayList.innerHTML = "";

  todoList.forEach((value) => {
    arrayList.innerHTML += 
    `<p>
    ${value}
    <button id="js-delete">Delete</buton>
    </p>`

    let deleteArray = document.getElementById("js-delete")
    deleteArray.addEventListener("click", () => {
    todoList.splice(value, 1)
    displayTodo()
    })

  })
}

