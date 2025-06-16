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

function formatTimeAndDate() {
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
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

function displayForecast() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="weather-forecast-day">
    <div class="weather-forecast-date">${day}</div>
    <div class="weather-forecast-icon"></div>
    <div class="weather-forecast-temperatures">
      <div class="weather-forecast-temp-high">
      °C</div>
      <div class="weather-forecast-temp-low">°C</div> 
      </div>
    </div>
    `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

/*
let firstDayTemp = document.querySelector("#first-day-temp");
let firstDayIcon = document.querySelector("#first-day-icon");
firstDayIcon.innerHTML = `
<img
src="${response.data.daily[1].condition.icon_url}"
class="current-weather-icon"
/>`;
let secondDayTemp = document.querySelector("#second-day-temp");
let secondDayIcon = document.querySelector("#second-day-icon");
secondDayIcon.innerHTML = `
<img
src="${response.data.daily[2].condition.icon_url}"
class="current-weather-icon"
/>`;
let thirdDayTemp = document.querySelector("#third-day-temp");
let thirdDayIcon = document.querySelector("#third-day-icon");
thirdDayIcon.innerHTML = `
<img
src="${response.data.daily[3].condition.icon_url}"
class="current-weather-icon"
/>`;
let fourthDayTemp = document.querySelector("#fourth-day-temp");
let fourthDayIcon = document.querySelector("#fourth-day-icon");
fourthDayIcon.innerHTML = `
<img
src="${response.data.daily[4].condition.icon_url}"
class="current-weather-icon"
/>`;
let fifthDayTemp = document.querySelector("#fifth-day-temp");
let fifthDayIcon = document.querySelector("#fifth-day-icon");
fifthDayIcon.innerHTML = `
<img
src="${response.data.daily[2].condition.icon_url}"
class="current-weather-icon"
/>`;


firstDayTemp.innerHTML = Math.round(response.data.daily[1].temperature.day);
secondDayTemp.innerHTML = Math.round(response.data.daily[2].temperature.day);
thirdDayTemp.innerHTML = Math.round(response.data.daily[3].temperature.day);
fourthDayTemp.innerHTML = Math.round(response.data.daily[4].temperature.day);
fifthDayTemp.innerHTML = Math.round(response.data.daily[5].temperature.day);

console.log(response.data);
*/

let date = new Date();
console.log(date);

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

formatTimeAndDate();
searchCity("Solbjerg");
displayForecast();
