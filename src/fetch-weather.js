import weatherData from "./weather-data";

export default function fetchWeather(location) {
  weatherData(location).then(data => console.log(data));
}