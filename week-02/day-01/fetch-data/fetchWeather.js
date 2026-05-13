/*

Build a script that fetches data from 3 public APIs (jokes, weather, quotes), 
displays combined results, 
then refactor with Promise.all to run in parallel and compare timing

*/

import { fetchWeatherApi } from "openmeteo";

function fetchWeather() {
  const params = {
    latitude: 49.28,
    longitude: -123.12,
    hourly: "temperature_2m",
    timezone: "America/Los_Angeles",
    forecast_days: 1,
  }
  
  const url = "https://api.open-meteo.com/v1/forecast";

  fetchWeatherApi(url, params)
    .then((response) => {
      if(!response.ok) {
        throw new Error (`HTTP error! Status: ${response.status}`);
      }
      return response[0];
    })

}

fetchWeather()
  .then(data => console.log(data));