/*

Build a script that fetches data from 3 public APIs (jokes, weather, quotes), 
displays combined results, 
then refactor with Promise.all to run in parallel and compare timing

*/

export function fetchQuotes() {
  const url = "https://quotesapi.prayushadhikari.com.np/api/quotes/random";
  return fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
}

fetchQuotes()
  .then(response => console.log(response.data[0]))
  .catch(error => console.log(error));