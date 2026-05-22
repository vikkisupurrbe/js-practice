/*

Build a dynamic form that 
  - adds/removes input fields on click, 
  - validates all fields on submit, 
  - and renders results on the page. 

Use event delegation for dynamically created elements.

Questions to answer before building:
What triggers adding a new input field?
  - User clicking on "+", a handler function renders a new child node under the parent node "form-container", DOM updates the change
What does the new field look like in HTML?
  - <input type="text">
What triggers removing a field?
  - User clicking on "-", a handler function removes a new child node under the parent node "form-container", DOM updates the change
How do I know which field to remove?
  - Each field has an id, the handler transmits the id to the JS logic to check the presence of the id, then removes it from the JS memory
What triggers validation?
  - User clicking on "Submit", <button onclick="handleSubmit()">Submit</button>, the handler will run the JS logic to check the data
What counts as valid?
  - Filled
  - Right data type, no number in the text field, no text in the number field
What do I render after a valid submit?
  - Render the whole form with the latest submission
  - Clear the form after submit
  Do you clear the form after submit?
    - Yes, clear the form after submit
  Where does the result appear — above the form, below it, in a separate div?
    - In a separate div
  What does one result look like — just the values listed?
    - I want to build a people + age form, results show the number of people and the average age of all people

Title: User Name and Age
Name    Age
Alex    19  (-)
George  56  (-)
Sarah   42  (-)
Henry   23  (-)
            (+)
Results:
Number of people: 4
Average age: 35

Data structure: 
users = [
  {
    name: Chris,
    age: 22
  },

    {
    name: Chris,
    age: 22
  },
]

*/

function dynamicForm() {
  const users = [];
  let nextId = 1;

  function getUsers() {
    return users;
  }

  function add({ name, age }) {
    if (name === "" || age === "") {
      alert("Input cannot be empty")
    } else {
      users.push(
        {
          id: nextId++,
          name,
          age
        }
      )
    }
  }

  function deleteItemById(id) {
    const index = users.findIndex((item) => item.id === id);
    users.splice(index, 1);
  }

  function getTotalUsers() {
    return users.length;
  }

  function getAverageAge() {
    if (users.length === 0) return 0;
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
  }

  return { getUsers, add, deleteItemById, getTotalUsers, getAverageAge }
}

const myUsers = dynamicForm();
const list = document.getElementById("user-list");

// Actions
function renderUser(users) {
  list.innerHTML = "";
  users.forEach(({ id, name, age }) => {
    const row = document.createElement("tr");
    row.dataset.id = id;
    row.innerHTML = `
      <th scope="row">${name}</th>
      <td class="age-cell">${age}</td>
      <td>
        <button class="remove-btn" onClick="handleDelete(${id})">−</button>
      </td>
    `
    list.appendChild(row);
  });
}

function handleSubmit({ name, age }) {
  myUsers.add({ name, age });
}

function handleDelete(id) {
  myUsers.deleteItemById(id);
}

function clearInput() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}

// Handlers
document.getElementById("add-form-container").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = Number(document.getElementById("age").value);
  handleSubmit({ name, age });
  renderUser(myUsers.getUsers());
  clearInput();
  // Dynamic result rendering
  document.getElementById("count").textContent = `Number of users ${myUsers.getTotalUsers()}`
  document.getElementById("average-age").textContent = `Average age ${String(myUsers.getAverageAge())}`
})

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const rowToDelete = e.target.closest("tr");
    rowToDelete.remove();
  }
  // Dynamic result rendering
  document.getElementById("count").textContent = `Number of users ${myUsers.getTotalUsers()}`
  document.getElementById("average-age").textContent = `Average age ${String(myUsers.getAverageAge())}`
})

