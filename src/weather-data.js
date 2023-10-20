export default async function weatherData(location) {
  const url = `https://api.weatherapi.com/v1/current.json?key=9fd44fa461c1448481d85256231710&q=${location}`;
  const response = await fetch(url);
  const weatherData = await response.json();

  return weatherData;
}