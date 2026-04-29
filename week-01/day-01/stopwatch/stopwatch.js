// Need a function that returns 3 functions
// Each function needs to access the same intervalID and counter variables

function stopwatch() {
  // track the variable
  let intervalId = 0;
  let counter = 0;
  let running = false;

  // keep the code DRY without repeating `return elapsedTime = counter * 1000` for each nested
  // avoid using `let elapsedTime = counter * 1000` in the beginning directly because it causes the snapshot problem
  function elapsedTime() { return counter * 1000 };

  function start() {
    if (running) return elapsedTime();

    running = true;

    intervalId = setInterval(() => {
      counter += 1;
      display.textContent = elapsedTime();
    }, 1000);

    console.log(`Running ${counter} times`);

    return elapsedTime();

    // if running is true, clicking start does nothing visible to the user
    // else {
    //   console.log(`Running ${counter} times`);
    //   return elapsedTime();
    // }
  };

  function stop() {
    clearInterval(intervalId);
    console.log(`Stopping at ${counter} time`)
    intervalId = 0;
    running = false;
    return elapsedTime();
  };

  function reset() {
    clearInterval(intervalId);
    intervalId = 0;
    counter = 0;
    running = false;
    return elapsedTime();
  };

  return { start, stop, reset };
}

const myStopwatch = stopwatch();
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Event handlers
startBtn.addEventListener("click", () => {
  myStopwatch.start();
});
stopBtn.addEventListener("click", () => {
  display.textContent = myStopwatch.stop();
});
resetBtn.addEventListener("click", () => {
  display.textContent = myStopwatch.reset();
});
