import './styles.css';
import fetchWeather from './fetch-weather';

const weatherForm = document.getElementById('weather-form');

weatherForm.onsubmit = event => {
  const location = document.getElementById('location').value;
  fetchWeather(location);
  event.preventDefault();
};