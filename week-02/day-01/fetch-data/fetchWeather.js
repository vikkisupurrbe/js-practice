/*

Build a script that fetches data from 3 public APIs (jokes, weather, quotes), 
displays combined results, 
then refactor with Promise.all to run in parallel and compare timing

*/

import { fetchWeatherApi } from "openmeteo";

function fetchWeather() {
  const url = "https://api.open-meteo.com/v1/forecast";
  const params = {
    latitude: 49.28,
    longitude: -123.12,
    hourly: "temperature_2m",
    timezone: "America/Los_Angeles",
    forecast_days: 1,
  }

  return fetchWeatherApi(url, params)
    .then(response => {
      const data = response[0];
      const utcOffsetSeconds = data.utcOffsetSeconds();
      const hourly = data.hourly();
      const weatherData = {
        hourly: {
          time: Array.from(
            { length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() },
            (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
          ),
          temperature_2m: hourly.variables(0).valuesArray(),
        },
      };
      return {
        latitude: data.latitude(),
        longitude: data.longitude(),
        elevation: data.elevation(),
        timezone: data.timezone(),
        timezoneAbbreviation: data.timezoneAbbreviation(),
        hourlydata: weatherData.hourly
      }
    });

}

fetchWeather()
  .then((data) => console.log(data))
  .catch(error => console.log(error));