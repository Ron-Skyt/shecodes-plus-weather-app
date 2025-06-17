function updateWeatherData(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#city");
  let weatherInfo = document.querySelector("#current-weather-info");
  let wind = document.querySelector("#wind");
  let humidity = document.querySelector("#humidity");
  let currentWeatherIcon = document.querySelector("#current-weather-icon");
  currentWeatherIcon.innerHTML = `
  <img
  src="${response.data.daily[0].condition.icon_url}"
  class="current-weather-icon"
  />`;

  currentTemperature.innerHTML = Math.round(
    response.data.daily[0].temperature.day
  );
  cityElement.innerHTML = response.data.city;
  weatherInfo.innerHTML = response.data.daily[0].condition.description;
  wind.innerHTML = Math.round(response.data.daily[0].wind.speed);
  humidity.innerHTML = Math.round(response.data.daily[0].temperature.humidity);

  formatTimeAndDate(response);
  getForecast(response.data.city);
}

function searchCity(city) {
  let apiKey = "tfafb400af42538491bd1a6a3a041o83";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = "tfafb400af42538491bd1a6a3a041o83";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index > 0 && index < 6) {
      forecastHtml =
        forecastHtml +
        `<div class="weather-forecast-day">
    <div class="weather-forecast-date">${formatDay(day.time)}</div>
    <div><img src="${
      day.condition.icon_url
    }" class="weather-forecast-icon"/></div>
    <div class="weather-forecast-temperatures">
    <div class="weather-forecast-temp-high">
    ▵${Math.round(day.temperature.maximum)}°C </div>
    <div class="weather-forecast-temp-low">▿${Math.round(
      day.temperature.minimum
    )}°C</div> 
    </div>
    </div>
    `;
    }
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

function formatTimeAndDate() {
  let date = new Date();

  let timeElement = document.querySelector("#time");
  let currentDayElement = document.querySelector("#day");
  let currentDateElement = document.querySelector("#date");

  let minutes = date.getMinutes();
  let hours = date.getHours();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  timeElement.innerHTML = `${hours}:${minutes}`;

  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  currentDayElement.innerHTML = `${formattedDay}`;

  let month = date.getMonth();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let formattedMonth = months[month];
  currentDateElement.innerHTML = `${date.getDate()} ${formattedMonth}`;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Solbjerg");