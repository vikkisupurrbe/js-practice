// Need a function that returns 3 functions
// Each function needs to access the same count variable

function counter() {
  let counterVal = 0;

  // increment adds 1
  function increment() { return counterVal += 1 };

  // decrement subtracts 1
  function decrement() { return counterVal -= 1 };
  function reset() { return counterVal = 0 };

  // reset sets the counter back to 0
  return { increment, decrement, reset };
}

const myCounter = counter();
const count = document.getElementById("count");
const plus = document.getElementById("increment");
const minus = document.getElementById("decrement");
const recover = document.getElementById("reset");

// Event handlers
plus.addEventListener("click", () => {
  count.textContent = myCounter.increment();
});

minus.addEventListener("click", () => {
  count.textContent = myCounter.decrement();
});

reset.addEventListener("click", () => {
  count.textContent = myCounter.reset();
});