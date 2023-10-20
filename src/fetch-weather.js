import weatherData from "./weather-data";

export default function fetchWeather(location) {
  weatherData(location)
  .then(data => {
    const weatherInfo = document.getElementById("weather-info");
    const locationData = data.location;
    const currentData = data.current;
  
    // Create an image element for the weather icon
    const weatherIcon = document.createElement("img");
    weatherIcon.src = `https:${currentData.condition.icon}`;
    weatherIcon.alt = currentData.condition.text;
            
    weatherInfo.innerHTML = `
        <h2>Weather in ${locationData.name}, ${locationData.country}</h2>
        <p>Temperature: ${currentData.temp_c}°C (${currentData.temp_f}°F)</p>
        <p>Condition: ${currentData.condition.text}</p>
        <div id="weatherIcon"></div>
        <p>Wind: ${currentData.wind_kph} km/h from ${currentData.wind_dir}</p>
        <p>Humidity: ${currentData.humidity}%</p>
    `;

    // Append the weather icon to the weatherIcon div
    document.getElementById("weatherIcon").appendChild(weatherIcon);
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to fetch weather data. Please try again later.");
});
}