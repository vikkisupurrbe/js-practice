function stopwatch() {
  // Variables to track
  let intervalID = 0; // For stop and reset
  let counter = 0; // For elapsed time
  let running = false;
  function elapsedTime() { return counter };

  function start() {
    // guard double start
    if (running) { return display.textContent = elapsedTime() };

    running = true;
    intervalID = setInterval(() => {
      counter += 1;
      display.textContent = elapsedTime()
    }, 1000); // refresh display every 1000 ms (1s)

    return elapsedTime();
  }

  function stop() {
    clearInterval(intervalID);
    intervalID = 0;
    running = false;
    return elapsedTime();
  }

  function reset() {
    clearInterval(intervalID);
    intervalID = 0;
    counter = 0;
    running = false;
    return elapsedTime();
  }

  return { start, stop, reset }
}

const myStopwatch = stopwatch();
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", () => {
  myStopwatch.start();
});
stopBtn.addEventListener("click", () => {
  display.textContent = myStopwatch.stop();
});
resetBtn.addEventListener("click", () => {
  display.textContent = myStopwatch.reset();
});