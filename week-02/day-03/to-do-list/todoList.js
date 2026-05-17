/*

Build an interactive to-do list using vanilla JS + DOM: 
  - add, 
  - delete, 
  - mark complete, 
  - filter by status, 
  - persist to localStorage. No frameworks.

JSON.parse() parses a JSON string, constructing the JavaScript value or object described by the string.
  - receive data from local storage
JSON.stringify() converts a JavaScript value to a JSON string.
  - send data to local storage

Data structure:
[
  {
    id: 1,
    task: "Mop the floor",
    completed: false
  },

  {
    id: 2,
    task: "Complete daily learning",
    completed: true
  }
]

*/

function todoManager() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let nextId = 1;

  function getTodos() {
    return todos;
  }

  function add({task, completed}) {
    if (!task) {
      alert("An input is required!")
    } else {
      todos.push({
        id: nextId++,
        task,
        completed
      });
    }
  }

  function filterByStatus() {

  }

  function deleteItemById(id) {
    const itemToDelete = todos.findIndex((item) => item.id === id);
    todos.splice(itemToDelete, 1);
  }

  function save() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function clear() {
    todos = [];
    localStorage.clear();
  }

  return { getTodos, add, filterByStatus, deleteItemById, save, clear }
}

const myTodos = todoManager();
const list = document.getElementById("todo-list");

// Render all to-do list items
function renderTodos(items) {
  list.innerHTML = "";
  items.forEach(({ task, completed }) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <label>
        <input type="checkbox" onclick=handleCheck()>
      </label>
      <div class="text-container">
        <p>${task}</p>
      </div>
      <div class="card-buttons">
        <button onclick="handleEdit()">Edit</button>
        <button class="delete-btn" onclick="handleDelete()">Delete</button>
      </div>
    `;
    list.appendChild(card);
  });
}

// Clear form
function clearInput() {
  document.getElementById("name").value = "";
}

// Actions
function handleCheck() {

}

function handleDelete() {

}


// Event handlers
renderTodos(myTodos.getTodos());

document.getElementById("add-btn").addEventListener("click", () => {
  myTodos.add({
    task: document.getElementById("name").value,
    completed: false
  })
  myTodos.save();
  console.log(myTodos.getTodos());
  console.log(localStorage);
  renderTodos(myTodos.getTodos());
  clearInput();
})

document.getElementById("clear-btn").addEventListener("click", () => {
  myTodos.clear();  
  console.log(localStorage);
  console.log(myTodos.getTodos());
  renderTodos(myTodos.getTodos());
})

