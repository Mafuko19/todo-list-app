let todos = [];

function addTodo() {
  let input = document.getElementById("todoInput");
  if (input.value === "") return;

  todos.push(input.value);
  showTodos();
  input.value = "";
}

function showTodos() {
  let list = document.getElementById("todoList");
  list.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    list.innerHTML += `<li>${todos[i]} <button onclick="deleteTodo(${i})">X</button></li>`;
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  showTodos();
}
