/*

Build a **shopping cart** in the console: 
  add/remove items, 
  calculate totals (reduce), 
  filter by price range, 
  apply discounts. 
  Uses closures, arrays, objects, destructuring
  Add edge cases (empty cart, negative quantities)

Data structure: [{}, {}, {}]

*/

function shoppingCart() {
  const cart = [
    // {
    //   id: 1,
    //   name: "apple",
    //   quantity: 6,
    //   price: 0.5
    // }
  ];

  let nextId = 1;
  let subtotal = 0;

  function getCart() {
    return cart;
  }

  function add({ name, quantity, price }) {
    // validation
    if (quantity <= 0) { console.log("Quantity must be positive"); return; }
    if (price < 0) {console.log("Price cannot be negative"); return;}

    cart.push({
      id: nextId++,
      name,
      quantity,
      price
    })
  }

  function remove(id) {
    // find the item
    const index = cart.findIndex(item => item.id === id); // findIndex does both indexOf and find in one step
    if (index === -1) return;
    // remove the item
    cart.splice(index, 1); // splice without a delete count removes everything
  }

  function filterByPriceRange(min, max) {
    if (min === undefined && max === undefined) return cart;
    min = min === undefined ? 0 : min;
    max = max === undefined ? Infinity : max;
    return cart.filter(item => min <= item.price && item.price <= max);
  }
  
  function total() {
    if (cart.length === 0) return 0;
    let totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0); // became [object Object]180720 if no initial value
    subtotal = totalPrice;
    return subtotal;
  }
  
  function applyDiscounts(discount) {
    // validation
    if (discount < 0 || discount > 1) { console.log("Discount must be between 0 and 1"); return; }

    return Math.round(total() * (1 - discount) * 100) / 100;
  }

  return {
    getCart, add, remove, filterByPriceRange, applyDiscounts, total,
  }
}

const myShoppingCart = shoppingCart();



/*
  *********************************************
  Test
  *********************************************
*/

// Add
myShoppingCart.add({
  name: "banana",
  quantity: 12,
  price: 0.2
});
console.log(myShoppingCart.getCart()); // expect [ { id: 1, name: 'banana', quantity: 12, price: 0.2 } ] get [ { id: 1, name: 'banana', quantity: 12, price: 0.2 } ]

// Remove
myShoppingCart.remove(3);
console.log(myShoppingCart.getCart()); // expect [ { id: 1, name: 'banana', quantity: 12, price: 0.2 } ] get [ { id: 1, name: 'banana', quantity: 12, price: 0.2 } ]
myShoppingCart.remove(1);
console.log(myShoppingCart.getCart()); // expect [] get []

// Filter by price range
myShoppingCart.add({
  name: "orange",
  quantity: 6,
  price: 2
});
myShoppingCart.add({
  name: "durian",
  quantity: 6,
  price: 30
});
myShoppingCart.add({
  name: "lobster",
  quantity: 12,
  price: 60
});
console.log(myShoppingCart.filterByPriceRange(30, 60));
/*
expect 
[
  { id: 2, name: 'durian', quantity: 6, price: 30 }, 
  { id: 3, name: 'lobster', quantity: 12, price: 60 }
]
get 
[
  { id: 2, name: 'durian', quantity: 6, price: 30 }, 
  { id: 3, name: 'lobster', quantity: 12, price: 60 }
]
*/
console.log(myShoppingCart.filterByPriceRange(undefined, undefined));
/* 
expect
[
  { id: 2, name: 'orange', quantity: 6, price: 2 },
  { id: 3, name: 'durian', quantity: 6, price: 30 },
  { id: 4, name: 'lobster', quantity: 12, price: 60 }
]
get
[
  { id: 2, name: 'orange', quantity: 6, price: 2 },
  { id: 3, name: 'durian', quantity: 6, price: 30 },
  { id: 4, name: 'lobster', quantity: 12, price: 60 }
]
*/

// Total
console.log(myShoppingCart.total()); // expect 912 get 912

// Apply discount
console.log(myShoppingCart.applyDiscounts(0.1)); // expect 820.8 get 820.8

// Edge cases

// Negative quantity
myShoppingCart.add({ name: "apple", quantity: -1, price: 0.5 }); // expected "Quantity must be positive" get "Quantity must be positive"

// Zero price
myShoppingCart.add({ name: "free item", quantity: 1, price: 0 }); // expected no error message get no error message

// Discount > 1 (more than 100% off)
myShoppingCart.applyDiscounts(1.5); // expected "Discount must be between 0 and 1" get "Discount must be between 0 and 1"

// Discount < 0 (negative discount — a surcharge?)
myShoppingCart.applyDiscounts(-0.1); // expected "Discount must be between 0 and 1" get "Discount must be between 0 and 1"