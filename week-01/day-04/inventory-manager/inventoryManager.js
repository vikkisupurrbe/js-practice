/*

Build an inventory manager: add items (objects with name, price, quantity), search, update, delete. Use destructuring and spread/rest throughout.

*/

/*

Data structure: [{}, {}, {}]

[
    {
      ID: 1,
      Name: "Pompompurin Plate",
      Price: 19.99,
      Quantity: 12
    },

    {
      ID: 2,
      Name: "Pompompurin Plushie",
      Price: 29.99,
      Quantity: 24
    }
  ]

*/

function inventoryManager() {
  const inventory = [];
  let nextId = 1;

  // Add item
  function add({ name, price, quantity }) {
    /*
      check if name, price, and quantity is filled
      prompt "name/price/quantity is required" if any field is empty
      add the item to the inventory, id: previous item id + 1
    */

    // form validation
    if (name === "") {
      alert("Name is required!");
    } else if (price === "") {
      alert("Price is required!");
    } else if (quantity === "") {
      alert("Quantity is required!");
    } else {
      // add an item
      inventory.push({ id: nextId++, name, price, quantity });
    }
  }


  // Search item
  function searchItem(query) {
    /*
      prompt form enter item id/name
      find the item with the correct id/name
        if id exists, show the item
        if id does not exist, notify the user
    */
    const item = inventory.find(
      item => item.id === Number(query) || // query from DOM is always a string, convert query to a number for a match
        item.name.toLowerCase().includes(query.toLowerCase())
    ); // find returns the found item
    if (!item) alert("Item does not exist"); // only fire once if id isn't found;
    return item ? [item] : [];
  }


  // Update item
  function updateItemById(id, { name, price, quantity }) {
    // find the item index
    const index = inventory.findIndex(item => item.id === id);
    // update it using spread
    inventory[index] = { ...inventory[index], name, price, quantity }; // maintain immutability by using spread, important in React later on
  }


  // Delete item
  function deleteItemById(id) {
    // find the item index
    const index = inventory.findIndex(item => item.id === id);
    // delete item
    inventory.splice(index, 1);
  }


  // Load inventory
  function getInventory() {
    return inventory;
  }

  return {
    add, searchItem, updateItemById, deleteItemById, getInventory
  }
}


const myInventoryManager = inventoryManager();
const grid = document.getElementById("inventory-grid");
renderInventory(myInventoryManager.getInventory());

// renders all cards to the grid
function renderInventory(items) {
  grid.innerHTML = "";
  items.forEach(({ id, name, price, quantity }) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${name}</h2>
      <p>ID: ${id}</p>
      <p>Price: $${price}</p>
      <p>Quantity: ${quantity}</p>
      <div class="card-buttons">
        <button onclick="handleEdit(${id})">Edit</button>
        <button class="delete-btn" onclick="handleDelete(${id})">Delete</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function handleEdit(id) {
  // find the current item's values to pre-fill the form
  // show the form in edit mode
  // on confirm, read the new values and call updateItemById
  const itemToEdit = myInventoryManager.getInventory().find((item) => item.id === id);
  if (!itemToEdit) return;
  // write current item values directly into the form
  document.getElementById("name").value = itemToEdit.name;
  document.getElementById("price").value = itemToEdit.price;
  document.getElementById("quantity").value = itemToEdit.quantity;
  document.getElementById("add-btn").textContent = "Update Item";
  // store the id on the button
  document.getElementById("add-btn").dataset.editId = id;
}

function handleDelete(id) {
  const itemToDelete = myInventoryManager.getInventory().find((item) => item.id === id);
  if (!itemToDelete) return;
  // store the id on the button
  document.getElementsByClassName("delete-btn").dataset.deleteId = id;
}

// Event handlers
document.getElementById("add-btn").addEventListener("click", () => {
  // read DOM values in the event handler and pass them in
  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);
  const quantity = Number(document.getElementById("quantity").value);
  const editId = document.getElementById("add-btn").dataset.editId;

  if (editId) {
    // update mode by checking the presence of editId, not adding another event listener
    myInventoryManager.updateItemById(Number(editId), { name, price, quantity });
    document.getElementById("add-btn").dataset.editId = "";
    document.getElementById("add-btn").textContent = "Add Item";
    // clear input
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
  } else {
    // add mode
    myInventoryManager.add({ name, price, quantity });
    // clear input
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
  }
  renderInventory(myInventoryManager.getInventory());
});

document.getElementById("search-btn").addEventListener("click", () => {
  const query = document.getElementById("search").value;
  renderInventory(myInventoryManager.searchItem(query));
});

if (document.getElementsByClassName("delete-btn")) {
  document.getElementsByClassName("delete-btn").addEventListener("click", () => {
    if (deleteId) {
      deleteItemById(deleteId);
    }
    renderInventory(myInventoryManager.searchItem(query));
  });
}