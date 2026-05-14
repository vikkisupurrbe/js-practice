/*

Build a script that fetches data from 3 public APIs (jokes, weather, quotes), 
displays combined results, 
then refactor with Promise.all to run in parallel and compare timing

Example of the response object:

Response {
  status: 200,
  statusText: 'OK',
  headers: Headers {
    'content-type': 'application/json; charset=utf-8',
    vary: 'Accept-Encoding',
    'x-powered-by': 'Express',
    'access-control-allow-origin': '*',
    etag: 'W/"6b-LybmR4RoX0i054YNqKPD6EiE9Qs"',
    'content-encoding': 'gzip',
    'x-cloud-trace-context': 'e16af9c328743d1a7927aa0daf4f1c98',
    date: 'Wed, 13 May 2026 21:12:50 GMT',
    server: 'Google Frontend',
    'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    'transfer-encoding': 'chunked'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
  bodyUsed: false,
  ok: true,
  redirected: false,
  type: 'basic',
  url: 'https://official-joke-api.appspot.com/random_joke'
}

*/

export function fetchJokes() {
  const url = "https://official-joke-api.appspot.com/random_joke";
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json();
    })
}

fetchJokes()
  .then(data => console.log(data))
  .catch(error => console.log(error));