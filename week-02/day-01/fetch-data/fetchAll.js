import { fetchJokes } from "./fetchJokes.js";
import { fetchWeather } from "./fetchWeather.js";
import { fetchQuotes } from "./fetchQuotes.js";

// fetch with chained .then()
function fetchSequential() {
  const start = Date.now();
  return fetchJokes()
    .then(fetchWeather())
    .then(fetchQuotes())
    .then(response => {
      const timeElapsed = Date.now() - start;
      return `fetchSequential took ${timeElapsed} ms`;
    })
}

fetchSequential()
  .then(data => console.log(data))
  .catch(error => console.log(error));

// fetch with Promise.all
function fetchParallel() {
  const start = Date.now();
  return Promise.all([fetchJokes(), fetchWeather(), fetchQuotes()])
    .then(response => {
      const timeElapsed = Date.now() - start;
      return `fetchParallel took ${timeElapsed} ms`;
    })
}

fetchParallel()
  .then(data => console.log(data))
  .catch(error => console.log(error));