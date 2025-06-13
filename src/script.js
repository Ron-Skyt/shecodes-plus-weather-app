function updateWeatherData(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#city");
  let weatherInfo = document.querySelector("#current-weather-info");
  let wind = document.querySelector("#wind");
  let humidity = document.querySelector("#humidity");

  let firstDayTemp = document.querySelector("#first-day-temp");
  let secondDayTemp = document.querySelector("#second-day-temp");
  let thirdDayTemp = document.querySelector("#third-day-temp");
  let fourthDayTemp = document.querySelector("#fourth-day-temp");
  let fifthDayTemp = document.querySelector("#fifth-day-temp");

  currentTemperature.innerHTML = Math.round(
    response.data.daily[0].temperature.day
  );
  cityElement.innerHTML = response.data.city;
  weatherInfo.innerHTML = response.data.daily[0].condition.description;
  wind.innerHTML = Math.round(response.data.daily[0].wind.speed);
  humidity.innerHTML = Math.round(response.data.daily[0].temperature.humidity);

  firstDayTemp.innerHTML = Math.round(response.data.daily[1].temperature.day);
  secondDayTemp.innerHTML = Math.round(response.data.daily[2].temperature.day);
  thirdDayTemp.innerHTML = Math.round(response.data.daily[3].temperature.day);
  fourthDayTemp.innerHTML = Math.round(response.data.daily[4].temperature.day);
  fifthDayTemp.innerHTML = Math.round(response.data.daily[5].temperature.day);

  console.log(response.data);
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

  let firstDay = document.querySelector("#first-day");
  let secondDay = document.querySelector("#second-day");
  let thirdDay = document.querySelector("#third-day");
  let fourthDay = document.querySelector("#fourth-day");
  let fifthDay = document.querySelector("#fifth-day");

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
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
  ];

  let formattedDay = days[day];
  currentDayElement.innerHTML = `${formattedDay}`;
  firstDay.innerHTML = `${days[day + 1]}`;
  secondDay.innerHTML = `${days[day + 2]}`;
  thirdDay.innerHTML = `${days[day + 3]}`;
  fourthDay.innerHTML = `${days[day + 4]}`;
  fifthDay.innerHTML = `${days[day + 5]}`;

  
  currentDateElement.innerHTML = `13 June`;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

let date = new Date();
console.log(date);

formatTimeAndDate();
searchCity("Solbjerg");
