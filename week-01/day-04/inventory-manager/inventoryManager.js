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

  // Add items
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

    console.log(inventory, nextId);
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
  function updateItemById(id) {
    /*
      find the item with the correct id
        if id exists, promt form with name/price/quantity to update
        if id does not exist, notify the user
    */
  }

  // Delete item
  function deleteItemById(id) {
    /*
    find the item with the correct id
    remove the item from the inventory
    */
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
const grid = document.getElementById('inventory-grid');
renderInventory(myInventoryManager.getInventory());

// renders all cards to the grid
function renderInventory(items) {
  grid.innerHTML = '';
  items.forEach(({ id, name, price, quantity }) => {
    const card = document.createElement('div');
    card.className = 'card';
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

function handleEdit(id) { }
function handleDelete(id) { }

// Event handlers
document.getElementById('add-btn').addEventListener('click', () => {
  // read DOM values in the event handler and pass them in
  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);
  const quantity = Number(document.getElementById("quantity").value);
  myInventoryManager.add({ name, price, quantity });
  renderInventory(myInventoryManager.getInventory());
});
document.getElementById('search-btn').addEventListener('click', () => {
  const query = document.getElementById("search").value;
  renderInventory(myInventoryManager.searchItem(query));
});
