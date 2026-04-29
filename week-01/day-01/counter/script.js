// Need a function that returns 3 functions
// Each function needs to access the same count variable
function counter() {

  let count = document.getElementById("count");
  let countVal = Number(count.textContent);
  const plus = document.getElementById("increment");
  const minus = document.getElementById("decrement");
  const recover = document.getElementById("reset");
  
  // increment adds 1
  plus.addEventListener("click", () => {
    countVal += 1;
    count.textContent = countVal;
  });

  // decrement subtracts 1
  minus.addEventListener("click", () => {
    countVal -= 1;
    count.textContent = countVal;
  });

  // reset sets the counter back to 0
  recover.addEventListener("click", () => {
    countVal = 0;
    count.textContent = countVal;
  });
}

counter();