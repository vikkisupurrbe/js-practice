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
  let nextId = todos.length > 0 ? Math.max(...todos.map(task => task.id)) + 1 : 1;
  // deriving nextId from the saved todos

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

  function filterByStatus(status) {
    return todos.filter((item) => item.completed === status);
  }

  function checkItemById(id, {completed}) {
    const index = todos.findIndex((item) => item.id === id);
    todos[index] = {...todos[index], completed}
  }

  function editItemById(id, {task}) {
    const index = todos.findIndex((item) => item.id === id);
    todos[index] = {...todos[index], task}
  }

  function deleteItemById(id) {
    const index = todos.findIndex((item) => item.id === id);
    todos.splice(index, 1);
    // JSON.parse(localStorage.getItem("todos")).splice(itemToDelete, 1);
    save(); // already writes the current todos to localStorage
  }

  function save() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function clear() {
    todos = [];
    localStorage.clear();
  }

  return { getTodos, add, filterByStatus, checkItemById, editItemById, deleteItemById, save, clear }
}

const myTodos = todoManager();
const list = document.getElementById("todo-list");

// Render all to-do list items
function renderTodos(items) {
  list.innerHTML = "";
  items.forEach(({ id, task, completed }) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = id; // stamp id onto the card element itself
    card.innerHTML = `
      <label>
        <input type="checkbox" class="checkbox" ${completed ? "checked" : ""} onclick="handleCheck(${id})">
      </label>
      <div class="text-container">
        <p>${task}</p>
      </div>
      <div class="card-buttons">
        <button class="edit-btn" onclick="handleEdit(${id})">Edit</button>
        <button class="delete-btn" onclick="handleDelete(${id})">Delete</button>
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
function handleCheck(id) {
  const card = document.querySelector(`[data-id="${id}"]`);
  const checkbox = card.querySelector(".checkbox").checked;
  myTodos.checkItemById(id, { completed: checkbox });
  myTodos.save();
  console.log(localStorage);
  console.log(myTodos.getTodos());
}

function handleEdit(id) {
  // find the speciifc card
  const card = document.querySelector(`[data-id="${id}"]`);
  const textContainer = card.querySelector(".text-container");
  const editBtn = card.querySelector(".edit-btn");
  const currentTask = textContainer.querySelector("p").textContent;

  // replace <p> with <input> prefilled with current task
  textContainer.innerHTML = `<input class="edit-input" value="${currentTask}" />`

  // change button to update
  editBtn.textContent = "Update";
  editBtn.onclick = () => handleUpdate(id);
}

function handleUpdate(id) {
  const card = document.querySelector(`[data-id="${id}"]`);
  const newTask = card.querySelector(".edit-input").value;

  myTodos.editItemById(id, { task: newTask });
  myTodos.save();
  renderTodos(myTodos.getTodos());
}

function handleDelete(id) {
  myTodos.deleteItemById(id);
  console.log(localStorage);
  console.log(myTodos.getTodos());
  renderTodos(myTodos.getTodos());
}


// Event handlers
renderTodos(myTodos.getTodos());

document.getElementById("add-btn").addEventListener("click", () => {
  myTodos.add({
    task: document.getElementById("name").value,
    completed: false
  })
  myTodos.save();
  console.log(localStorage);
  console.log(myTodos.getTodos());
  renderTodos(myTodos.getTodos());
  clearInput();
})

document.getElementById("clear-btn").addEventListener("click", () => {
  myTodos.clear();  
  console.log(localStorage);
  console.log(myTodos.getTodos());
  renderTodos(myTodos.getTodos());
})

document.getElementById("complete-btn").addEventListener("click", () => {
  renderTodos(myTodos.filterByStatus(true));
})

document.getElementById("pending-btn").addEventListener("click", () => {
  renderTodos(myTodos.filterByStatus(false));
})
