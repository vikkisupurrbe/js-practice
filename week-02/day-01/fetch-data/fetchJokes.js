/*

Build a script that fetches data from 3 public APIs (jokes, weather, quotes), 
displays combined results, 
then refactor with Promise.all to run in parallel and compare timing

*/

function fetchJokes() {
  const url = "https://official-joke-api.appspot.com/random_joke";
  const response = fetch(url);

  return new Promise ((resolve, reject) => {
    if (response) {
      resolve(response);
    } else {
      reject({
        name: "Error!"
      })
    }
  })
}

fetchJokes().then((message) => {
  console.log(message);
}).catch((error) => console.log(error.name));